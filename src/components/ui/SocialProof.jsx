import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, TrendingUp, Award } from 'lucide-react'

const SocialProof = () => {
  // Replace these placeholder image URLs with your actual client logos
  const clientLogos = [
    { name: 'TechCorp', logo: 'https://placehold.co/160x60/0A0F1F/00F5FF?text=TechCorp' },
    { name: 'DataStream', logo: 'https://placehold.co/160x60/0A0F1F/00F5FF?text=DataStream' },
    { name: 'CloudScale', logo: 'https://placehold.co/160x60/0A0F1F/00F5FF?text=CloudScale' },
    { name: 'NexGen', logo: 'https://placehold.co/160x60/0A0F1F/00F5FF?text=NexGen' },
    { name: 'Hyperion', logo: 'https://placehold.co/160x60/0A0F1F/00F5FF?text=Hyperion' },
  ]

  const caseStudies = [
    {
      icon: Shield,
      title: 'Fortune 50 Hyperscaler',
      description: 'Reduced hardware validation cycle time by 40% through automated testing pipelines.',
      metric: '40% faster',
    },
    {
      icon: Zap,
      title: 'Global Telecom Leader',
      description: 'Achieved 99.999% uptime with predictive maintenance AI models.',
      metric: '5 nines reliability',
    },
    {
      icon: TrendingUp,
      title: 'Top Financial Services Firm',
      description: 'Cut cloud infrastructure costs by 30% while improving scalability.',
      metric: '$2M+ saved annually',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// TRUSTED BY INNOVATORS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Trusted by <span className="text-cosmic-cyan">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Join the ranks of enterprises that have transformed their engineering with Biblioso.
          </p>
        </motion.div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
          {clientLogos.map((client, idx) => (
            <motion.img
              key={idx}
              src={client.logo}
              alt={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-300"
            >
              <study.icon className="w-10 h-10 text-cosmic-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{study.description}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan text-xs font-semibold">
                {study.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof