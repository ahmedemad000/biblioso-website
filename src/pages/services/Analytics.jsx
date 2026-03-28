import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, LineChart, Activity, AlertTriangle, TrendingUp, Shield, Zap, Database, GitBranch } from 'lucide-react'
import Button from '../../components/ui/Button'

const Analytics = () => {
  const services = [
    {
      title: 'Data Ingestion & Curation',
      icon: Database,
      description: 'Collect, process, and prepare data for analysis at scale.',
      features: [
        'Real-time telemetry collection',
        'Data pipeline optimization',
        'High-volume analytics processing',
        'Data quality assurance'
      ]
    },
    {
      title: 'Predictive Modeling',
      icon: LineChart,
      description: 'Leverage ML models to forecast failures and optimize performance.',
      features: [
        'Failure prediction algorithms',
        'Capacity forecasting',
        'Performance optimization',
        'Resource utilization analytics'
      ]
    },
    {
      title: 'Anomaly Detection',
      icon: Activity,
      description: 'Identify and alert on unusual patterns in real-time.',
      features: [
        'Automated outlier detection',
        'Pattern recognition',
        'Root cause analysis',
        'Real-time alerting'
      ]
    },
    {
      title: 'Automated Remediation',
      icon: GitBranch,
      description: 'Self-healing systems that respond to incidents automatically.',
      features: [
        'Automated incident workflows',
        'Self-healing infrastructure',
        'Runbook automation',
        'Incident lifecycle management'
      ]
    },
    {
      title: 'Infrastructure Health Dashboards',
      icon: BarChart3,
      description: 'Comprehensive visibility into system performance and reliability.',
      features: [
        'Real-time health monitoring',
        'Customizable dashboards',
        'Performance metrics visualization',
        'Reliability insights'
      ]
    },
    {
      title: 'Predictive Maintenance',
      icon: TrendingUp,
      description: 'Proactively address issues before they impact operations.',
      features: [
        'Equipment failure prediction',
        'Maintenance scheduling optimization',
        'Lifecycle management',
        'Cost reduction analytics'
      ]
    }
  ]

  const metrics = [
    { value: '85%', label: 'Faster Issue Resolution', icon: Zap, description: 'Reduced MTTR' },
    { value: '90%', label: 'Prediction Accuracy', icon: TrendingUp, description: 'ML model precision' },
    { value: '99.9%', label: 'Data Availability', icon: Shield, description: 'Real-time insights' },
    { value: '3x', label: 'Operational Efficiency', icon: Activity, description: 'Automation gains' }
  ]

  const useCases = [
    {
      title: 'Datacenter Operations',
      description: 'Predict hardware failures before they occur, reducing downtime by up to 85%',
      impact: '85% reduction in unplanned outages'
    },
    {
      title: 'Capacity Planning',
      description: 'Optimize resource allocation based on predictive growth models',
      impact: '30% better resource utilization'
    },
    {
      title: 'Security Analytics',
      description: 'Detect and respond to security threats in real-time',
      impact: '50% faster threat detection'
    },
    {
      title: 'Cost Optimization',
      description: 'Identify waste and optimize cloud spending',
      impact: '25% cost reduction'
    }
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
              <BarChart3 className="w-4 h-4 text-cosmic-cyan" />
              <span className="text-xs text-gray-300 font-mono">// CORE COMPETENCY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-white">Predictive</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage telemetry, ML models, and automation to predict failures, prevent outages, and improve reliability across large-scale datacenter environments.
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
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// ANALYTICS CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Data-Driven <span className="text-cosmic-cyan">Intelligence</span>
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
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-cosmic-cyan mt-0.5">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// USE CASES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Real-World <span className="text-cosmic-cyan">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-200"
              >
                <AlertTriangle className="w-8 h-8 text-cosmic-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan text-xs">
                  {useCase.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// TECH STACK</span>
            <h3 className="text-2xl font-bold text-white mt-2">Powered by Leading Analytics Tools</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {['TensorFlow', 'PyTorch', 'Kafka', 'Spark', 'Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'MLflow', 'Kubeflow'].map((tech, i) => (
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

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Activity className="w-12 h-12 text-cosmic-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Predict the Future?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Leverage the power of AI and analytics to transform your operations.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Start Your Analytics Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Analytics