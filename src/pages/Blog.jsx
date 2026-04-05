import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Calendar, User, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI-Driven Engineering',
    excerpt: 'How generative AI is reshaping software development and cloud infrastructure.',
    date: 'April 1, 2026',
    author: 'Sarah Chen',
    category: 'AI',
    slug: 'future-of-ai-engineering'
  },
  {
    id: 2,
    title: '5 Cloud Trends to Watch in 2026',
    excerpt: 'From edge computing to sustainable data centers, what’s next for cloud.',
    date: 'March 28, 2026',
    author: 'Marcus Rodriguez',
    category: 'Cloud',
    slug: 'cloud-trends-2026'
  },
  {
    id: 3,
    title: 'Validating Hyperscale Hardware at Speed',
    excerpt: 'How automated testing pipelines cut validation cycles by 40%.',
    date: 'March 20, 2026',
    author: 'Dr. Priya Patel',
    category: 'Engineering',
    slug: 'hyperscale-hardware-validation'
  },
  {
    id: 4,
    title: 'Building a Culture of Innovation',
    excerpt: 'Lessons from building a global engineering team.',
    date: 'March 15, 2026',
    author: 'Sarah Chen',
    category: 'Culture',
    slug: 'culture-of-innovation'
  },
  {
    id: 5,
    title: 'AI Agents: From Copilot to Autopilot',
    excerpt: 'The evolution of intelligent assistants in enterprise software.',
    date: 'March 10, 2026',
    author: 'Marcus Rodriguez',
    category: 'AI',
    slug: 'ai-agents-autopilot'
  },
  {
    id: 6,
    title: 'Sustainable Data Centers: A Practical Guide',
    excerpt: 'How to reduce carbon footprint while maintaining performance.',
    date: 'March 5, 2026',
    author: 'Dr. Priya Patel',
    category: 'Infrastructure',
    slug: 'sustainable-data-centers'
  }
]

const Blog = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const heroScale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.98]), { stiffness: 200, damping: 25 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ x: mousePosition.x * 0.6, y: mousePosition.y * 0.6 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-cyan/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ x: mousePosition.x * -0.4, y: mousePosition.y * -0.4 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #00F5FF 0px, #00F5FF 1px, transparent 1px, transparent 50px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-xs text-gray-300 font-mono tracking-wider">// INSIGHTS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                <span className="text-white">Stories &</span><br />
                <span className="bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore the latest trends, thought leadership, and engineering breakthroughs from Biblioso.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-cosmic-cyan text-sm font-medium group/link hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog