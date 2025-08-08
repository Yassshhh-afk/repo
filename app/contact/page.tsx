'use client'

import { useState } from 'react'
import { Libre_Baskerville } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, MapPin, Clock, Star, CheckCircle } from 'lucide-react'
import Link from "next/link"
import Footer from '../../components/footer'
import SimplePreloader from '../../components/simple-preloader'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setError(result.error || 'Failed to send message')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen galaxy-bg text-white ${libreBaskerville.className}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/20 backdrop-blur-sm">
          <Link href="/" className="text-xl md:text-2xl text-galaxy-gold">
            AkashicReading.
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-galaxy-gold transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-galaxy-gold transition-colors">
              Services
            </Link>
            <Link href="/journal" className="hover:text-galaxy-gold transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="text-galaxy-gold font-semibold transition-colors">
              Contact
            </Link>
          </div>

          <Button 
            className="bg-galaxy-deep-purple text-white hover:bg-galaxy-purple px-6 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Book Now
          </Button>
        </nav>

        {/* Header Section */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base text-galaxy-gold uppercase tracking-wider font-semibold mb-6 animate-fadeInUp">
              Get In Touch
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Contact Us
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Ready to begin your spiritual journey? Reach out to schedule your Akashic Records reading or ask any questions about our services.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column - Contact Form */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-gold/20 animate-slideInLeft">
                <h2 className="text-2xl md:text-3xl font-bold text-galaxy-gold mb-8">
                  Send us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h3>
                    <p className="text-white/80 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold resize-none"
                        placeholder="Tell us about your spiritual journey and what you're seeking guidance on..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Column - Contact Information */}
              <div className="space-y-8 animate-slideInRight">
                
                {/* Contact Details */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-gold/20">
                  <h2 className="text-2xl md:text-3xl font-bold text-galaxy-gold mb-8">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-galaxy-gold/10 rounded-lg">
                        <Mail className="w-6 h-6 text-galaxy-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <p className="text-white/80">support@remyakrishnakripa.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-galaxy-gold/10 rounded-lg">
                        <Phone className="w-6 h-6 text-galaxy-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                        <p className="text-white/80">+91 8547009801</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-galaxy-gold/10 rounded-lg">
                        <Clock className="w-6 h-6 text-galaxy-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                        <p className="text-white/80">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-galaxy-gold/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-galaxy-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Sessions</h3>
                        <p className="text-white/80">Online & In-Person Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-gold/20">
                  <h3 className="text-xl font-bold text-galaxy-gold mb-4">
                    Quick Connect
                  </h3>
                  <p className="text-white/80 mb-6">
                    For immediate assistance or to schedule a session, reach out via WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/918547009801?text=Hello%20Remya,%20I'm%20interested%20in%20learning%20more%20about%20your%20Akashic%20Records%20readings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>

                {/* Testimonial */}
                <div className="bg-galaxy-deep-purple/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-gold/20">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-galaxy-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4">
                    "Remya's guidance through the Akashic Records was transformational. Her compassionate approach and deep wisdom helped me understand my soul's purpose."
                  </p>
                  <p className="text-galaxy-gold font-semibold">- Sarah M.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-black/60 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-galaxy-gold mb-12 text-center animate-fadeInUp">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-lg font-semibold text-white mb-2">How do I book a session?</h3>
                  <p className="text-white/80">You can book through our contact form, WhatsApp, or email. We'll respond within 24 hours to schedule your session.</p>
                </div>
                
                <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-lg font-semibold text-white mb-2">Are sessions available online?</h3>
                  <p className="text-white/80">Yes! We offer both online and in-person sessions. Online sessions are just as effective as in-person readings.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <h3 className="text-lg font-semibold text-white mb-2">How long is a typical session?</h3>
                  <p className="text-white/80">Akashic Records readings typically last 60-90 minutes, allowing time for deep exploration and guidance.</p>
                </div>
                
                <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  <h3 className="text-lg font-semibold text-white mb-2">What should I prepare?</h3>
                  <p className="text-white/80">Come with an open heart and 3-5 questions you'd like guidance on. We'll handle the rest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Mobile Navigation Menu */}
        <div className="md:hidden fixed bottom-6 left-6 right-6">
          <div className="bg-galaxy-dark rounded-lg p-4 shadow-lg border border-galaxy-gold/20">
            <div className="flex justify-around">
              <Link href="/about" className="text-sm text-white hover:text-galaxy-gold transition-colors">
                About
              </Link>
              <Link href="/services" className="text-sm text-white hover:text-galaxy-gold transition-colors">
                Services
              </Link>
              <Link href="/journal" className="text-sm text-white hover:text-galaxy-gold transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-sm text-galaxy-gold font-semibold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
