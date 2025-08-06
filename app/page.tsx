import { Libre_Baskerville } from 'next/font/google'
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import TestimonialSlider from '../components/testimonial-slider'
import FAQAccordion from '../components/faq-accordion'
import BlogSection from '../components/blog-section'
import Footer from '../components/footer'
import SimplePreloader from '../components/simple-preloader'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function HomePage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen bg-[#c4bcb0] text-black ${libreBaskerville.className}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
          <div className="text-xl md:text-2xl">
            AkashicReading.
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-[#2c365a] transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-[#2c365a] transition-colors">
              Services
            </Link>
            <Link href="/journal" className="hover:text-[#2c365a] transition-colors">
              Journal
            </Link>
            <Link href="#contact" className="hover:text-[#2c365a] transition-colors">
              Contact
            </Link>
          </div>

          <Button 
            className="bg-[#2c365a] text-white hover:bg-[#1f2742] px-6 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Book Now
          </Button>
        </nav>

        {/* Hero Section */}
        <main className="px-6 md:px-12 py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Text */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl opacity-80">
                    Hello, I'm Remya
                  </p>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                    I guide you through the{" "}
                    <span className="text-[#2c365a]">Aakashi</span>{" "}
                    to uncover your soul's truth and empower your healing journey.
                  </h1>
                </div>

                <Link href="#about" className="flex items-center space-x-3 pt-8 hover:text-[#2c365a] transition-colors">
                  <span className="text-lg opacity-70">Scroll for more</span>
                  <ChevronDown className="w-5 h-5 animate-bounce text-[#2c365a]" />
                </Link>
              </div>

              {/* Right Column - Image */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="relative">
                  <Image
                    src="/remya-professional.jpg"
                    alt="Remya - Spiritual Guide"
                    width={600}
                    height={800}
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover"
                    priority
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="flex flex-col space-y-3 max-w-md mx-auto">
                  <div className="h-1 bg-[#2c365a] rounded-full"></div>
                  <div className="h-1 bg-[#2c365a] rounded-full w-3/4"></div>
                  <div className="h-1 bg-[#2c365a] rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* About Section */}
        <section id="about" className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-[#2c365a] uppercase tracking-wider font-semibold">
                    About
                  </p>
                  
                  <div className="relative">
                    {/* Geometric SVG Background */}
                    <div className="absolute inset-0 flex items-center justify-start opacity-20 -z-10">
                      <Image
                        src="/geometric-pattern.svg"
                        alt=""
                        width={400}
                        height={400}
                        className="w-full max-w-sm object-contain"
                      />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight relative z-20">
                      Connecting souls to their divine wisdom through sacred guidance
                    </h2>
                  </div>
                </div>

                <div className="space-y-6 relative z-20">
                  <Link href="/about">
                    <button className="border border-black bg-transparent text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                      More About Me
                    </button>
                  </Link>
                  
                  {/* Social Icons */}
                  <div className="flex space-x-6">
                    <a href="#" className="text-black hover:text-[#2c365a] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#2c365a] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#2c365a] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 0z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#2c365a] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.173 4.71C13.938 14.146 12.4 14.8 10.76 14.8c-.779 0-1.5-.122-2.14-.366-.18-.07-.335-.15-.465-.24-.04-.026-.073-.053-.1-.08-.053-.054-.08-.12-.08-.194 0-.073.027-.14.08-.194.027-.027.06-.054.1-.08.13-.09.285-.17.465-.24.64-.244 1.361-.366 2.14-.366 1.64 0 3.178-.654 4.635-1.93 1.277-1.277 2.004-2.852 2.173-4.71.013-.14-.02.28-.02.42 0 .14.007.28.02.42z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed opacity-80">
                  For over a decade, I have been guiding souls on their journey of self-discovery and healing through the ancient wisdom of Akashic Records. My path began with my own spiritual awakening, where I discovered the profound connection between our earthly experiences and our soul's eternal journey.
                </p>
                
                <p className="text-lg leading-relaxed opacity-80">
                  Through deep meditation, intuitive guidance, and sacred practices, I help individuals access their soul's blueprint and uncover the truth that lies within. Each session is a sacred space where healing, clarity, and transformation naturally unfold, empowering you to step into your highest potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - White Background */}
        <section id="services" className="bg-white px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-[#2c365a] uppercase tracking-wider font-semibold">
                    Services
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                    My key areas of expertise.
                  </h2>
                  
                  <p className="text-lg leading-relaxed opacity-80">
                    Through years of dedicated practice and spiritual development, I offer transformative guidance across multiple dimensions of healing and self-discovery, helping you unlock your soul's deepest wisdom and highest potential.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/services">
                    <button className="border border-black bg-transparent text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                      View All Services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Service 1 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-[#2c365a]">01.</span>
                    <h3 className="text-xl font-semibold">Akashic Records Reading</h3>
                  </div>
                  <p className="text-base leading-relaxed opacity-80">
                    Access your soul's eternal records to understand your life purpose, past experiences, and spiritual contracts. Gain clarity on recurring patterns and unlock your divine blueprint for transformation.
                  </p>
                </div>

                {/* Service 2 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-[#2c365a]">02.</span>
                    <h3 className="text-xl font-semibold">Soul Healing Sessions</h3>
                  </div>
                  <p className="text-base leading-relaxed opacity-80">
                    Deep energetic healing that addresses soul wounds, karmic patterns, and emotional blockages. Release what no longer serves you and step into your authentic power and wholeness.
                  </p>
                </div>

                {/* Service 3 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-[#2c365a]">03.</span>
                    <h3 className="text-xl font-semibold">Spiritual Mentorship</h3>
                  </div>
                  <p className="text-base leading-relaxed opacity-80">
                    Ongoing guidance for your spiritual journey through personalized mentorship. Develop your intuitive abilities, deepen your connection to divine wisdom, and navigate your awakening with confidence.
                  </p>
                </div>

                {/* Service 4 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-[#2c365a]">04.</span>
                    <h3 className="text-xl font-semibold">Energy Clearing & Protection</h3>
                  </div>
                  <p className="text-base leading-relaxed opacity-80">
                    Clear negative energies, attachments, and psychic debris that may be affecting your wellbeing. Learn powerful protection techniques to maintain your energetic sovereignty and spiritual clarity.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#c4bcb0] px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                Our Clients Say
              </h2>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2c365a] px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Begin Your Journey Within — With Me as Your Guide
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Discover the guidance and clarity your soul is seeking through a sacred Akashic connection. Each session is a step toward healing, understanding, and inner alignment.
            </p>
            
            <Button 
              className="bg-[#c4bcb0] text-[#2c365a] hover:bg-[#b5ada0] px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Book Now
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#c4bcb0] px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <FAQAccordion />
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Footer */}
        <Footer />

        {/* Mobile Navigation Menu (hidden by default, can be toggled) */}
        <div className="md:hidden fixed bottom-6 left-6 right-6">
          <div className="bg-[#b5ada0] rounded-lg p-4 shadow-lg border border-black/10">
            <div className="flex justify-around">
              <Link href="/about" className="text-sm hover:text-[#2c365a] transition-colors">
                About
              </Link>
              <Link href="/services" className="text-sm hover:text-[#2c365a] transition-colors">
                Services
              </Link>
              <Link href="/journal" className="text-sm hover:text-[#2c365a] transition-colors">
                Journal
              </Link>
              <Link href="#contact" className="text-sm hover:text-[#2c365a] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
