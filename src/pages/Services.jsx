import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Bot, Cloud, BarChart3, ChevronDown, ChevronUp } from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import Card, { CardContent } from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import { servicesData } from '../data/servicesData'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null)

  const iconMap = {
    Cpu: Cpu,
    Bot: Bot,
    Cloud: Cloud,
    BarChart3: BarChart3,
  }

  const toggleExpand = (id) => {
    setExpandedService(expandedService === id ? null : id)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary-dark to-primary-navy">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive engineering solutions powered by AI and automation
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Core Competencies"
            subtitle="Specialized expertise across key technology domains"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.coreCompetencies.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              return (
                <FadeIn key={service.id} delay={index * 0.1}>
                  <Card hover className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-primary-accent/10 to-secondary/10 rounded-lg">
                          <IconComponent className="w-8 h-8 text-primary-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <button
                            onClick={() => toggleExpand(service.id)}
                            className="text-primary-accent font-medium hover:text-secondary transition-colors inline-flex items-center"
                          >
                            {expandedService === service.id ? 'Show Less' : 'Learn More'}
                            {expandedService === service.id ? (
                              <ChevronUp className="ml-1" size={16} />
                            ) : (
                              <ChevronDown className="ml-1" size={16} />
                            )}
                          </button>
                        </div>
                      </div>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-600 flex items-start">
                                <span className="text-primary-accent mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Services Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Professional Services Portfolio"
            subtitle="Comprehensive service offerings for enterprise transformation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.professionalServices.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-500">• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Cloud Infrastructure & Engineering Services"
            subtitle="End-to-end solutions for modern infrastructure"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.cloudServices.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-500">• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services