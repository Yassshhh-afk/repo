import type { NextRequest } from "next/server"

export const dynamic = "force-dynamic" // keep dynamic; server-only

export async function POST(req: NextRequest) {
  const { messages = [], context = "" } = await req.json()

  const hfToken = process.env.HF_TOKEN
  const modelId = process.env.HF_MODEL || "HuggingFaceH4/zephyr-7b-beta" // safe public default

  if (!hfToken) {
    return Response.json(
      {
        text: "The assistant is temporarily unavailable. Missing HF_TOKEN environment variable. Please add HF_TOKEN in Vars.",
      },
      { status: 500 },
    )
  }

  const system = `
You are "Akashic Assistant", a warm, empathetic spiritual guide.
Answer ONLY using the provided Site Context.
If the user asks for anything outside Akashic Records, spiritual guidance, energy healing,
past-life regression, booking guidance, or content explicitly present in the Site Context,
respond with: "I can only answer questions related to Akashic Readings and the topics on this site."
Style: gentle, concise, reassuring, spiritually aligned. Avoid medical, legal, or financial advice.
Cite or reference the section names from the context when helpful (e.g., FAQ, Services, About).
`.trim()

  const trimmedContext = typeof context === "string" ? context.slice(0, 16000) : ""

  // Keep short multi-turn history
  const history = Array.isArray(messages) ? messages.slice(-8) : []
  const historyText = history.map((m: any) => `${m.role.toUpperCase()}: ${m.content}`).join("\n")

  const prompt = [
    system,
    "",
    `Site Context:\n${trimmedContext}`,
    "",
    "Conversation so far:",
    historyText || "None",
    "",
    "ASSISTANT: Provide a helpful, empathetic response based only on the Site Context.",
  ].join("\n")

  // Call Hugging Face Inference API
  const apiUrl = `https://api-inference.huggingface.co/models/${encodeURIComponent(modelId)}`

  try {
    const resp = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${hfToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 500,
          temperature: 0.3,
          return_full_text: false,
        },
      }),
    })

    // Handle model loading or rate-limit messages from HF (often 503 or 429)
    if (!resp.ok) {
      // Attempt to parse error for better messaging
      let detail = ""
      try {
        const errJson = await resp.json()
        detail = typeof errJson?.error === "string" ? errJson.error : JSON.stringify(errJson)
      } catch {
        detail = await resp.text()
      }

      // Friendly responses for common cases
      if (resp.status === 503 && detail.includes("loading")) {
        return Response.json({
          text: "The model is warming up on Hugging Face. Please try again in a few seconds.",
        })
      }

      if (resp.status === 429) {
        return Response.json({
          text: "The assistant is receiving too many requests right now. Please wait a moment and try again.",
        })
      }

      return Response.json(
        {
          text: "The assistant encountered an error connecting to the model. Please try again shortly.",
          detail,
        },
        { status: resp.status },
      )
    }

    // Parse HF responses which can have several shapes
    const data = await resp.json()
    let text = ""

    if (Array.isArray(data)) {
      // Common HF Inference shape: [{ generated_text: "..." }]
      if (typeof data[0] === "string") {
        text = data[0]
      } else if (data[0]?.generated_text) {
        text = data[0].generated_text
      } else if (data[0]?.summary_text) {
        text = data[0].summary_text
      }
    } else if (typeof data === "object" && data) {
      if (data.generated_text) text = data.generated_text
      else if (data?.choices?.[0]?.text) text = data.choices[0].text
      else if (data?.error) {
        text = "The model returned an error. Please try again, or choose another time."
      }
    }

    if (!text) {
      text = "I'm here to help with Akashic Readings and topics on this site. Could you please rephrase your question?"
    }

    return Response.json({ text })
  } catch (e: any) {
    return Response.json(
      {
        text: "The assistant is temporarily unavailable due to a network error. Please try again.",
        error: e?.message || String(e),
      },
      { status: 500 },
    )
  }
}
