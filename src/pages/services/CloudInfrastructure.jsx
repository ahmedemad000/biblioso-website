import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, Server, FlaskConical, Settings, Shield, Zap, TrendingUp, Package, Boxes, TestTube, Truck } from 'lucide-react'
import Button from '../../components/ui/Button'

const CloudInfrastructure = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Datacenter sustainment services and next-generation hardware integration.',
      features: [
        'Program management for deployment readiness',
        'Functional and performance qualification for firmware, storage, networking components',
        'Single technical interface for Original Design Manufacturers (ODMs)',
        'Documentation governance, SLAs, and continuous improvements'
      ]
    },
    {
      title: 'Fleet Engineering Labs',
      icon: Server,
      description: 'R&D, Bench, and Rack lab environments supporting New Product Integration.',
      features: [
        'High-velocity hardware testing and component workflows',
        'QUAL cycles execution and validation issue troubleshooting',
        'Sustain testing for firmware and components',
        'Component-level rework, cable fabrication, and software installation'
      ]
    },
    {
      title: 'AI & Innovation Labs',
      icon: FlaskConical,
      description: 'Centers of Excellence for technology demonstration and co-innovation.',
      features: [
        'AI-related infrastructure projects including space planning and liquid cooling',
        'Custom project tracking and component testing',
        'Equipment leasing and returns management',
        'Demo equipment management and showcase operations'
      ]
    },
    {
      title: 'Validations',
      icon: TestTube,
      description: 'End-to-end hardware qualification across full QUAL cycles.',
      features: [
        'Firmware, SKUs, and commodity component validation',
        'Full QUAL cycles including accelerated QUALs',
        'QaaS-driven investigations and impact assessment',
        'Minimum, full, and paper QUALs governance'
      ]
    },
    {
      title: 'Logistics',
      icon: Truck,
      description: 'End-to-end logistics operations supporting datacenter and device warehouses.',
      features: [
        'Material movement, triage, warranty management',
        'Inbound/outbound logistics and customs compliance',
        'Asset reintegration and warehouse coordination',
        'Equipment integration and storage workflows'
      ]
    }
  ]

  const metrics = [
    { value: '99.999%', label: 'Uptime', icon: Shield, description: 'Industry-leading reliability' },
    { value: '1000+', label: 'Servers Deployed', icon: Server, description: 'Hyperscale infrastructure' },
    { value: '24/7', label: 'Lab Operations', icon: Settings, description: 'Round-the-clock support' },
    { value: '50+', label: 'Hardware Partners', icon: Package, description: 'Global ecosystem' }
  ]

  const capabilities = [
    'Space Planning & Power Management',
    'Liquid Cooling & Venting',
    'Hardware Balancing & Supply Chain',
    'Deployment Readiness & Compliance',
    'OS Installation & Firmware Updates',
    'Component Testing & Validation',
    'Equipment Reclaim & Lifecycle Management',
    'Custom Cable Fabrication'
  ]

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
              <Cloud className="w-4 h-4 text-cosmic-cyan" />
              <span className="text-xs text-gray-300 font-mono">// CORE COMPETENCY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-white">Cloud Infrastructure</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                & Engineering
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deliver end-to-end services that support hyperscale datacenters — from planning and component-level engineering to lab operations and next-generation hardware integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-cyan/50 transition-all duration-200 group"
              >
                <metric.icon className="w-8 h-8 text-cosmic-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// INFRASTRUCTURE SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Comprehensive <span className="text-cosmic-cyan">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-200 group hover:-translate-y-1"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 mb-4">
                  <service.icon className="w-8 h-8 text-cosmic-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cosmic-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-cosmic-cyan mt-0.5">▹</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-cosmic-cyan mt-2">+ {service.features.length - 3} more capabilities</li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// CORE CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              What We <span className="text-cosmic-cyan">Deliver</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cosmic-cyan/50 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan" />
                <span className="text-sm text-gray-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Boxes className="w-12 h-12 text-cosmic-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's build the foundation for your next-generation cloud infrastructure.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Discuss Your Infrastructure Needs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CloudInfrastructure