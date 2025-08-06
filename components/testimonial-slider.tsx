'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "ARYA",
    role: "Software Engineer",
    text: "The coach was pleasant, calm, and positive, giving me the space to discuss my challenges openly. She guided me to clear my confusions, find the right steps for career preparation, and discover the most fitting path using the strategies we discussed.",
    image: "/professional-woman-software-engineer.png"
  },
  {
    id: 2,
    name: "ANAKHA",
    role: "Associate Engineer",
    text: "Attending 'Flourish Your Communication' with Remya was transformative. She helped me overcome self-doubt, improve my communication through practical tools, and understand myself more clearly. It was truly an enriching experience.",
    image: "/professional-woman-associate-engineer.png"
  },
  {
    id: 3,
    name: "KRUPA",
    role: "Senior Test Lead",
    text: "This interaction was refreshing and uplifting, helping me realize my inner strength and discipline. Remya's patience, strong communication, and positive approach brought excellent results, and I highly recommend her coaching.",
    image: "/placeholder-zut51.png"
  },
  {
    id: 4,
    name: "RAHUL",
    role: "Product Manager",
    text: "Remya created a safe space to share my challenges and guided me with practical, insightful advice. I left each session more focused, confident, and clear on the steps I needed to take in my career.",
    image: "/professional-product-manager.png"
  },
  {
    id: 5,
    name: "PRIYA",
    role: "Data Analyst",
    text: "The sessions gave me a fresh perspective, helping me identify strengths, refine goals, and take immediate action. Remya's empathetic yet structured approach boosted my confidence and transformed my professional outlook.",
    image: "/professional-data-analyst.png"
  },
  {
    id: 6,
    name: "SURESH",
    role: "Senior Software Developer",
    text: "Before these sessions, I doubted my next move, but Remya's questions and guidance helped me see new opportunities. I now make decisions with clarity and purpose thanks to her patient support.",
    image: "/professional-man-software-developer.png"
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      {/* Main Content */}
      <div className="flex items-center justify-center">
        
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 md:left-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-[#2c365a]" />
        </button>

        {/* Testimonial Content */}
        <div className="max-w-2xl mx-auto text-center px-12 md:px-16">
          
          {/* Client Photo */}
          <div className="mb-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={`${currentTestimonial.name} - ${currentTestimonial.role}`}
                width={128}
                height={128}
                className="w-full h-full rounded-full object-cover border-3 border-[#2c365a] shadow-lg"
              />
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-black/90 italic">
              "{currentTestimonial.text}"
            </p>
          </div>

          {/* Client Info */}
          <div className="mb-8">
            <h4 className="text-xl md:text-2xl font-bold text-[#2c365a] mb-1">
              {currentTestimonial.name}
            </h4>
            <p className="text-base md:text-lg font-semibold text-black/70">
              {currentTestimonial.role}
            </p>
          </div>

        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 md:right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-[#2c365a]" />
        </button>

      </div>

      {/* Dot Pagination */}
      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-[#2c365a] scale-110' 
                : 'bg-black/30 hover:bg-black/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
