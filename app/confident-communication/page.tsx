import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/footer"
import SimplePreloader from "../../components/simple-preloader"
import WhatsAppButton from "../../components/whatsapp-button"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function ConfidentCommunicationPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen galaxy-bg text-white ${libreBaskerville.className}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/20 backdrop-blur-sm animate-fadeInDown">
          <Link href="/" className="text-xl md:text-2xl text-galaxy-gold text-glow animate-pulse-slow">
            AkashicReading.
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-galaxy-gold transition-all duration-300 hover:scale-105">
              About
            </Link>
            <Link href="/my-book" className="hover:text-galaxy-gold transition-all duration-300 hover:scale-105">
              My Book
            </Link>
            <Link href="/journal" className="hover:text-galaxy-gold transition-all duration-300 hover:scale-105">
              Journal
            </Link>
            <Link href="/contact" className="hover:text-galaxy-gold transition-all duration-300 hover:scale-105">
              Contact
            </Link>
          </div>

          <Button className="bg-galaxy-deep-purple text-white hover:bg-galaxy-purple px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 btn-hover-effect">
            Book Now
          </Button>
        </nav>

        {/* Hero Section */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-galaxy-gold animate-fadeInUp">Service 02</p>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white animate-fadeInUp">
                    Confident <span className="text-galaxy-gold text-glow">Communication</span>
                  </h1>

                  <p className="text-lg md:text-xl leading-relaxed text-white/80 animate-fadeInUp">
                    Craft a compelling professional narrative that showcases your unique value and attracts
                    opportunities. Learn to communicate with confidence, clarity, and authentic power in all areas of
                    your life.
                  </p>
                </div>

                <div className="space-y-4 animate-fadeInUp">
                  <Button className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Start Your Journey
                  </Button>

                  <p className="text-sm text-white/60">Duration: 45-60 minutes | Available online and in-person</p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="space-y-6 animate-scaleIn">
                <div className="relative hover-lift">
                  <Image
                    src="/confident-communication-professional-speaking.jpg"
                    alt="Confident Communication"
                    width={500}
                    height={600}
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover border-2 border-galaxy-gold/30 transition-all duration-500 hover:border-galaxy-gold/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="bg-black/40 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-white">
                Transform Your Communication
              </h2>
              <p className="text-lg text-white/80">
                Develop the skills to communicate with confidence and authenticity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Voice & Presence</h3>
                <p className="text-white/80">
                  Develop a strong, authentic voice and commanding presence that naturally draws people to listen.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Overcome Fear</h3>
                <p className="text-white/80">
                  Release communication anxiety and fear of judgment to speak with confidence in any situation.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Professional Impact</h3>
                <p className="text-white/80">
                  Learn to articulate your value, negotiate effectively, and build meaningful professional
                  relationships.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Authentic Expression</h3>
                <p className="text-white/80">
                  Discover your unique communication style and express yourself authentically in all interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-galaxy-deep-purple px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Ready to Speak with Confidence?
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your communication skills and unlock new opportunities in your personal and professional life.
            </p>

            <Button className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
              Book Your Session
            </Button>
          </div>
        </section>

        <WhatsAppButton />
        <Footer />
      </div>
    </>
  )
}
