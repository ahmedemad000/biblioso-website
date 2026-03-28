import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Code, GitBranch, Settings, Shield, Zap, Award, TrendingUp } from 'lucide-react'
import Button from '../../components/ui/Button'

const ProfessionalServices = () => {
  const services = [
    {
      title: 'Architecture & Program Management',
      icon: Cpu,
      description: 'End-to-end architectural leadership and program governance across complex engineering initiatives.',
      features: [
        'Comprehensive, scalable, and secure architectural frameworks',
        'Multi-year technical roadmaps for platform evolution',
        'Cross-functional execution and compliance management'
      ]
    },
    {
      title: 'Software Development & Testing',
      icon: Code,
      description: 'Full-stack software engineering supported by automated testing frameworks and quality engineering practices.',
      features: [
        'Application development and feature engineering',
        'Regression testing, performance testing, release readiness',
        'Continuous improvement and quality assurance'
      ]
    },
    {
      title: 'DevOps & Sustained Engineering',
      icon: GitBranch,
      description: 'Continuous integration, deployment, and operational stability through infrastructure automation.',
      features: [
        'CI/CD pipeline management, environment optimization',
        'Forward deployment engineering and troubleshooting',
        'Incident resolution and ongoing engineering support'
      ]
    },
    {
      title: 'Operations & Infrastructure Management',
      icon: Settings,
      description: 'IT services across cloud, on-prem, and hybrid environments for secure, high-availability operations.',
      features: [
        'Compute, storage, and network system optimization',
        'Identity controls, patching, and vulnerability management',
        'Telemetry, alerting, and runbook maintenance'
      ]
    }
  ]

  const stats = [
    { value: '99.9%', label: 'Success Rate', icon: Award },
    { value: '500+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '24/7', label: 'Support', icon: Shield },
    { value: '3x', label: 'Faster Time-to-Market', icon: Zap }
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
              <Cpu className="w-4 h-4 text-cosmic-cyan" />
              <span className="text-xs text-gray-300 font-mono">// CORE COMPETENCY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-white">Professional</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deliver end-to-end engineering and program management services that accelerate product development, strengthen operational execution, and optimize technology investments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-cosmic-cyan mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cosmic-cyan/50 transition-all duration-200 group"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 mb-4">
                  <service.icon className="w-8 h-8 text-cosmic-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cosmic-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-cosmic-cyan mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Product Development?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our professional services can help you achieve your engineering goals.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProfessionalServices