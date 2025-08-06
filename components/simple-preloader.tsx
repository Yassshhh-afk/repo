'use client'

import { useEffect, useState } from 'react'

export default function SimplePreloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2c365a]">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl text-[#c4bcb0] font-serif">
            AkashicReading.
          </h1>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-[#c4bcb0] rounded-full animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-[#c4bcb0]/80 text-lg">
          Loading...
        </p>
      </div>
    </div>
  )
}
