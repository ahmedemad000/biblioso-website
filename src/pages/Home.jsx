import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Cpu, Cloud, Bot, BarChart3, Shield, Zap, Sparkles, Globe, Layers, 
  ChevronRight, Network, Database, CloudCog, CircuitBoard, Orbit
} from 'lucide-react'
import Button from '../components/ui/Button'

// Fast Magnetic Button
const MagneticButton = ({ children, ...props }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    x.set(distanceX * 0.2)
    y.set(distanceY * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Fast Glow Card
const GlowCard = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.15 }}
      className={`relative group ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cosmic-cyan/30 transition-all duration-200">
        {children}
      </div>
    </motion.div>
  )
}

const Home = () => {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeStat, setActiveStat] = useState(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroScale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.98]), { stiffness: 200, damping: 25 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  
  // Mouse tracking for interactive elements
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

  const coreTenets = [
    {
      icon: Zap,
      title: 'Excellence in Execution',
      description: 'AI-driven automation and enhanced decision-making',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      color: 'text-yellow-400',
      delay: 0
    },
    {
      icon: Cpu,
      title: 'Engineering Efficiency',
      description: 'Structured collaboration, measurable metrics',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      color: 'text-blue-400',
      delay: 0.05
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Secure coding practices, robust encryption',
      gradient: 'from-green-500/20 to-emerald-500/20',
      color: 'text-green-400',
      delay: 0.1
    },
    {
      icon: BarChart3,
      title: 'Cost Efficacy',
      description: 'Innovative pricing, flexible engagement',
      gradient: 'from-purple-500/20 to-pink-500/20',
      color: 'text-purple-400',
      delay: 0.15
    },
  ]

  const featuredServices = [
    {
      icon: Cpu,
      title: 'Professional Services',
      description: 'End-to-end engineering and program management',
      metrics: '99.9%',
      metricLabel: 'Success Rate',
      path: '/services/professional',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Bot,
      title: 'Intelligent Applications',
      description: 'AI-driven applications that automate workflows',
      metrics: '3x',
      metricLabel: 'Faster Deployment',
      path: '/services/intelligent-applications',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Hyperscale datacenter services and lab ops',
      metrics: '99.999%',
      metricLabel: 'Uptime',
      path: '/services/cloud-infrastructure',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Predictive modeling and anomaly detection',
      metrics: '85%',
      metricLabel: 'Faster Resolution',
      path: '/services/analytics',
      gradient: 'from-orange-500 to-red-500'
    },
  ]

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: Globe, detail: 'Global enterprises trust us', growth: '+156%', color: 'cyan' },
    { value: '99.9%', label: 'Success Rate', icon: Shield, detail: 'Industry-leading reliability', growth: 'Top 1%', color: 'purple' },
    { value: '24/7', label: 'Global Support', icon: Sparkles, detail: 'Always-on expert assistance', growth: 'Always On', color: 'blue' },
    { value: '50+', label: 'Countries', icon: Layers, detail: 'Worldwide presence', growth: '4 Continents', color: 'green' },
  ]

  const technologies = [
    'AI/ML', 'Cloud Native', 'Kubernetes', 'Serverless', 'Edge Computing', 'DevOps', 'Security First', 'Scalable Architecture'
  ]

  return (
    <div ref={containerRef} className="bg-black relative overflow-hidden">
      {/* Hero Section - With Image */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Gradient Orbs with Mouse Follow */}
        <motion.div
          style={{ x: mousePosition.x * 0.6, y: mousePosition.y * 0.6 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cosmic-cyan/15 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ x: mousePosition.x * -0.4, y: mousePosition.y * -0.4 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cosmic-purple/15 rounded-full blur-[150px]"
        />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #00F5FF 0px, #00F5FF 1px, transparent 1px, transparent 50px),
                             repeating-linear-gradient(135deg, #A855F7 0px, #A855F7 1px, transparent 1px, transparent 50px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Side - Text Content */}
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                  </motion.div>
                  <span className="text-xs text-gray-300 font-mono tracking-wider">// NEXT-GEN AI ENGINEERING</span>
                </motion.div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="block text-white"
                  >
                    Engineering the
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="block bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent"
                  >
                    Future
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="block text-white"
                  >
                    of Intelligent Cloud
                  </motion.span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                  Deliver best-in-class solutions through AI-driven transformative engineering services.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                >
                  <MagneticButton>
                    <Button variant="primary" size="lg" className="group relative overflow-hidden px-8 py-4">
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Services
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                      </span>
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      />
                    </Button>
                  </MagneticButton>
                  
                  <MagneticButton>
                    <Button variant="outline" size="lg" className="border-white/20 hover:border-cosmic-cyan hover:text-cosmic-cyan transition-all duration-150">
                      Watch Demo
                    </Button>
                  </MagneticButton>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.15 }}
                      className="text-center lg:text-left cursor-pointer group"
                      onMouseEnter={() => setActiveStat(index)}
                      onMouseLeave={() => setActiveStat(null)}
                    >
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                      <AnimatePresence>
                        {activeStat === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.1 }}
                            className="text-[10px] text-cosmic-cyan mt-1"
                          >
                            {stat.growth}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Premium Image Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Glow Effect Behind Image */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/30 to-cosmic-purple/30 rounded-3xl blur-3xl"
                />
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-cyan/20 via-transparent to-cosmic-purple/20 z-10" />
                  
                  {/* The Image - Replace with your actual image URL */}
                  <img 
                    src="https://images.pexels.com/photos/36169773/pexels-photo-36169773.jpeg"
                    alt="AI Technology Visualization"
                    className="w-full h-auto object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                  />
                  
                  {/* Animated Scan Line */}
                  <motion.div
                    animate={{ y: ["0%", "100%", "0%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cosmic-cyan/30 to-transparent blur-md"
                  />
                  
                  {/* Floating Tech Icons Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* CPU Icon - Top Left */}
                    <motion.div
                      animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-8 left-8 bg-black/50 backdrop-blur-sm rounded-xl p-2 border border-cosmic-cyan/50"
                    >
                      <Cpu className="w-6 h-6 text-cosmic-cyan" />
                    </motion.div>
                    
                    {/* Cloud Icon - Top Right */}
                    <motion.div
                      animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                      className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm rounded-xl p-2 border border-cosmic-purple/50"
                    >
                      <Cloud className="w-6 h-6 text-cosmic-purple" />
                    </motion.div>
                    
                    {/* Bot Icon - Bottom Left */}
                    <motion.div
                      animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-sm rounded-xl p-2 border border-cosmic-cyan/50"
                    >
                      <Bot className="w-6 h-6 text-cosmic-cyan" />
                    </motion.div>
                    
                    {/* Database Icon - Bottom Right */}
                    <motion.div
                      animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
                      className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-sm rounded-xl p-2 border border-cosmic-purple/50"
                    >
                      <Database className="w-6 h-6 text-cosmic-purple" />
                    </motion.div>
                    
                    {/* Center Glow */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cosmic-cyan/20 rounded-full blur-2xl"
                    />
                  </div>
                </div>
                
                {/* Floating Data Points */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-cosmic-cyan rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.4,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${-10 + Math.random() * 20}%`,
                    }}
                  />
                ))}
                
                {/* Tech Badges */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {['AI-Powered', 'Cloud Native', 'Edge Ready'].map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-cosmic-cyan/50 text-xs text-cosmic-cyan font-mono"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fast Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-cosmic-cyan to-transparent" />
        </motion.div>
      </section>

      {/* Core Tenets - Fast Cards */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// CORE PRINCIPLES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tighter">
              Built on <span className="text-cosmic-cyan">Excellence</span>
            </h2>
            <div className="h-px w-12 bg-cosmic-cyan mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTenets.map((tenet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: tenet.delay }}
                whileHover={{ y: -5 }}
              >
                <GlowCard className="p-6 h-full">
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${tenet.gradient} mb-4`}>
                    <tenet.icon className={`w-6 h-6 ${tenet.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors duration-150">
                    {tenet.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tenet.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services - Premium Grid with Correct Links */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tighter">
              What We <span className="text-cosmic-cyan">Deliver</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <GlowCard className="group p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-20`}>
                      <service.icon className="w-6 h-6 text-cosmic-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cosmic-cyan transition-colors duration-150">
                          {service.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cosmic-cyan">{service.metrics}</div>
                          <div className="text-[10px] text-gray-500">{service.metricLabel}</div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      <Link 
                        to={service.path}
                        className="inline-flex items-center text-cosmic-cyan text-sm font-medium hover:gap-2 transition-all duration-150 group/link"
                      >
                        Learn More
                        <ChevronRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-150" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack - Trust Badges */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// TECH STACK</span>
            <h3 className="text-2xl font-bold text-white mt-2">Powered by Cutting-Edge Technology</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: i * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cosmic-cyan hover:text-cosmic-cyan transition-all duration-150 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Fast */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmic-cyan/10 rounded-full blur-[120px]"
          />
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="w-12 h-12 rounded-full border border-cosmic-cyan flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
              Ready to Transform<br />
              <span className="text-cosmic-cyan">Your Business?</span>
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 500+ leading enterprises that trust Biblioso for their engineering transformation
            </p>
            
            <MagneticButton>
              <Button variant="primary" size="lg" className="group px-8 py-4">
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                </span>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home