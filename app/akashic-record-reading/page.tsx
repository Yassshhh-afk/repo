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

export default function AkashicRecordReadingPage() {
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
                  <p className="text-lg md:text-xl text-galaxy-gold animate-fadeInUp">Service 01</p>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white animate-fadeInUp">
                    Akashic Record <span className="text-galaxy-gold text-glow">Reading</span>
                  </h1>

                  <p className="text-lg md:text-xl leading-relaxed text-white/80 animate-fadeInUp">
                    Navigate your professional journey with clarity and confidence through personalized career guidance.
                    Access the sacred records of your soul's journey and discover the wisdom that lies within your
                    eternal blueprint.
                  </p>
                </div>

                <div className="space-y-4 animate-fadeInUp">
                  <Button className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Book Your Reading
                  </Button>

                  <p className="text-sm text-white/60">Duration: 60-90 minutes | Available online and in-person</p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="space-y-6 animate-scaleIn">
                <div className="relative hover-lift">
                  <Image
                    src="/akashic-records-spiritual-reading-cosmic-energy.jpg"
                    alt="Akashic Record Reading"
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-white">What to Expect</h2>
              <p className="text-lg text-white/80">
                Your Akashic Record reading is a sacred journey into your soul's wisdom
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Soul Blueprint Access</h3>
                <p className="text-white/80">
                  Connect with your soul's eternal records to understand your life purpose, karmic patterns, and
                  spiritual gifts.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Healing Insights</h3>
                <p className="text-white/80">
                  Receive guidance on healing past wounds, releasing limiting beliefs, and stepping into your highest
                  potential.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Life Direction</h3>
                <p className="text-white/80">
                  Gain clarity on your life path, relationships, career, and spiritual development through divine
                  wisdom.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Sacred Space</h3>
                <p className="text-white/80">
                  Experience a safe, nurturing environment where your soul's truth can be revealed and honored.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-galaxy-deep-purple px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Ready to Access Your Soul's Wisdom?
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Book your Akashic Record reading today and begin your journey of self-discovery and spiritual awakening.
            </p>

            <Button className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
              Schedule Your Reading
            </Button>
          </div>
        </section>

        <WhatsAppButton />
        <Footer />
      </div>
    </>
  )
}
