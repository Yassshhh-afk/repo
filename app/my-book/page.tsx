import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
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

export default function MyBookPage() {
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
            <Link href="/my-book" className="text-galaxy-gold">
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
              {/* Left Column - Book Cover */}
              <div className="space-y-6 animate-scaleIn">
                <div className="relative hover-lift mx-auto max-w-md">
                  <div className="bg-gradient-to-br from-galaxy-gold/20 to-galaxy-purple/20 p-8 rounded-2xl border-2 border-galaxy-gold/30 shadow-2xl">
                    <div className="bg-galaxy-dark/60 p-6 rounded-xl text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-galaxy-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-galaxy-gold mb-2">Akashic Wisdom</h3>
                        <p className="text-lg text-white/80 mb-4">A Journey to Your Soul's Truth</p>
                        <p className="text-sm text-white/60">by Remya Krishnakripa</p>
                      </div>

                      <div className="space-y-2 text-sm text-white/70">
                        <p>Coming Soon</p>
                        <p>Spiritual Guidance • Self-Discovery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-galaxy-gold animate-fadeInUp">My Book</p>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white animate-fadeInUp">
                    Akashic <span className="text-galaxy-gold text-glow">Wisdom</span>
                  </h1>

                  <p className="text-lg md:text-xl leading-relaxed text-white/80 animate-fadeInUp">
                    A comprehensive guide to understanding and accessing the Akashic Records. Discover ancient wisdom,
                    practical techniques, and transformative insights that will help you unlock your soul's deepest
                    truths and step into your highest potential.
                  </p>
                </div>

                <div className="space-y-4 animate-fadeInUp">
                  <Button className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Get Notified
                  </Button>

                  <p className="text-sm text-white/60">Be the first to know when the book is available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Book Section */}
        <section className="bg-black/40 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-white">About the Book</h2>
              <p className="text-lg text-white/80">A transformative journey into the sacred records of your soul</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Ancient Wisdom</h3>
                <p className="text-white/80">
                  Explore the timeless teachings and sacred practices that have guided souls for millennia in accessing
                  their divine blueprint.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Practical Techniques</h3>
                <p className="text-white/80">
                  Learn step-by-step methods to access your Akashic Records, receive guidance, and integrate insights
                  into your daily life.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Personal Stories</h3>
                <p className="text-white/80">
                  Discover real transformation stories and case studies that illustrate the profound impact of Akashic
                  Record work.
                </p>
              </div>

              <div className="space-y-4 bg-galaxy-dark/40 p-6 rounded-xl border border-galaxy-gold/20">
                <h3 className="text-xl font-semibold text-galaxy-gold">Healing Guidance</h3>
                <p className="text-white/80">
                  Find tools for emotional healing, spiritual growth, and releasing patterns that no longer serve your
                  highest good.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-white">What You'll Discover</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-galaxy-dark/20 p-6 rounded-xl">
                <div className="w-8 h-8 bg-galaxy-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-galaxy-gold mb-2">Understanding Your Soul's Journey</h3>
                  <p className="text-white/80">
                    Learn how to interpret the sacred records and understand your soul's eternal path and purpose.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-galaxy-dark/20 p-6 rounded-xl">
                <div className="w-8 h-8 bg-galaxy-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-galaxy-gold mb-2">Accessing Divine Guidance</h3>
                  <p className="text-white/80">
                    Master the techniques to safely and effectively access your Akashic Records for guidance and
                    healing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-galaxy-dark/20 p-6 rounded-xl">
                <div className="w-8 h-8 bg-galaxy-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-galaxy-gold mb-2">Healing Past Wounds</h3>
                  <p className="text-white/80">
                    Discover how to release karmic patterns, heal ancestral wounds, and transform limiting beliefs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-galaxy-dark/20 p-6 rounded-xl">
                <div className="w-8 h-8 bg-galaxy-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-galaxy-gold mb-2">Living Your Highest Potential</h3>
                  <p className="text-white/80">
                    Integrate Akashic wisdom into daily life to manifest your soul's purpose and create lasting
                    transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-galaxy-deep-purple px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Be the First to Experience This Wisdom
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Join our exclusive list to receive updates on the book's progress and be notified the moment it becomes
              available.
            </p>

            <div className="space-y-4">
              <Button className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                Join the Waitlist
              </Button>

              <p className="text-sm text-white/60">Plus receive a free preview chapter when you sign up</p>
            </div>
          </div>
        </section>

        <WhatsAppButton />
        <Footer />
      </div>
    </>
  )
}
