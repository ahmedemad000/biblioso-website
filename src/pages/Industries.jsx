import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { 
  Cpu, Cloud, Wifi, Landmark, Stethoscope, ShoppingBag, Factory, Building2,
  Sparkles, ArrowRight 
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const industries = [
  {
    name: 'Hyperscalers',
    icon: Cloud,
    description: 'Cloud infrastructure at massive scale – reliability, automation, and efficiency.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Semiconductor & Hardware',
    icon: Cpu,
    description: 'Hardware validation, firmware engineering, and supply chain integration.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Telecommunications',
    icon: Wifi,
    description: 'Network automation, edge computing, and 5G infrastructure.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Financial Services',
    icon: Landmark,
    description: 'Secure, compliant, and high‑performance trading and banking platforms.',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Healthcare',
    icon: Stethoscope,
    description: 'HIPAA‑ready AI, medical imaging, and health data interoperability.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Retail',
    icon: ShoppingBag,
    description: 'Omnichannel analytics, inventory optimization, and customer intelligence.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Industry 4.0, predictive maintenance, and supply chain visibility.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Public Sector',
    icon: Building2,
    description: 'Secure, scalable solutions for government and public services.',
    color: 'from-orange-500 to-red-500'
  }
]

const Industries = () => {
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
                <span className="text-xs text-gray-300 font-mono tracking-wider">// INDUSTRIES WE SERVE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                <span className="text-white">Trusted by</span><br />
                <span className="bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
                  Industry Leaders
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                We bring deep domain expertise across critical sectors, helping enterprises solve their most complex engineering challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-cosmic-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${industry.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-6 h-6 text-cosmic-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – Contact us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your industry?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let’s discuss how Biblioso can help you solve your toughest engineering challenges.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries