import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Target, Eye, Sparkles, Globe, Users, Cpu, Brain, CircuitBoard, ArrowUpRight, Quote, MapPin, Zap, Shield } from 'lucide-react'

const About = () => {
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

  const values = [
    { icon: Cpu, title: 'Radical Excellence', desc: 'No compromises. No shortcuts. Pure engineering mastery.', mantra: 'Perfect is the standard' },
    { icon: Brain, title: 'Unreasonable Innovation', desc: 'If it exists, we make it better. If it doesn’t, we build it.', mantra: 'What if we could?' },
    { icon: CircuitBoard, title: 'Radical Transparency', desc: 'Complete visibility. Absolute accountability. Unfiltered truth.', mantra: 'See everything' }
  ]

  const locations = [
    { region: 'North America', cities: 'Washington, Texas', vibe: 'Innovation Hub', flag: '🇺🇸' },
    { region: 'EMEA', cities: 'Ireland, Dubai, Jordan', vibe: 'Strategic Center', flag: '🇪🇺' },
    { region: 'Latin America', cities: 'Colombia, Mexico, Brazil', vibe: 'Talent Nexus', flag: '🌎' },
    { region: 'Asia Pacific', cities: 'India, Taiwan', vibe: 'R&D Powerhouse', flag: '🌏' }
  ]

  const milestones = [
    { year: '2020', title: 'The Spark', desc: 'Founded with a vision to redefine cloud engineering' },
    { year: '2021', title: 'Global Leap', desc: 'Expanded across 3 continents in 12 months' },
    { year: '2022', title: 'AI Revolution', desc: 'Launched proprietary AI engineering platform' },
    { year: '2023', title: '100 Club', desc: 'Reached 100 enterprise clients' },
    { year: '2024', title: 'Industry Recognition', desc: 'Named Top AI Engineering Firm' },
    { year: '2025', title: 'The Future', desc: 'Scaling to infinite possibilities' }
  ]

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      {/* Hero Section – Split Screen Industrial */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          {/* Left side – static manifesto */}
          <div className="hidden lg:block relative bg-gradient-to-br from-black via-zinc-950 to-black">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `repeating-linear-gradient(45deg, #00F5FF 0px, #00F5FF 1px, transparent 1px, transparent 20px)`
            }} />
            <div className="relative h-full flex flex-col justify-center px-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 border border-cosmic-cyan/30 rounded-full mb-8">
                  <span className="text-cosmic-cyan text-sm font-mono">// EST. 2020</span>
                </div>
                <div className="text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
                  <span className="text-white">We don’t</span>
                  <br />
                  <span className="text-cosmic-cyan">follow trends.</span>
                  <br />
                  <span className="text-white">We</span>
                  <span className="text-cosmic-cyan"> set them.</span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Engineering isn’t just what we do. It’s who we are. Every line of code, every architecture decision, every innovation—crafted with obsessive precision.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right side – dynamic content */}
          <div className="col-span-2 lg:col-span-1 relative bg-black flex items-center justify-center min-h-screen">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cosmic-cyan/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cosmic-purple/10 rounded-full blur-[100px]" />
            </div>
            <motion.div
              style={{ scale: heroScale, opacity: heroOpacity }}
              className="relative z-10 px-6 max-w-xl text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                  <span className="text-white">About</span>
                  <br />
                  <span className="bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">Biblioso</span>
                </h1>
                <div className="h-px w-20 bg-cosmic-cyan mb-8 mx-auto lg:mx-0" />
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We're a collective of engineers, architects, and visionaries building the infrastructure that powers the next generation of intelligent experiences.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-cosmic-cyan rounded-full animate-pulse" />
                    <span className="text-sm font-mono">12+ Countries</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-pulse" />
                    <span className="text-sm font-mono">500+ Engineers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-cosmic-cyan rounded-full animate-pulse" />
                    <span className="text-sm font-mono">∞ Ambition</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-cosmic-cyan to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy – Quote Wall */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { quote: "We don't just build technology. We architect the infrastructure of tomorrow, today.", author: "Sarah Chen", role: "CEO & Founder", number: "01" },
              { quote: "AI isn't our tool. It's our co-founder in reimagining what's possible.", author: "Marcus Rodriguez", role: "CTO", number: "02" },
              { quote: "The cloud is infinite. So is our ambition to push its boundaries.", author: "Dr. Priya Patel", role: "Head of AI Research", number: "03" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="text-7xl font-bold text-white/5 mb-4 group-hover:text-white/10 transition-colors">{item.number}</div>
                <Quote className="w-8 h-8 text-cosmic-cyan mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">"{item.quote}"</p>
                <div className="h-px w-12 bg-cosmic-cyan/30 mb-4 group-hover:w-24 transition-all duration-500" />
                <p className="text-white font-semibold">{item.author}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values – Tilt Cards */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cosmic-cyan font-mono text-sm tracking-wider">// CORE PRINCIPLES</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 tracking-tighter">What Drives Us</h2>
            <div className="h-px w-20 bg-cosmic-cyan mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateX: 15 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group perspective"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cosmic-cyan/50 transition-all duration-500 backdrop-blur-sm">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10 mb-6">
                    <value.icon className="w-8 h-8 text-cosmic-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cosmic-cyan transition-colors">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{value.desc}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-mono text-cosmic-cyan">{value.mantra}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline – Minimalist */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #00F5FF 0px, #00F5FF 1px, transparent 1px, transparent 50px)`
        }} />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cosmic-cyan font-mono text-sm tracking-wider">// THE JOURNEY</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tighter">From Spark to <span className="text-cosmic-cyan">Supernova</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cosmic-cyan/50 transition-all group"
              >
                <div className="text-3xl font-bold text-cosmic-cyan mb-2 font-mono">{m.year}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">{m.title}</h3>
                <p className="text-gray-400 text-sm">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence – Brutalist Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-cosmic-cyan font-mono text-sm tracking-wider">// WORLDWIDE FOOTPRINT</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tighter">Global. By Design.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black p-8 group hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-4">{loc.flag}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{loc.region}</h3>
                <p className="text-gray-400 mb-3">{loc.cities}</p>
                <div className="inline-block px-3 py-1 border border-cosmic-cyan/30 rounded-full">
                  <span className="text-cosmic-cyan text-xs font-mono">{loc.vibe}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission – Diagonal Split */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-cyan/5 via-transparent to-cosmic-purple/5" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-cosmic-cyan pl-8"
            >
              <Eye className="w-12 h-12 text-cosmic-cyan mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the definitive engineering partner for the world's most ambitious organizations, architecting the intelligent infrastructure that powers tomorrow.
              </p>
              <div className="mt-6 flex items-center gap-2 text-cosmic-cyan">
                <span className="font-mono text-sm">2025 + beyond</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-cosmic-purple pl-8"
            >
              <Target className="w-12 h-12 text-cosmic-purple mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Empower enterprises with AI-driven engineering solutions that don't just solve problems—they redefine what's possible.
              </p>
              <div className="mt-6 flex items-center gap-2 text-cosmic-purple">
                <span className="font-mono text-sm">Executed daily</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA – Minimalist Challenge */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-8">
              <div className="w-12 h-12 rounded-full border-2 border-cosmic-cyan flex items-center justify-center">
                <span className="text-cosmic-cyan font-mono text-xl">?</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
              Ready to Build<br />
              <span className="text-cosmic-cyan">the Impossible?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              We're looking for builders, dreamers, and engineers who refuse to accept mediocrity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 border-2 border-cosmic-cyan text-cosmic-cyan font-semibold rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join the Movement
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cosmic-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About