"use client"

import { ArrowUpRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    category: "Akashic 101",
    title: "What Are the Akashic Records?",
    summary:
      "Discover what the Akashic Records truly are — the energetic archive of your soul's entire journey, and how they hold wisdom beyond time.",
    slug: "what-are-akashic-records",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/akashic-records-cosmic-energy.png",
  },
  {
    id: 2,
    category: "Personal Journey",
    title: "How an Akashic Reading Changed My Life",
    summary:
      "A personal story of transformation through an Akashic session, uncovering deep healing, soul truths, and renewed purpose.",
    slug: "akashic-reading-changed-my-life",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    image: "/spiritual-transformation-healing.png",
  },
  {
    id: 3,
    category: "Readiness",
    title: "Signs You're Ready for an Akashic Reading",
    summary:
      "Are you feeling stuck or questioning your path? Here are clear signals that your soul is ready for the wisdom of the Records.",
    slug: "signs-ready-for-akashic-reading",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "/spiritual-awakening-meditation.png",
  },
  {
    id: 4,
    category: "Past Lives",
    title: "Past Life Memories vs. Imagination – How to Tell",
    summary:
      "Is that vivid dream a memory or fantasy? Learn how to distinguish true past-life impressions from imagination.",
    slug: "past-life-memories-vs-imagination",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    image: "/past-life-regression-ancient-wisdom.png",
  },
]

export default function BlogSection() {
  return (
    <section className="galaxy-bg px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-galaxy-gold/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-galaxy-purple/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-galaxy-gold/5 rounded-full blur-md animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block">
            <p className="text-sm md:text-base text-galaxy-gold uppercase tracking-wider font-semibold mb-4 animate-fadeInUp">
              Spiritual Insights
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp relative"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="bg-gradient-to-r from-white via-galaxy-gold to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                Latest from the{" "}
              </span>
              <span className="bg-gradient-to-r from-galaxy-gold via-yellow-300 to-galaxy-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]">
                Blog
              </span>
            </h2>
            {/* */}
            <div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-galaxy-gold to-transparent mx-auto animate-slideInLeft"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article
                className="group bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-galaxy-gold/20 transition-all duration-700 cursor-pointer hover:scale-105 border border-galaxy-gold/30 hover:border-galaxy-gold/60 animate-fadeInUp hover-lift"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-galaxy-gold/90 text-black px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-xs text-galaxy-gold/80">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-galaxy-gold transition-colors duration-300 leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-galaxy-gold group-hover:text-white transition-colors duration-300 flex items-center space-x-2">
                      <span>Read Full Article</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <Link href="/journal">
            <button className="bg-gradient-to-r from-galaxy-gold to-galaxy-gold-light text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-galaxy-gold/30 transition-all duration-300 hover:scale-105 btn-hover-effect">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
