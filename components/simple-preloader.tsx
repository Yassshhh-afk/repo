'use client'

import { useEffect, useState } from 'react'

export default function SimplePreloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide preloader after page loads
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
        // Add fade out animation delay
        setTimeout(() => {
          setIsVisible(false)
        }, 500)
      }, 1000)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center galaxy-bg transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center animate-fadeInUp">
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="w-20 h-20 border-4 border-galaxy-gold/20 border-t-galaxy-gold rounded-full animate-spin mx-auto"></div>
          
          {/* Inner spinning element */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-galaxy-purple/20 border-b-galaxy-purple rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-galaxy-gold rounded-full animate-pulse"></div>
        </div>
        
        <h1 className="text-2xl md:text-3xl text-galaxy-gold font-serif mb-4 animate-pulse">
          AkashicReading.
        </h1>
        
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-galaxy-gold rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
