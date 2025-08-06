'use client'

import { ArrowUpRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    category: "Akashic 101",
    title: "What Are the Akashic Records?",
    summary: "Discover what the Akashic Records truly are — the energetic archive of your soul's entire journey, and how they hold wisdom beyond time.",
    slug: "what-are-akashic-records"
  },
  {
    id: 2,
    category: "Personal Journey",
    title: "How an Akashic Reading Changed My Life",
    summary: "A personal story of transformation through an Akashic session, uncovering deep healing, soul truths, and renewed purpose.",
    slug: "akashic-reading-changed-my-life"
  },
  {
    id: 3,
    category: "Readiness",
    title: "Signs You're Ready for an Akashic Reading",
    summary: "Are you feeling stuck or questioning your path? Here are clear signals that your soul is ready for the wisdom of the Records.",
    slug: "signs-ready-for-akashic-reading"
  },
  {
    id: 4,
    category: "Past Lives",
    title: "Past Life Memories vs. Imagination – How to Tell",
    summary: "Is that vivid dream a memory or fantasy? Learn how to distinguish true past-life impressions from imagination.",
    slug: "past-life-memories-vs-imagination"
  }
]

export default function BlogSection() {
  return (
    <section className="bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-[#2c365a] uppercase tracking-wider font-semibold mb-4">
            Recent Articles
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#1d2e28]">
            Latest from the Blog.
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-[#f9f2e5] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#2c365a] hover:scale-105"
            >
              <div className="space-y-4">
                
                {/* Category Label */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#2c365a] group-hover:text-white/80 transition-colors duration-300">
                    {post.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#2c365a] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1d2e28] group-hover:text-white transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#1d2e28]/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                  {post.summary}
                </p>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
