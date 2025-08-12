import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "../../../components/footer"
import SimplePreloader from "../../../components/simple-preloader"
import { notFound } from "next/navigation"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const blogPosts = [
  {
    id: 1,
    category: "Akashic 101",
    title: "What Are the Akashic Records?",
    excerpt:
      "Discover what the Akashic Records truly are — the energetic archive of your soul's entire journey, and how they hold wisdom beyond time.",
    slug: "what-are-akashic-records",
    readTime: "8 min read",
    publishDate: "December 15, 2024",
    content: `
      <p>The Akashic Records are often described as the "Book of Life" or the universal library that contains the energetic imprint of every soul's journey throughout time. But what does this really mean, and how can understanding the Records transform your life?</p>

      <h2>The Cosmic Library</h2>
      <p>Imagine a vast, infinite library that exists beyond the physical realm—a place where every thought, emotion, action, and experience of every soul is recorded and preserved. This is the essence of the Akashic Records. The word "Akashic" comes from the Sanskrit word "Akasha," meaning "ether" or "space," representing the fundamental substance of the universe.</p>

      <p>These Records are not physical books or files, but rather energetic imprints that exist in the quantum field of consciousness. They contain the complete history of your soul's journey—not just this lifetime, but all lifetimes, including past lives, parallel lives, and even potential future timelines.</p>

      <h2>What Information Do the Records Contain?</h2>
      <p>When we access the Akashic Records, we can discover:</p>
      <ul>
        <li><strong>Soul Origins:</strong> Where your soul first began its journey and its original purpose</li>
        <li><strong>Past Life Experiences:</strong> Significant lifetimes that are influencing your current path</li>
        <li><strong>Karmic Patterns:</strong> Recurring themes and lessons your soul is working to master</li>
        <li><strong>Soul Gifts and Talents:</strong> Natural abilities you've developed across lifetimes</li>
        <li><strong>Life Purpose:</strong> Your soul's mission and highest potential in this lifetime</li>
        <li><strong>Relationship Dynamics:</strong> Soul connections and their deeper meanings</li>
        <li><strong>Healing Opportunities:</strong> Areas where your soul seeks growth and resolution</li>
      </ul>

      <h2>How Are the Records Accessed?</h2>
      <p>Accessing the Akashic Records requires entering a sacred, meditative state of consciousness. As a trained Akashic Records reader, I use specific prayers and invocations to open the Records with permission and protection. This process involves:</p>

      <p><strong>Sacred Opening:</strong> Using ancient prayers to request access to the Records with the highest good in mind.</p>
      <p><strong>Energetic Alignment:</strong> Raising my vibration to match the frequency of the Records.</p>
      <p><strong>Divine Protection:</strong> Ensuring that only information for the highest good is received.</p>
      <p><strong>Clear Channel:</strong> Becoming a clear conduit for the information to flow through.</p>

      <h2>The Healing Power of the Records</h2>
      <p>One of the most profound aspects of working with the Akashic Records is their healing potential. When we understand the deeper patterns and purposes behind our experiences, we can:</p>

      <p><strong>Release Limiting Beliefs:</strong> Understanding the soul-level origins of our fears and limitations allows us to release them with compassion.</p>
      <p><strong>Heal Relationship Patterns:</strong> Discovering the karmic connections with others helps us navigate relationships with greater wisdom.</p>
      <p><strong>Align with Purpose:</strong> Knowing our soul's mission helps us make decisions that align with our highest path.</p>
      <p><strong>Transform Challenges:</strong> Seeing our difficulties as soul growth opportunities transforms our perspective on life's challenges.</p>

      <h2>Common Misconceptions</h2>
      <p>It's important to address some common misconceptions about the Akashic Records:</p>

      <p><strong>They're not fortune-telling:</strong> The Records provide guidance and insight, but they honor free will and don't predict fixed futures.</p>
      <p><strong>They're not judgment:</strong> The Records hold information with complete love and neutrality—there's no judgment about past actions.</p>
      <p><strong>They're not entertainment:</strong> Accessing the Records is a sacred practice meant for healing and growth, not curiosity or entertainment.</p>

      <h2>Your Journey with the Records</h2>
      <p>If you feel called to explore your Akashic Records, trust that calling. Your soul is ready to receive the wisdom and healing that the Records can provide. This ancient practice offers a pathway to understanding yourself at the deepest level and stepping into your highest potential.</p>

      <p>Remember, the journey with the Akashic Records is deeply personal and transformative. Each reading is unique, tailored to what your soul most needs to know in this moment of your journey.</p>
    `,
  },
  {
    id: 2,
    category: "Personal Journey",
    title: "How an Akashic Reading Changed My Life",
    excerpt:
      "A personal story of transformation through an Akashic session, uncovering deep healing, soul truths, and renewed purpose.",
    slug: "akashic-reading-changed-my-life",
    readTime: "10 min read",
    publishDate: "December 10, 2024",
    content: `
      <p>Three years ago, I was at a crossroads in my life. Despite having what looked like success on the outside—a stable career, loving relationships, and good health—I felt deeply disconnected from my purpose. There was a persistent feeling that I was living someone else's life, not my own. That's when I decided to have my first Akashic Records reading.</p>

      <h2>The Call to the Records</h2>
      <p>I had heard about the Akashic Records through a friend, but honestly, I was skeptical. The idea of accessing some cosmic library of my soul's journey seemed too mystical, too far-fetched. But the feeling of being lost in my own life was becoming unbearable, and I was willing to try anything that might provide clarity.</p>

      <p>When I booked my first session, I was nervous and didn't know what to expect. Would I hear voices? See visions? Would it be like a psychic reading? I had so many questions and preconceived notions that I almost canceled the appointment twice.</p>

      <h2>The Opening</h2>
      <p>The session began with the reader explaining the process and asking for my permission to access my Records. There was something immediately sacred about the way she spoke—with such reverence and respect for the process. As she opened my Records with the sacred prayer, I felt a shift in the energy of the room. It became warmer, more expansive, filled with an indescribable sense of love.</p>

      <p>The first thing that came through was about my soul's origin. I learned that my soul had chosen to incarnate during this time period specifically to help others navigate spiritual awakening during a time of great planetary shift. This resonated so deeply that I started crying—not from sadness, but from recognition. It was like remembering something I had always known but had forgotten.</p>

      <h2>Uncovering Past Life Patterns</h2>
      <p>The reading revealed several past lives that were directly influencing my current experience. In one significant lifetime, I had been a healer who was persecuted for my gifts. This explained my deep fear of being seen and my tendency to hide my intuitive abilities. Understanding this pattern allowed me to see how it was playing out in my current life—I was dimming my light to stay safe.</p>

      <p>Another past life showed me as a teacher who had become too attached to being right, leading to spiritual pride and isolation. This helped me understand my current struggle with perfectionism and my fear of making mistakes. The Records showed me how these patterns were opportunities for growth, not punishments.</p>

      <h2>The Soul Contract Revelation</h2>
      <p>Perhaps the most transformative part of the reading was learning about my soul contracts—agreements I had made before incarnating. I discovered that many of the challenging relationships in my life were actually soul agreements designed to help both parties grow. My difficult relationship with my mother, for instance, was revealed to be a contract where we agreed to help each other learn about unconditional love and forgiveness.</p>

      <p>This completely shifted my perspective on my relationships. Instead of seeing conflicts as problems to be solved, I began to see them as opportunities for soul growth. This didn't make the challenges easier, but it gave them meaning and purpose.</p>

      <h2>Discovering My Life Purpose</h2>
      <p>The Records revealed that my soul's purpose in this lifetime was to bridge the gap between the spiritual and practical worlds—to help people integrate spiritual wisdom into their daily lives. This explained why I had always felt torn between my spiritual interests and my practical career. I wasn't meant to choose one or the other; I was meant to find a way to blend them.</p>

      <p>The reading also showed me specific gifts I had developed over many lifetimes: the ability to translate complex spiritual concepts into accessible language, a natural talent for creating safe spaces for healing, and an intuitive understanding of energy and consciousness.</p>

      <h2>The Integration Process</h2>
      <p>The weeks following my reading were intense. I felt like I was processing lifetimes of information and emotion. Some days I felt incredibly clear and purposeful; other days I felt overwhelmed by the magnitude of what I had learned. The reader had warned me about this integration period and encouraged me to be patient with myself.</p>

      <p>I started journaling about the insights from my reading, and patterns began to emerge. I could see how the information was already starting to shift my perspective on current situations. I found myself responding to challenges with more compassion and understanding, both for myself and others.</p>

      <h2>Taking Action</h2>
      <p>Armed with this new understanding of my soul's purpose, I began making changes in my life. I started incorporating more spiritual practices into my daily routine. I began sharing my insights with friends and family, and was amazed by how receptive people were. I started a blog about spiritual growth and practical wisdom, which quickly gained a following.</p>

      <p>Most importantly, I began training to become an Akashic Records reader myself. The calling was so strong that I couldn't ignore it. I wanted to help others experience the same profound healing and clarity that I had received.</p>

      <h2>The Ongoing Journey</h2>
      <p>That first reading was just the beginning. I've had several more sessions over the years, each one providing deeper layers of understanding and healing. The Records have become a trusted source of guidance in my life, helping me navigate major decisions and understand the deeper meaning behind my experiences.</p>

      <p>The most significant change has been in my relationship with myself. I no longer feel like I'm living someone else's life. I understand my quirks, my challenges, and my gifts as part of a larger soul journey. I have compassion for my struggles because I understand their purpose. I have confidence in my path because I know it's aligned with my soul's mission.</p>

      <h2>What I Want You to Know</h2>
      <p>If you're feeling called to explore your own Akashic Records, I want you to know that it's one of the most loving, healing experiences you can give yourself. The Records hold no judgment, only infinite love and wisdom. They see you not as broken or flawed, but as a magnificent soul on a journey of growth and expansion.</p>

      <p>Your Records contain everything you need to know to live your most authentic, purposeful life. They hold the keys to understanding your relationships, your challenges, your gifts, and your mission. Most importantly, they remind you of who you truly are beyond the roles and identities of this lifetime.</p>

      <p>Trust the calling of your soul. If you're reading this, it's not by accident. Your soul is ready for the wisdom and healing that the Akashic Records can provide.</p>
    `,
  },
  {
    id: 3,
    category: "Readiness",
    title: "Signs You're Ready for an Akashic Reading",
    excerpt:
      "Are you feeling stuck or questioning your path? Here are clear signals that your soul is ready for the wisdom of the Records.",
    slug: "signs-ready-for-akashic-reading",
    readTime: "6 min read",
    publishDate: "December 5, 2024",
    content: `
      <p>Many people feel drawn to the Akashic Records but wonder if they're truly ready for such a profound experience. The truth is, if you're asking this question, you're likely already being called by your soul to explore this ancient wisdom. However, there are specific signs that indicate your soul is particularly ready to receive the healing and insights that an Akashic Records reading can provide.</p>

      <h2>1. You Feel Stuck in Repeating Patterns</h2>
      <p>One of the clearest signs you're ready for an Akashic reading is when you notice yourself repeating the same patterns over and over again, despite your best efforts to change. These might be:</p>
      <ul>
        <li>Attracting the same type of challenging relationships</li>
        <li>Facing similar obstacles in your career or personal growth</li>
        <li>Experiencing recurring themes in your life experiences</li>
        <li>Feeling like you're hitting the same wall repeatedly</li>
      </ul>
      <p>The Akashic Records can reveal the soul-level origins of these patterns, often tracing them back to past lives or soul contracts, and provide guidance on how to transform them.</p>

      <h2>2. You're Questioning Your Life Purpose</h2>
      <p>If you find yourself asking deep questions about your purpose and meaning, your soul is calling for clarity. Signs include:</p>
      <ul>
        <li>Feeling like you're living someone else's life</li>
        <li>Sensing you have a mission but not knowing what it is</li>
        <li>Feeling unfulfilled despite external success</li>
        <li>Having a strong sense that you're meant for something more</li>
        <li>Experiencing a spiritual awakening or shift in consciousness</li>
      </ul>
      <p>The Records can provide profound insights into your soul's mission and help you align with your highest path.</p>

      <h2>3. You're Experiencing Intense Relationship Challenges</h2>
      <p>Relationships often serve as mirrors for our soul's growth, and when you're ready for deeper understanding, relationship challenges may intensify. You might be:</p>
      <ul>
        <li>Struggling with a particularly difficult family relationship</li>
        <li>Experiencing intense connections that feel karmic in nature</li>
        <li>Finding yourself in relationships that trigger deep healing</li>
        <li>Questioning why certain people have such a strong impact on you</li>
        <li>Feeling called to heal generational patterns</li>
      </ul>
      <p>An Akashic reading can reveal the soul contracts and karmic connections behind these relationships, providing healing and understanding.</p>

      <h2>4. You're Going Through a Major Life Transition</h2>
      <p>Times of transition are often when our souls are most open to guidance and healing. You might be experiencing:</p>
      <ul>
        <li>Career changes or feeling called to a new profession</li>
        <li>Relationship transitions (marriage, divorce, loss)</li>
        <li>Health challenges that are prompting deeper self-reflection</li>
        <li>Geographic moves or major life restructuring</li>
        <li>Spiritual awakening or consciousness shifts</li>
      </ul>
      <p>The Records can provide clarity and support during these pivotal moments, helping you understand the deeper purpose behind the changes.</p>

      <h2>5. You Have Unexplained Fears or Phobias</h2>
      <p>Sometimes our souls carry memories from past experiences that manifest as unexplained fears in this lifetime. Signs include:</p>
      <ul>
        <li>Phobias that don't seem to have a logical origin</li>
        <li>Intense fears around specific situations or environments</li>
        <li>Feeling unsafe in certain circumstances without clear reason</li>
        <li>Having strong aversions to particular places, people, or activities</li>
        <li>Experiencing anxiety that feels ancient or deep-rooted</li>
      </ul>
      <p>The Akashic Records can help identify the source of these fears and provide healing for past-life traumas.</p>

      <h2>6. You Feel a Strong Connection to Certain Time Periods or Cultures</h2>
      <p>If you've always felt drawn to specific historical periods, cultures, or geographic locations, this could indicate past-life connections. You might:</p>
      <ul>
        <li>Feel inexplicably drawn to certain countries or cultures</li>
        <li>Have natural talents or knowledge that seem to come from nowhere</li>
        <li>Feel nostalgic for time periods you've never lived in</li>
        <li>Have recurring dreams about specific places or eras</li>
        <li>Feel like you don't belong in this time period</li>
      </ul>
      <p>An Akashic reading can explore these connections and help you understand how past-life experiences are influencing your current path.</p>

      <h2>7. You're Experiencing Spiritual Gifts or Abilities</h2>
      <p>As you evolve spiritually, you may notice new abilities or sensitivities emerging. Signs include:</p>
      <ul>
        <li>Increased intuitive abilities or psychic experiences</li>
        <li>Heightened sensitivity to energy or emotions</li>
        <li>Natural healing abilities or interest in energy work</li>
        <li>Prophetic dreams or visions</li>
        <li>Feeling called to help others in a spiritual capacity</li>
      </ul>
      <p>The Records can help you understand these gifts and how to develop and use them in alignment with your soul's purpose.</p>

      <h2>8. You Feel Ready for Deep Healing</h2>
      <p>Perhaps the most important sign is a genuine readiness for deep, transformational healing. This includes:</p>
      <ul>
        <li>Being willing to look at difficult truths about yourself</li>
        <li>Having the emotional capacity to process profound insights</li>
        <li>Being committed to personal growth and transformation</li>
        <li>Feeling ready to release old patterns and embrace change</li>
        <li>Having a support system to help you integrate new insights</li>
      </ul>

      <h2>Trust Your Inner Knowing</h2>
      <p>Ultimately, the most reliable indicator that you're ready for an Akashic Records reading is your own inner knowing. If you feel called to this work, if something inside you is saying "yes" despite any fears or doubts, trust that calling. Your soul knows when it's ready for the next level of healing and understanding.</p>

      <p>Remember, there's no "perfect" time to have a reading. The Records meet you exactly where you are and provide what you're ready to receive. If you're feeling the call, honor it. Your soul is ready to remember who you truly are and why you're here.</p>

      <h2>Preparing for Your Reading</h2>
      <p>If you recognize these signs in your own life and feel ready to explore your Akashic Records, take some time to prepare:</p>
      <ul>
        <li>Set clear intentions for what you hope to gain from the reading</li>
        <li>Prepare specific questions about areas where you're seeking guidance</li>
        <li>Create space in your schedule for integration after the reading</li>
        <li>Approach the experience with an open heart and mind</li>
        <li>Trust that you'll receive exactly what your soul needs to know</li>
      </ul>

      <p>Your Akashic Records are waiting to welcome you home to the truth of who you are. When you're ready, they'll be there with infinite love, wisdom, and healing.</p>
    `,
  },
  {
    id: 4,
    category: "Past Lives",
    title: "Past Life Memories vs. Imagination – How to Tell",
    excerpt:
      "Is that vivid dream a memory or fantasy? Learn how to distinguish true past-life impressions from imagination.",
    slug: "past-life-memories-vs-imagination",
    readTime: "7 min read",
    publishDate: "November 28, 2024",
    content: `
      <p>One of the most common questions I receive from clients is: "How do I know if what I'm experiencing is a real past-life memory or just my imagination?" This is a valid and important question, especially as more people are awakening to their multidimensional nature and beginning to access memories from other lifetimes.</p>

      <p>The truth is, distinguishing between genuine past-life memories and imagination requires developing discernment and understanding the unique characteristics of authentic soul memories. Let me share some key indicators that can help you navigate this fascinating aspect of spiritual exploration.</p>

      <h2>Characteristics of Authentic Past-Life Memories</h2>

      <h3>1. Emotional Resonance and Body Sensations</h3>
      <p>Genuine past-life memories typically come with strong emotional and physical responses that feel disproportionate to your current life experiences. You might:</p>
      <ul>
        <li>Feel intense emotions that seem to come from nowhere</li>
        <li>Experience physical sensations in your body during the memory</li>
        <li>Have visceral reactions to certain historical periods, places, or objects</li>
        <li>Feel a deep sense of familiarity or "coming home" when encountering certain environments</li>
      </ul>
      <p>These responses often feel ancient and profound, unlike the emotions associated with regular dreams or fantasies.</p>

      <h3>2. Consistency and Detail</h3>
      <p>Authentic past-life memories tend to be remarkably consistent over time. Unlike dreams or fantasies that may change with each recollection, genuine memories maintain their core details:</p>
      <ul>
        <li>The same characters, settings, and events appear consistently</li>
        <li>Details remain stable even when accessed months or years apart</li>
        <li>The emotional tone and significance of events don't fluctuate</li>
        <li>New details may emerge, but they add to rather than contradict the original memory</li>
      </ul>

      <h3>3. Historical Accuracy</h3>
      <p>While not always verifiable, genuine past-life memories often contain historically accurate details that you couldn't have known through normal means:</p>
      <ul>
        <li>Accurate descriptions of clothing, architecture, or customs from specific time periods</li>
        <li>Knowledge of historical events, languages, or cultural practices</li>
        <li>Understanding of social structures or daily life in past eras</li>
        <li>Familiarity with geographic locations you've never visited</li>
      </ul>
      <p>However, it's important to note that not all past-life memories will be historically verifiable, as some may come from very ancient times or parallel realities.</p>

      <h3>4. Relevance to Current Life Patterns</h3>
      <p>Authentic past-life memories usually have direct relevance to your current life experiences, challenges, or gifts:</p>
      <ul>
        <li>They explain recurring patterns or themes in your current life</li>
        <li>They provide insight into unexplained fears, phobias, or attractions</li>
        <li>They reveal the source of natural talents or abilities</li>
        <li>They help you understand complex relationship dynamics</li>
      </ul>
      <p>Your soul typically reveals past-life information when it's relevant to your current growth and healing.</p>

      <h2>Signs It Might Be Imagination</h2>

      <h3>1. Glamorous or Fantasy-Like Elements</h3>
      <p>Be cautious of memories that seem too glamorous or fantasy-like:</p>
      <ul>
        <li>Always being famous historical figures or royalty</li>
        <li>Having magical powers or abilities that seem unrealistic</li>
        <li>Living in idealized circumstances without any challenges</li>
        <li>Experiences that feel more like movie scenes than real life</li>
      </ul>
      <p>While some souls may have had notable lifetimes, most past-life memories involve ordinary people living ordinary lives with extraordinary lessons.</p>

      <h3>2. Inconsistency and Changing Details</h3>
      <p>Imagined scenarios often change with each recollection:</p>
      <ul>
        <li>Details shift or contradict previous versions</li>
        <li>The story becomes more elaborate or dramatic over time</li>
        <li>Characters or settings change without explanation</li>
        <li>The emotional significance fluctuates</li>
      </ul>

      <h3>3. Lack of Emotional or Physical Response</h3>
      <p>Purely imagined scenarios typically don't produce the deep emotional or physical responses characteristic of genuine memories:</p>
      <ul>
        <li>The experience feels more mental than visceral</li>
        <li>There's no lasting emotional impact</li>
        <li>No physical sensations accompany the images</li>
        <li>The memory feels detached or observational rather than experiential</li>
      </ul>

      <h2>The Gray Area: Symbolic and Metaphorical Memories</h2>
      <p>Sometimes what appears to be imagination may actually be your soul communicating through symbols and metaphors. These experiences might not be literal past-life memories but could represent:</p>
      <ul>
        <li>Archetypal energies you're working with in this lifetime</li>
        <li>Symbolic representations of soul lessons or themes</li>
        <li>Collective unconscious memories rather than personal experiences</li>
        <li>Future potential timelines your soul is exploring</li>
      </ul>
      <p>Don't dismiss these experiences entirely—they may contain valuable insights even if they're not literal memories.</p>

      <h2>Methods for Verification and Exploration</h2>

      <h3>1. Professional Past-Life Regression</h3>
      <p>Working with a qualified past-life regression therapist can help you access and verify memories in a safe, controlled environment. They can guide you through the process and help you distinguish between genuine memories and imagination.</p>

      <h3>2. Akashic Records Reading</h3>
      <p>An Akashic Records reading can provide verification and context for past-life experiences. The Records can confirm whether specific memories are accurate and explain their relevance to your current life.</p>

      <h3>3. Meditation and Journaling</h3>
      <p>Regular meditation and journaling about your experiences can help you develop discernment:</p>
      <ul>
        <li>Notice patterns in your memories and their consistency over time</li>
        <li>Pay attention to your emotional and physical responses</li>
        <li>Research historical details that come up in your memories</li>
        <li>Look for connections between past-life memories and current life patterns</li>
      </ul>

      <h3>4. Body-Based Awareness</h3>
      <p>Your body is an excellent detector of authentic memories:</p>
      <ul>
        <li>Notice physical sensations during memory recall</li>
        <li>Pay attention to areas of tension or energy shifts</li>
        <li>Observe your breathing and heart rate during the experience</li>
        <li>Trust your gut feelings about the authenticity of the memory</li>
      </ul>

      <h2>The Purpose Behind Past-Life Memories</h2>
      <p>Remember that the ultimate purpose of accessing past-life memories is healing and growth, not entertainment or ego gratification. Authentic memories typically serve to:</p>
      <ul>
        <li>Heal trauma or patterns carried from other lifetimes</li>
        <li>Understand the deeper purpose behind current life challenges</li>
        <li>Recognize and develop soul gifts and talents</li>
        <li>Improve relationships through understanding karmic connections</li>
        <li>Align with your soul's mission and highest potential</li>
      </ul>

      <h2>Trusting Your Inner Wisdom</h2>
      <p>Ultimately, developing the ability to distinguish between past-life memories and imagination is a skill that improves with practice and spiritual development. Trust your inner wisdom, but also maintain healthy skepticism. Not every vivid dream or meditation experience is a past-life memory, but not every unusual experience should be dismissed as imagination either.</p>

      <p>The key is to approach these experiences with an open but discerning mind, focusing on their potential for healing and growth rather than their entertainment value. Whether a memory is literally accurate or symbolically meaningful, if it provides insight and promotes healing, it has served its purpose.</p>

      <p>Remember, your soul will reveal what you need to know when you're ready to receive it. Trust the process, and allow your understanding to unfold naturally as you continue on your spiritual journey.</p>
    `,
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
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
            <Link href="/contact" className="hover:text-galaxy-gold transition-colors">
              Contact
            </Link>
          </div>

          <Button className="bg-galaxy-deep-purple text-white hover:bg-galaxy-purple px-6 py-2 rounded-lg shadow-md transition-all duration-200">
            Book Now
          </Button>
        </nav>

        {/* Article Header */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-galaxy-gold mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/journal" className="hover:text-white transition-colors">
                Journal
              </Link>
              <span>/</span>
              <span className="text-white">{post.title}</span>
            </div>

            {/* Category and Meta */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm font-semibold text-galaxy-gold uppercase tracking-wider bg-galaxy-gold/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-white/70">{post.readTime}</span>
              <span className="text-sm text-white/70">{post.publishDate}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white">{post.title}</h1>

            {/* Excerpt */}
            <p className="text-xl leading-relaxed text-white/80 mb-12">{post.excerpt}</p>

            {/* Featured Image Placeholder */}
            <div className="mb-12">
              <img
                src={`/abstract-geometric-shapes.png?height=400&width=800&query=${encodeURIComponent(post.title + " spiritual blog featured image")}`}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-galaxy-gold prose-headings:font-bold
                prose-p:text-white/90 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-white/90 prose-li:mb-2
                prose-strong:text-galaxy-gold prose-strong:font-semibold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Image Placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <img
                src={`/abstract-geometric-shapes.png?height=300&width=400&query=${encodeURIComponent(post.category + " spiritual practice illustration")}`}
                alt={`${post.category} illustration`}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src={`/abstract-geometric-shapes.png?height=300&width=400&query=${encodeURIComponent("meditation and spiritual growth visual")}`}
                alt="Spiritual growth visualization"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Call to Action */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mt-16 text-center">
              <h3 className="text-2xl font-bold text-galaxy-gold mb-4">Ready to Explore Your Own Akashic Records?</h3>
              <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                If this article resonated with you, you might be ready for your own Akashic Records reading. Discover
                the wisdom your soul is ready to share.
              </p>
              <Button className="bg-galaxy-gold text-black hover:bg-yellow-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Book Your Reading
              </Button>
            </div>

            {/* Navigation to Other Posts */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-galaxy-gold/20">
              <Link href="/journal" className="text-galaxy-gold hover:text-white transition-colors mb-4 md:mb-0">
                ← Back to All Articles
              </Link>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-galaxy-gold text-galaxy-gold hover:bg-galaxy-gold hover:text-black bg-transparent"
                >
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
