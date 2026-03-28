import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion'
import { Target, Eye, Lightbulb, MapPin, Award, Users, Sparkles, Globe, Rocket, Shield, Zap, TrendingUp, ArrowUpRight, Quote, Compass, Brain, CircuitBoard, Binary, Cpu, Star, Waves, Wind, Sun } from 'lucide-react'

const About = () => {
  const containerRef = useRef(null)
  const [activeStat, setActiveStat] = useState(null)
  const [introComplete, setIntroComplete] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroScale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.98]), { stiffness: 200, damping: 25 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Mouse tracking for interactive elements - faster response
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Faster intro animation
  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: Users, detail: 'Global enterprises trust our solutions', growth: '+156%', color: 'cyan' },
    { value: '99.9%', label: 'Success Rate', icon: Shield, detail: 'Industry-leading project success rate', growth: 'Top 1%', color: 'purple' },
    { value: '24/7', label: 'Global Support', icon: Sparkles, detail: 'Round-the-clock expert assistance', growth: 'Always On', color: 'blue' },
    { value: '50+', label: 'Countries', icon: Globe, detail: 'Worldwide operational footprint', growth: '4 Continents', color: 'green' },
    { value: '1000+', label: 'Projects', icon: Rocket, detail: 'Successful deliveries and counting', growth: '+200 YoY', color: 'orange' },
    { value: '3x', label: 'Faster ROI', icon: TrendingUp, detail: 'Accelerated time-to-value', growth: 'Industry Best', color: 'pink' },
  ]

  const locations = [
    { region: 'North America', cities: 'Washington, Texas', vibe: 'Innovation Hub', color: 'from-blue-500 to-cyan-500', icon: Zap },
    { region: 'EMEA', cities: 'Ireland, Dubai, Jordan', vibe: 'Strategic Center', color: 'from-purple-500 to-pink-500', icon: Globe },
    { region: 'Latin America', cities: 'Colombia, Mexico, Brazil', vibe: 'Talent Nexus', color: 'from-green-500 to-emerald-500', icon: Users },
    { region: 'Asia Pacific', cities: 'India, Taiwan', vibe: 'R&D Powerhouse', color: 'from-orange-500 to-red-500', icon: Cpu },
  ]

  const values = [
    {
      icon: Cpu,
      title: 'Radical Excellence',
      description: 'No compromises. No shortcuts. Pure engineering mastery.',
      mantra: 'Perfect is the standard',
    },
    {
      icon: Brain,
      title: 'Unreasonable Innovation',
      description: 'If it exists, we can make it better. If it doesn\'t, we build it.',
      mantra: 'What if we could?',
    },
    {
      icon: CircuitBoard,
      title: 'Radical Transparency',
      description: 'Complete visibility. Absolute accountability. Unfiltered truth.',
      mantra: 'See everything',
    },
  ]

  const milestones = [
    { year: '2020', title: 'The Spark', description: 'Founded with a vision to redefine cloud engineering', icon: Sparkles, completed: true },
    { year: '2021', title: 'Global Leap', description: 'Expanded across 3 continents in 12 months', icon: Globe, completed: true },
    { year: '2022', title: 'AI Revolution', description: 'Launched proprietary AI engineering platform', icon: Brain, completed: true },
    { year: '2023', title: '100 Club', description: 'Reached 100 enterprise clients milestone', icon: Award, completed: true },
    { year: '2024', title: 'Industry Recognition', description: 'Named Top AI Engineering Firm', icon: Star, completed: true },
    { year: '2025', title: 'The Future', description: '500+ clients, infinite possibilities', icon: Rocket, completed: false },
  ]

  // Fast floating particles with quick movement
  const FastParticle = ({ delay = 0, size = 'small', color = 'cyan' }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    useEffect(() => {
      let startTime = Date.now()
      const animate = () => {
        const elapsed = (Date.now() - startTime) * 0.002
        x.set(Math.sin(elapsed) * 15)
        y.set(Math.cos(elapsed * 1.3) * 15)
        requestAnimationFrame(animate)
      }
      animate()
    }, [])
    
    return (
      <motion.div
        style={{ x, y }}
        className={`absolute rounded-full ${
          size === 'small' ? 'w-1 h-1' : size === 'medium' ? 'w-2 h-2' : 'w-3 h-3'
        } bg-cosmic-cyan/${color === 'cyan' ? '30' : '20'}`}
      />
    )
  }

  return (
    <div ref={containerRef} className="bg-black relative overflow-hidden">
      {/* Fast Intro Animation */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-2 border-cosmic-cyan border-t-transparent rounded-full mx-auto mb-4"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="text-cosmic-cyan font-mono text-xs tracking-wider"
              >
                LOADING //
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fast Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <FastParticle
            key={i}
            size={i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'}
            color={i % 5 === 0 ? 'purple' : 'cyan'}
          />
        ))}
      </div>

      {/* Hero Section - Fast Entry */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Mouse-follow orbs - faster response */}
        <motion.div
          style={{ x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-cosmic-cyan/20 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-purple/20 rounded-full blur-[100px]"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #00F5FF 0px, #00F5FF 1px, transparent 1px, transparent 30px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
              className="max-w-5xl mx-auto text-center"
            >
              {/* Fast badge animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
              >
                <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-xs text-gray-300 font-mono">// EST. 2020</span>
              </motion.div>

              {/* Fast text reveal */}
              <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="block text-white"
                >
                  We don't
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="block bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent"
                >
                  follow trends.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="block text-white"
                >
                  We set them.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Engineering isn't just what we do. It's who we are. Every line of code, every architecture decision, 
                every innovation—crafted with obsessive precision.
              </motion.p>

              {/* Fast stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  { value: '12+', label: 'Countries', icon: Globe },
                  { value: '500+', label: 'Engineers', icon: Users },
                  { value: '∞', label: 'Ambition', icon: Zap },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <item.icon className="w-4 h-4 text-cosmic-cyan" />
                    <span className="text-white font-bold text-sm">{item.value}</span>
                    <span className="text-gray-400 text-xs">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Fast scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-cosmic-cyan to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy - Fast Quote Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "We don't just build technology. We architect the infrastructure of tomorrow, today.",
                author: "Sarah Chen",
                role: "CEO & Founder",
                number: "01",
              },
              {
                quote: "AI isn't our tool. It's our co-founder in reimagining what's possible.",
                author: "Marcus Rodriguez",
                role: "CTO",
                number: "02",
              },
              {
                quote: "The cloud is infinite. So is our ambition to push its boundaries.",
                author: "Dr. Priya Patel",
                role: "Head of AI Research",
                number: "03",
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative">
                  <div className="text-6xl font-bold text-white/5 mb-4">{item.number}</div>
                  <Quote className="w-8 h-8 text-cosmic-cyan mb-4 opacity-50" />
                  <p className="text-xl text-white leading-relaxed mb-4">
                    "{item.quote}"
                  </p>
                  <div className="h-px w-12 bg-cosmic-cyan mb-3" />
                  <p className="text-white font-semibold">{item.author}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Fast Entry */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// THE JOURNEY</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 tracking-tighter">
              From Spark to <span className="text-cosmic-cyan">Supernova</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`group ${!milestone.completed ? 'opacity-60' : ''}`}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className={`inline-flex p-2 rounded-lg mb-3 ${milestone.completed ? 'bg-cosmic-cyan/20' : 'bg-white/10'}`}>
                    <milestone.icon className={`w-5 h-5 ${milestone.completed ? 'text-cosmic-cyan' : 'text-gray-500'}`} />
                  </div>
                  <div className="text-2xl font-bold text-cosmic-cyan mb-1 font-mono">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Fast Flip Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// BY THE NUMBERS</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 tracking-tighter">
              Impact in <span className="text-cosmic-cyan">Data</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveStat(index)}
                onMouseLeave={() => setActiveStat(null)}
              >
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-cosmic-cyan/50 transition-all duration-200">
                  <stat.icon className="w-6 h-6 text-cosmic-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                  <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                  <div className="text-[10px] text-cosmic-cyan">{stat.growth}</div>
                  
                  {/* Quick tooltip on hover */}
                  <AnimatePresence>
                    {activeStat === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black border border-cosmic-cyan rounded-lg px-3 py-1 whitespace-nowrap"
                      >
                        <span className="text-cosmic-cyan text-xs">{stat.detail}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Fast Cards */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// CORE PRINCIPLES</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 tracking-tighter">
              What Drives <span className="text-cosmic-cyan">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cosmic-cyan/50 transition-all duration-200">
                  <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10 mb-4">
                    <value.icon className="w-6 h-6 text-cosmic-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors duration-150">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {value.description}
                  </p>
                  <div className="h-px w-8 bg-cosmic-cyan/50 mb-2" />
                  <p className="text-xs font-mono text-cosmic-cyan">{value.mantra}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence - Fast Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// WORLDWIDE FOOTPRINT</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 tracking-tighter">
              Global. By Design.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ x: 5 }}
                className="bg-black p-6 group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${location.color} opacity-30 group-hover:opacity-50 transition-opacity duration-150 mb-4`} />
                <h3 className="text-xl font-bold text-white mb-1">{location.region}</h3>
                <p className="text-gray-400 text-sm mb-2">{location.cities}</p>
                <div className="inline-block px-2 py-0.5 border border-cosmic-cyan/30 rounded-full">
                  <span className="text-cosmic-cyan text-[10px] font-mono">{location.vibe}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision/Mission - Fast Split */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="border-l-2 border-cosmic-cyan pl-6"
            >
              <Eye className="w-10 h-10 text-cosmic-cyan mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the definitive engineering partner for the world's most ambitious organizations, architecting the intelligent infrastructure that powers tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="border-l-2 border-cosmic-purple pl-6"
            >
              <Target className="w-10 h-10 text-cosmic-purple mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Empower enterprises with AI-driven engineering solutions that don't just solve problems—they redefine what's possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Fast Button */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-block mb-6">
              <div className="w-12 h-12 rounded-full border border-cosmic-cyan flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
              Ready to Build<br />
              <span className="text-cosmic-cyan">the Impossible?</span>
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're looking for builders, dreamers, and engineers who refuse to accept mediocrity.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple rounded-full font-semibold text-white"
            >
              <span className="flex items-center gap-2">
                Join the Movement
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About