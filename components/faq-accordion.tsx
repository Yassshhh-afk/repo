"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What happens during a session?",
    answer:
      "Each session opens the Akashic field and brings forward guidance tailored to your soul's current needs and intentions.",
  },
  {
    id: 2,
    question: "How do I prepare for my reading?",
    answer: "Prepare by being in a quiet, grounded space. Write down 3–5 questions you'd like clarity on.",
  },
  {
    id: 3,
    question: "Is this like a psychic reading?",
    answer: "No, Akashic readings are more about soul-level wisdom and guidance than predicting the future.",
  },
  {
    id: 4,
    question: "Will I remember everything from the session?",
    answer: "Most clients do, but you're encouraged to record the session or take notes.",
  },
  {
    id: 5,
    question: "Can I ask questions about other people?",
    answer: "Only in relation to your soul journey — the Akashic field respects privacy and spiritual boundaries.",
  },
]

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-galaxy-gold/30 hover:border-galaxy-gold/60 transition-all duration-500 hover:shadow-galaxy-gold/20 animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-galaxy-gold/10 transition-all duration-300 group"
            aria-expanded={openItems.includes(faq.id)}
          >
            <h3 className="text-lg md:text-xl font-semibold text-white pr-4 group-hover:text-galaxy-gold transition-colors duration-300">
              {faq.question}
            </h3>
            <div className="flex-shrink-0 bg-galaxy-gold/20 rounded-full p-2 group-hover:bg-galaxy-gold/30 transition-all duration-300">
              {openItems.includes(faq.id) ? (
                <Minus className="w-5 h-5 text-galaxy-gold group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Plus className="w-5 h-5 text-galaxy-gold group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>

          {openItems.includes(faq.id) && (
            <div className="px-8 pb-6 animate-fadeInUp">
              <div className="border-t border-galaxy-gold/30 pt-4">
                <p className="text-base md:text-lg leading-relaxed text-white/80 hover:text-white/90 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
