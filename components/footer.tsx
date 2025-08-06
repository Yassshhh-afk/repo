'use client'

import { Facebook, Instagram, Twitter, Dribbble } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column - About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#c4bcb0]">
              About Remya
            </h3>
            <p className="text-base leading-relaxed text-[#c4bcb0]/80">
              A dedicated spiritual guide helping souls connect with their divine wisdom through Akashic Records readings, energy healing, and transformative mentorship for over a decade.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-[#c4bcb0]/10 hover:bg-[#c4bcb0]/20 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#c4bcb0]" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-[#c4bcb0]/10 hover:bg-[#c4bcb0]/20 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#c4bcb0]" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-[#c4bcb0]/10 hover:bg-[#c4bcb0]/20 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-[#c4bcb0]" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-[#c4bcb0]/10 hover:bg-[#c4bcb0]/20 transition-colors duration-200"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5 text-[#c4bcb0]" />
              </a>
            </div>
          </div>

          {/* Middle Column - Site Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#c4bcb0]">
              Site Links
            </h3>
            <nav className="space-y-3">
              <a href="#" className="block text-base text-[#c4bcb0]/80 hover:text-[#c4bcb0] transition-colors duration-200">
                Home
              </a>
              <a href="#services" className="block text-base text-[#c4bcb0]/80 hover:text-[#c4bcb0] transition-colors duration-200">
                Services
              </a>
              <a href="#journal" className="block text-base text-[#c4bcb0]/80 hover:text-[#c4bcb0] transition-colors duration-200">
                Journal
              </a>
              <a href="#about" className="block text-base text-[#c4bcb0]/80 hover:text-[#c4bcb0] transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="block text-base text-[#c4bcb0]/80 hover:text-[#c4bcb0] transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#c4bcb0]">
              Newsletter
            </h3>
            <p className="text-base leading-relaxed text-[#c4bcb0]/80">
              Stay connected with spiritual insights, guidance, and updates on new offerings. Join our community of souls on the journey within.
            </p>
            
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-[#c4bcb0]/10 border-[#c4bcb0]/20 text-[#c4bcb0] placeholder:text-[#c4bcb0]/50 focus:border-[#2c365a] focus:ring-[#2c365a]"
              />
              <Button 
                className="w-full bg-[#2c365a] text-white hover:bg-[#1f2742] transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="border-t border-[#c4bcb0]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#c4bcb0]/60">
              © 2024 AkashicReading. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-[#c4bcb0]/60 hover:text-[#c4bcb0] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#c4bcb0]/60 hover:text-[#c4bcb0] transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
