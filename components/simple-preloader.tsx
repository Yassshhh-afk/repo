"use client"

import { useEffect, useState } from "react"

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
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center galaxy-bg transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center animate-fadeInUp">
        <div className="relative mb-8 w-32 h-32 mx-auto">
          {/* Floating orbs in circular pattern */}
          <div className="absolute inset-0">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="absolute w-3 h-3 bg-galaxy-gold rounded-full animate-pulse"
                style={{
                  top: `${50 + 40 * Math.sin((index * Math.PI) / 3)}%`,
                  left: `${50 + 40 * Math.cos((index * Math.PI) / 3)}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>

          {/* Central glowing element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-gradient-to-r from-galaxy-gold to-galaxy-purple rounded-full animate-pulse shadow-lg shadow-galaxy-gold/50"></div>
            <div className="absolute inset-0 w-8 h-8 bg-galaxy-gold/30 rounded-full animate-ping"></div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl text-galaxy-gold font-serif mb-4 animate-pulse">AkashicReading.</h1>

        <div className="flex justify-center space-x-1">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-1 h-6 bg-galaxy-gold rounded-full"
              style={{
                animation: `wave 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { 
            transform: scaleY(0.3);
            opacity: 0.5;
          }
          50% { 
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
