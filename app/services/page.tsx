import { Libre_Baskerville } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from '../../components/footer'
import SimplePreloader from '../../components/simple-preloader'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const services = [
  {
    id: '01',
    title: 'Career Coaching',
    description: 'Navigate your professional journey with clarity and confidence through personalized career guidance.',
    features: [
      'Career path exploration and planning',
      'Professional goal setting and achievement',
      'Industry transition support',
      'Skill development recommendations'
    ]
  },
  {
    id: '02',
    title: 'Resume + Personal Branding',
    description: 'Craft a compelling professional narrative that showcases your unique value and attracts opportunities.',
    features: [
      'Professional resume optimization',
      'LinkedIn profile enhancement',
      'Personal brand strategy development',
      'Portfolio and online presence guidance'
    ]
  },
  {
    id: '03',
    title: 'Interview Prep',
    description: 'Master the art of interviewing with confidence-building techniques and strategic preparation.',
    features: [
      'Mock interview sessions',
      'Question and answer strategies',
      'Body language and communication coaching',
      'Salary negotiation guidance'
    ]
  },
  {
    id: '04',
    title: 'Stress & Anxiety Coaching',
    description: 'Develop healthy coping mechanisms and find inner peace through mindful stress management techniques.',
    features: [
      'Stress identification and management',
      'Anxiety reduction techniques',
      'Mindfulness and meditation practices',
      'Work-life balance strategies'
    ]
  },
  {
    id: '05',
    title: 'Mid-life Crisis Coaching',
    description: 'Navigate life transitions with purpose and rediscover your passion during pivotal life moments.',
    features: [
      'Life purpose exploration',
      'Transition planning and support',
      'Identity and values clarification',
      'New chapter visioning'
    ]
  },
  {
    id: '06',
    title: 'Time & Work-Life Balance',
    description: 'Create sustainable rhythms that honor both your professional ambitions and personal well-being.',
    features: [
      'Time management optimization',
      'Boundary setting techniques',
      'Priority alignment strategies',
      'Energy management practices'
    ]
  },
  {
    id: '07',
    title: 'One-on-One Coaching',
    description: 'Receive personalized guidance tailored to your unique challenges and aspirations.',
    features: [
      'Customized coaching approach',
      'Regular progress check-ins',
      'Accountability and support',
      'Flexible session scheduling'
    ]
  },
  {
    id: '08',
    title: 'Leadership Coaching',
    description: 'Develop authentic leadership skills that inspire teams and drive meaningful organizational change.',
    features: [
      'Leadership style assessment',
      'Team management strategies',
      'Communication and influence skills',
      'Executive presence development'
    ]
  },
  {
    id: '09',
    title: 'Spiritual Alignment Sessions',
    description: 'Connect with your deeper purpose through sacred practices and soul-level guidance.',
    features: [
      'Akashic Records readings',
      'Soul purpose exploration',
      'Spiritual practice development',
      'Energy healing and clearing'
    ]
  }
]

export default function ServicesPage() {
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
            <Link href="/services" className="text-galaxy-gold font-semibold transition-colors">
              Services
            </Link>
            <Link href="/journal" className="hover:text-galaxy-gold transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="hover:text-galaxy-gold transition-colors">
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
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column - Intro */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-galaxy-gold uppercase tracking-wider font-semibold">
                    Services
                  </p>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
                    High-Impact Services
                  </h1>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-white/80">
                    Empowering professionals to unlock their highest potential through transformative coaching, spiritual guidance, and practical strategies. Whether you're navigating career transitions, seeking work-life balance, or connecting with your deeper purpose, these services are designed to create lasting change in your professional and personal life.
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="border border-galaxy-gold bg-transparent text-galaxy-gold px-8 py-3 rounded-lg hover:bg-galaxy-gold hover:text-black transition-all duration-300">
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              {/* Right Column - Stats or Image */}
              <div className="space-y-8">
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-galaxy-gold/20">
                  <h3 className="text-2xl font-bold text-galaxy-gold mb-6">Why Choose These Services?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-galaxy-gold rounded-full"></div>
                      <span className="text-lg text-white/80">Personalized approach to your unique challenges</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-galaxy-gold rounded-full"></div>
                      <span className="text-lg text-white/80">Blend of practical and spiritual guidance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-galaxy-gold rounded-full"></div>
                      <span className="text-lg text-white/80">Proven strategies for lasting transformation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-galaxy-gold rounded-full"></div>
                      <span className="text-lg text-white/80">Ongoing support and accountability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-black px-6 md:px-12 py-16 md:py-24 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-galaxy-dark/40 backdrop-blur-sm p-8 rounded-xl hover:bg-galaxy-deep-purple/40 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105 border border-galaxy-gold/20"
                >
                  <div className="space-y-6">
                    {/* Service Number */}
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-galaxy-gold group-hover:text-white transition-colors duration-500">
                        {service.id}.
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-galaxy-gold transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-white/80 group-hover:text-white transition-colors duration-500">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-galaxy-gold group-hover:bg-white rounded-full mt-2 flex-shrink-0 transition-colors duration-500"></div>
                          <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-500">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-galaxy-deep-purple px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Ready to Transform Your Professional Journey?
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step toward unlocking your highest potential. Schedule a consultation to discover which services align with your goals and aspirations.
            </p>
            
            <Button 
              className="bg-galaxy-gold text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Your Session
            </Button>
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
              <Link href="/services" className="text-sm text-galaxy-gold font-semibold transition-colors">
                Services
              </Link>
              <Link href="/journal" className="text-sm text-white hover:text-galaxy-gold transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-sm text-white hover:text-galaxy-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
