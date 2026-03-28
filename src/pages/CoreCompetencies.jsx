import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Cpu, Bot, Cloud, BarChart3, ChevronRight, Sparkles, 
  Zap, Shield, TrendingUp, Users, Globe, Layers, Code, GitBranch,
  Server, TestTube, Truck, Brain, Activity, Database, Workflow
} from 'lucide-react'
import Button from '../components/ui/Button'

const CoreCompetencies = () => {
  const containerRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroScale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.98]), { stiffness: 200, damping: 25 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  const competencies = [
    {
      id: 'professional-services',
      title: 'Professional Services',
      subtitle: 'End-to-End Engineering Excellence',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      description: 'Deliver end-to-end engineering and program management services that accelerate product development, strengthen operational execution, and optimize technology investments.',
      metrics: [
        { value: '99.9%', label: 'Success Rate' },
        { value: '500+', label: 'Projects Delivered' },
        { value: '24/7', label: 'Support' }
      ],
      features: [
        'Solution Architecture & Roadmap Planning',
        'Full-Stack Software Engineering',
        'DevOps & CI/CD Integration',
        'Flexible Delivery Models'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      path: '/services/professional'
    },
    {
      id: 'intelligent-applications',
      title: 'Intelligent Applications',
      subtitle: 'AI-Powered Digital Transformation',
      icon: Bot,
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      description: 'Build, modernize, and operate secure, AI-driven applications that automate workflows, enhance decision-making, and deliver adaptive digital experiences.',
      metrics: [
        { value: '3x', label: 'Faster Deployment' },
        { value: '85%', label: 'Automation Rate' },
        { value: '99.9%', label: 'Uptime' }
      ],
      features: [
        'Intelligent App Development with ML',
        'Cloud-Native Modernization',
        'Secure-by-Design Engineering',
        'AI Agents & Copilots Integration'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      path: '/services/intelligent-applications'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure & Engineering',
      subtitle: 'Hyperscale Datacenter Solutions',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      description: 'Deliver end-to-end services that support hyperscale datacenters — from planning and component-level engineering to lab operations and next-generation hardware integration.',
      metrics: [
        { value: '99.999%', label: 'Uptime' },
        { value: '1000+', label: 'Servers Deployed' },
        { value: '50+', label: 'Hardware Partners' }
      ],
      features: [
        'Cloud Infrastructure Management',
        'Fleet Engineering Labs',
        'AI & Innovation Labs',
        'Hardware Validations & Logistics'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      path: '/services/cloud-infrastructure'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      subtitle: 'Predictive Intelligence & Insights',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      description: 'Leverage telemetry, ML models, and automation to predict failures, prevent outages, and improve reliability across large-scale datacenter environments.',
      metrics: [
        { value: '85%', label: 'Faster Resolution' },
        { value: '90%', label: 'Prediction Accuracy' },
        { value: '3x', label: 'Efficiency Gain' }
      ],
      features: [
        'Data Ingestion & Curation',
        'Predictive Modeling',
        'Anomaly Detection',
        'Automated Remediation'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      path: '/services/analytics'
    }
  ]

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: Users },
    { value: '50+', label: 'Countries Served', icon: Globe },
    { value: '1000+', label: 'Projects Completed', icon: Layers },
    { value: '99.9%', label: 'Client Satisfaction', icon: TrendingUp }
  ]

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10 rounded-full blur-[100px]" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #00F5FF 0px, #00F5FF 1px, transparent 1px, transparent 50px),
                             repeating-linear-gradient(135deg, #A855F7 0px, #A855F7 1px, transparent 1px, transparent 50px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-xs text-gray-300 font-mono tracking-wider">// CORE COMPETENCIES</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
                <span className="text-white">Our</span>
                <br />
                <span className="bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
                  Core Competencies
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Specialized expertise across key technology domains, delivering transformative engineering solutions that power the intelligent era.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-cosmic-cyan to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-cosmic-cyan mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Grid - Main Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// OUR EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              What Makes Us <span className="text-cosmic-cyan">Different</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore our core competencies and discover how we can transform your business
            </p>
          </motion.div>

          <div className="space-y-16">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                onMouseEnter={() => setHoveredCard(competency.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                  {/* Image Side */}
                  <motion.div
                    animate={{ 
                      scale: hoveredCard === competency.id ? 1.02 : 1,
                      rotateY: hoveredCard === competency.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative perspective"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${competency.bgGradient} rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 group-hover:border-cosmic-cyan/50 transition-all duration-300">
                      <img 
                        src={competency.image}
                        alt={competency.title}
                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-space-dark via-transparent to-transparent opacity-60`} />
                      
                      {/* Floating Metrics Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex gap-4 justify-start">
                          {competency.metrics.map((metric, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              className="bg-black/60 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10"
                            >
                              <div className="text-xl font-bold text-cosmic-cyan">{metric.value}</div>
                              <div className="text-xs text-gray-400">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="space-y-6">
                    <motion.div
                      animate={{ x: hoveredCard === competency.id ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${competency.bgGradient} mb-4`}>
                        <competency.icon className="w-8 h-8 text-cosmic-cyan" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {competency.title}
                      </h3>
                      <p className="text-cosmic-cyan text-sm font-mono mb-4">{competency.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {competency.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {competency.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      <Link to={competency.path}>
                        <Button variant="primary" size="lg" className="group">
                          <span className="flex items-center gap-2">
                            Explore {competency.title.split(' ')[0]}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                          </span>
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative Line */}
                {index < competencies.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-cosmic-cyan to-transparent opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// QUICK ACCESS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Explore <span className="text-cosmic-cyan">Each Competency</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={competency.path}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-200 group cursor-pointer h-full">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${competency.bgGradient} mb-4`}>
                      <competency.icon className="w-8 h-8 text-cosmic-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
                      {competency.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {competency.description.split('.')[0]}.
                    </p>
                    <div className="flex items-center text-cosmic-cyan text-sm font-medium">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-cosmic-cyan" />
              <span className="text-xs text-gray-300">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
              Let's Build Something<br />
              <span className="text-cosmic-cyan">Extraordinary Together</span>
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Choose a competency above or contact us to discuss how we can help achieve your goals.
            </p>
            
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CoreCompetencies