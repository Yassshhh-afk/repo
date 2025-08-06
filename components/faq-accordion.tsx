'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "What happens during a session?",
    answer: "Each session opens the Akashic field and brings forward guidance tailored to your soul's current needs and intentions."
  },
  {
    id: 2,
    question: "How do I prepare for my reading?",
    answer: "Prepare by being in a quiet, grounded space. Write down 3–5 questions you'd like clarity on."
  },
  {
    id: 3,
    question: "Is this like a psychic reading?",
    answer: "No, Akashic readings are more about soul-level wisdom and guidance than predicting the future."
  },
  {
    id: 4,
    question: "Will I remember everything from the session?",
    answer: "Most clients do, but you're encouraged to record the session or take notes."
  },
  {
    id: 5,
    question: "Can I ask questions about other people?",
    answer: "Only in relation to your soul journey — the Akashic field respects privacy and spiritual boundaries."
  }
]

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div 
          key={faq.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            aria-expanded={openItems.includes(faq.id)}
          >
            <h3 className="text-lg md:text-xl font-semibold text-black pr-4">
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              {openItems.includes(faq.id) ? (
                <Minus className="w-5 h-5 text-[#2c365a]" />
              ) : (
                <Plus className="w-5 h-5 text-[#2c365a]" />
              )}
            </div>
          </button>
          
          {openItems.includes(faq.id) && (
            <div className="px-6 pb-5">
              <div className="border-t border-gray-200 pt-4">
                <p className="text-base md:text-lg leading-relaxed text-black/80">
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
