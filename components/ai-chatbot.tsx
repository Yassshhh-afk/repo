"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Msg = { id: string; role: "user" | "assistant"; content: string }

function collectPageContext(maxChars = 12000) {
  try {
    const nodes = Array.from(
      document.querySelectorAll("header h1, main h1, h1, h2, h3, h4, p, li, [data-ai-content]"),
    ) as HTMLElement[]
    const text = nodes
      .map((n) => n.innerText?.trim())
      .filter(Boolean)
      .join("\n")
      .replace(/\s+\n/g, "\n")
    return text.slice(0, maxChars)
  } catch {
    return ""
  }
}

async function askServer(messages: Msg[], context: string): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, context }),
  })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  const data = await res.json()
  return data.text || data.output || ""
}

// Always-mounted widget
function ChatWidget({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [context, setContext] = React.useState<string>("")
  const [messages, setMessages] = React.useState<Msg[]>([])
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (open && !context) {
      setContext(collectPageContext())
    }
  }, [open, context])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    const content = input.trim()
    if (!content || isLoading) return

    const nextMessages = [...messages, { id: crypto.randomUUID(), role: "user", content } as Msg]
    setMessages(nextMessages)
    setInput("")
    setIsLoading(true)

    try {
      const reply = await askServer(nextMessages, context)
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: reply } as Msg])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Sorry, I’m having trouble responding right now. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-label="Akashic readings assistant"
      aria-hidden={!open}
      className={cn(
        "fixed left-4 bottom-20 z-50 w-[min(92vw,380px)] rounded-xl overflow-hidden",
        "border border-yellow-500/30 bg-[#0a0a16]/90 text-yellow-50 shadow-2xl backdrop-blur",
        "transition-all duration-200",
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
      )}
    >
      <header className="flex items-center justify-between px-3 py-2 border-b border-yellow-500/20">
        <div className="text-sm">
          <div className="font-semibold text-yellow-200">Akashic Assistant</div>
          <p className="text-[11px] text-yellow-300/70">Warm, empathetic, site-based answers</p>
        </div>
        <button
          onClick={onClose}
          className="rounded-md px-2 py-1 text-xs border border-yellow-500/30 hover:bg-yellow-500/10"
        >
          Close
        </button>
      </header>

      <div className="h-[380px] overflow-y-auto p-3 space-y-3 scroll-smooth">
        {messages.length === 0 && (
          <div className="text-[13px] leading-5 text-yellow-100/80">
            Hi, I’m here to answer questions about Akashic Records, spiritual guidance, past-life sessions, and content
            you see on this site. Ask me anything related to these topics.
          </div>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "rounded-lg px-3 py-2 text-sm leading-6",
              m.role === "user"
                ? "bg-yellow-500/10 border border-yellow-500/30 ml-auto max-w-[85%]"
                : "bg-white/5 border border-white/10 mr-auto max-w-[92%]",
            )}
          >
            {m.content}
          </div>
        ))}
        {isLoading && <div className="text-xs text-yellow-200/70">Thinking…</div>}
      </div>

      <form onSubmit={handleSend} className="flex items-center gap-2 p-2 border-t border-yellow-500/20">
        <input
          aria-label="Type your question"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Akashic Readings…"
          className="flex-1 bg-transparent outline-none placeholder:text-yellow-200/50 text-yellow-100 text-sm px-2 py-2 rounded-md border border-yellow-500/30 focus:border-yellow-400"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className={cn(
            "text-sm px-3 py-2 rounded-md border transition",
            "border-yellow-500/40 text-yellow-200 hover:bg-yellow-500/10 disabled:opacity-50",
          )}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default function AIChatbot() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* FAB */}
      <button
        aria-label="Open spiritual guide chatbot"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed left-4 bottom-4 z-50 rounded-full px-4 py-3 shadow-lg transition-transform",
          "bg-[#0b0b1a]/80 border border-yellow-500/30 text-yellow-200",
          "hover:scale-105 hover:border-yellow-400/60 backdrop-blur",
        )}
      >
        <span className="inline-flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3C7.03 3 3 6.58 3 11c0 2.3 1.13 4.37 2.96 5.86L5 21l4.4-1.69c.8.22 1.65.34 2.6.34 4.97 0 9-3.58 9-8s-4.03-8-9-8z"
              stroke="#f5d67b"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
          <span className="font-medium">Ask about Akashic</span>
        </span>
      </button>

      {/* Always-mounted widget; visibility toggled via classes */}
      <ChatWidget open={open} onClose={() => setOpen(false)} />
    </>
  )
}
