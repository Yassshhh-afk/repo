import { Libre_Baskerville } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Footer from '../../components/footer'
import SimplePreloader from '../../components/simple-preloader'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function AboutPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen bg-[#c4bcb0] text-black ${libreBaskerville.className}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
          <Link href="/" className="text-xl md:text-2xl">
            AkashicReading.
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-[#2c365a] font-semibold transition-colors">
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

        {/* Header Section with Photo */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Text */}
              <div className="space-y-8 order-2 lg:order-1">
                <p className="text-sm md:text-base text-[#2c365a] uppercase tracking-wider font-semibold">
                  About
                </p>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Hi, I'm Remya
                </h1>
                
                <p className="text-lg md:text-xl italic text-black/80">
                  "Every soul carries within it the wisdom of ages. My purpose is to help you unlock that sacred knowledge and step into your highest potential."
                </p>
              </div>

              {/* Right Column - Photo */}
              <div className="order-1 lg:order-2">
                <div className="relative max-w-md mx-auto">
                  {/* Rounded Photo Container with 3:4 Aspect Ratio */}
                  <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                    <Image
                      src="/remya-professional.jpg"
                      alt="Remya - Spiritual Guide"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2c365a]/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2c365a]/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Split Column */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2c365a] mb-6">
                  How I Got Here
                </h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  My journey into spiritual guidance began with two powerful questions that changed everything:
                </p>
                
                <div className="bg-white/50 p-6 rounded-lg border-l-4 border-[#2c365a]">
                  <p className="text-lg italic text-[#2c365a] font-semibold">
                    "Are you truly connected to your soul's purpose?"
                  </p>
                  <p className="text-lg italic text-[#2c365a] font-semibold mt-2">
                    "Do you feel aligned with your spiritual path?"
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  For years, I navigated the corporate world as an Agile IT Leader in multinational companies, climbing the ladder of success yet feeling spiritually disconnected. Despite professional achievements, I experienced a profound sense of stagnancy—a calling from within that couldn't be ignored.
                </p>
                
                <p className="text-lg leading-relaxed">
                  This inner restlessness led me to discover my true passion: guiding souls through the sacred wisdom of the Akashic Records. What began as personal spiritual exploration transformed into a decade-long journey of helping others unlock their divine blueprint and heal their deepest wounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Coaching Story */}
        <section className="bg-white px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c365a] mb-8 text-center">
              My Spiritual Journey
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                My awakening began during a particularly challenging period in my corporate career. Despite external success, I felt a profound emptiness—a soul-deep knowing that there was something more meaningful I was meant to do. This spiritual crisis became my greatest gift.
              </p>
              
              <div className="bg-[#c4bcb0]/30 p-8 rounded-lg">
                <p className="text-xl italic text-center text-[#2c365a] font-semibold">
                  "The moment I first accessed the Akashic Records, I knew I had found my calling. The profound wisdom and healing that flowed through was unlike anything I had ever experienced."
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                Through years of dedicated study, meditation, and practice, I developed the ability to access the <strong>Akashic Records</strong>—the energetic archive of every soul's journey. This sacred practice revealed not only my own life purpose but also my gift for helping others navigate their spiritual path.
              </p>
              
              <p className="text-lg leading-relaxed">
                What started as personal healing evolved into a profound calling to serve others. I discovered that my corporate background, combined with spiritual wisdom, created a unique approach to <strong>soul-level transformation</strong>. Today, I guide individuals through their own awakening, helping them release karmic patterns, heal soul wounds, and step into their authentic power.
              </p>
              
              <p className="text-lg leading-relaxed">
                Each session I facilitate is a sacred space where <strong>healing, clarity, and transformation</strong> naturally unfold. My clients don't just receive guidance—they experience profound shifts that ripple through every aspect of their lives, empowering them to live from their highest potential.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer - Services Cards */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c365a] mb-12 text-center">
              What We Offer
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Service Card 1 */}
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:bg-[#2c365a] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500">
                  Akashic Records Reading
                </h3>
                <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                  Access your soul's eternal records to understand your life purpose, past experiences, and spiritual contracts. Gain clarity on recurring patterns and unlock your divine blueprint.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:bg-[#2c365a] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500">
                  Soul Healing Sessions
                </h3>
                <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                  Deep energetic healing that addresses soul wounds, karmic patterns, and emotional blockages. Release what no longer serves you and step into your authentic power.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:bg-[#2c365a] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500">
                  Spiritual Mentorship
                </h3>
                <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                  Ongoing guidance for your spiritual journey through personalized mentorship. Develop your intuitive abilities and navigate your awakening with confidence.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:bg-[#2c365a] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500">
                  Energy Clearing & Protection
                </h3>
                <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                  Clear negative energies and psychic debris. Learn powerful protection techniques to maintain your energetic sovereignty and spiritual clarity.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-white px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c365a] mb-8 text-center">
              My Credentials
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Spiritual Credentials */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#2c365a] mb-4">
                  Spiritual Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2c365a] rounded-full"></div>
                    <span className="text-lg">Certified Akashic Records Reader</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2c365a] rounded-full"></div>
                    <span className="text-lg">Energy Healing Practitioner</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2c365a] rounded-full"></div>
                    <span className="text-lg">Spiritual Mentorship Certification</span>
                  </li>
                </ul>
              </div>

              {/* Professional Background */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#2c365a] mb-4">
                  Professional Background
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2c365a] rounded-full"></div>
                    <span className="text-lg">PMP® (Project Management Professional)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2c365a] rounded-full"></div>
                    <span className="text-lg">CSM® (Certified Scrum Master)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2c365a] rounded-full"></div>
                    <span className="text-lg">ITIL & ISTQB Certified</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Beyond the Coach */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c365a] mb-8">
              Beyond the Coach
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                When I'm not guiding souls through their spiritual journey, you'll find me practicing <strong>Hatha Yoga</strong>, connecting with the ancient wisdom of body and breath. This practice keeps me grounded and centered, allowing me to hold sacred space for my clients with presence and clarity.
              </p>
              
              <p className="text-lg leading-relaxed">
                I'm also deeply passionate about <strong>Indian Classical Dance</strong>, which serves as both artistic expression and moving meditation. Through dance, I embody the divine feminine energy and celebrate the sacred stories that connect us all to our cultural and spiritual heritage.
              </p>
              
              <div className="bg-white/50 p-8 rounded-lg mt-8">
                <p className="text-xl italic text-[#2c365a] font-semibold">
                  "Balance is not something you find, it's something you create. Through yoga, dance, and spiritual practice, I cultivate the harmony that allows me to serve from my highest self."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-[#2c365a] px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Begin Your Journey Within — With Me as Your Guide
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Discover the guidance and clarity your soul is seeking through a sacred Akashic connection. Each session is a step toward healing, understanding, and inner alignment.
            </p>
            
            <Button 
              className="bg-[#c4bcb0] text-[#2c365a] hover:bg-[#b5ada0] px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Mobile Navigation Menu */}
        <div className="md:hidden fixed bottom-6 left-6 right-6">
          <div className="bg-[#b5ada0] rounded-lg p-4 shadow-lg border border-black/10">
            <div className="flex justify-around">
              <Link href="/about" className="text-sm text-[#2c365a] font-semibold transition-colors">
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
