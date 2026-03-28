import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Brain, Sparkles, Workflow, Shield, Zap, TrendingUp } from 'lucide-react'
import Button from '../../components/ui/Button'

const IntelligentApplications = () => {
  const features = [
    {
      title: 'Intelligent App Development',
      icon: Bot,
      description: 'Build AI-powered applications that automate workflows and enhance decision-making.',
      details: ['Machine Learning integration', 'Natural Language Processing', 'Computer Vision capabilities']
    },
    {
      title: 'Cloud-Native Modernization',
      icon: Workflow,
      description: 'Transform legacy applications into scalable, cloud-native architectures.',
      details: ['Microservices architecture', 'Container orchestration', 'Serverless computing']
    },
    {
      title: 'Secure-by-Design Engineering',
      icon: Shield,
      description: 'Build applications with security embedded from the ground up.',
      details: ['Zero-trust architecture', 'Compliance automation', 'Threat modeling']
    },
    {
      title: 'AI Agents & Copilots',
      icon: Brain,
      description: 'Integrate intelligent assistants and autonomous agents into your workflows.',
      details: ['Generative AI integration', 'Intelligent automation', 'Context-aware assistance']
    }
  ]

  const metrics = [
    { value: '3x', label: 'Faster Deployment', icon: Zap },
    { value: '85%', label: 'Automation Rate', icon: Sparkles },
    { value: '99.9%', label: 'Uptime', icon: Shield },
    { value: '2x', label: 'ROI', icon: TrendingUp }
  ]

  return (
    <div className="bg-black">
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
              <Bot className="w-4 h-4 text-cosmic-cyan" />
              <span className="text-xs text-gray-300 font-mono">// CORE COMPETENCY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-white">Intelligent</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                Applications
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build, modernize, and operate secure, AI-driven applications that automate workflows, enhance decision-making, and deliver adaptive digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <metric.icon className="w-8 h-8 text-cosmic-cyan mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cosmic-cyan/50 transition-all duration-200 group"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 mb-4">
                  <feature.icon className="w-8 h-8 text-cosmic-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cosmic-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-cosmic-cyan mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Applications with AI?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's build intelligent applications that drive real business value.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IntelligentApplications