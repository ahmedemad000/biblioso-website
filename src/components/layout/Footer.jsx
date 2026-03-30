import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// Import your logo image – adjust the path if needed
import logo from '../../../src/assets/logo.png'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const location = useLocation()
  
  const locations = [
    { region: 'United States', cities: 'Washington, Texas', timezone: 'EST/PST' },
    { region: 'Europe, Middle East, Africa', cities: 'Ireland, Dubai, Jordan', timezone: 'GMT/GST' },
    { region: 'Latin America', cities: 'Colombia, Mexico, Brazil', timezone: 'COT/CST/BRT' },
    { region: 'Asia', cities: 'India, Taiwan', timezone: 'IST/CST' },
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/core-competencies', label: 'Core Competencies' },
    { path: '/about', label: 'About Us' },
    { path: '/recruiting', label: 'Recruiting' },
    { path: '/contact', label: 'Contact' },
  ]

  const serviceLinks = [
    { path: '/services/professional', label: 'Professional Services' },
    { path: '/services/intelligent-applications', label: 'Intelligent Applications' },
    { path: '/services/cloud-infrastructure', label: 'Cloud Infrastructure' },
    { path: '/services/analytics', label: 'Analytics' },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  // Custom SVG Icons
  const MapPinIcon = ({ size = 20, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )

  const MailIcon = ({ size = 20, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  )

  const PhoneIcon = ({ size = 20, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      ),
      href: '#'
    },
    {
      name: 'GitHub',
      icon: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      href: '#'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-space-navy to-space-dark text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-cosmic-cyan rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-purple rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
      </div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-2 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent"
              >
                Stay Ahead of the Curve
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 mb-6"
              >
                Get the latest insights on AI engineering and cloud innovation
              </motion.p>
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-cyan/25"
                >
                  {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info – with logo image (no background, wider) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                {/* Logo without gradient background, larger size */}
                <div className="flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Biblioso" 
                    className="w-48 h-40" 
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-md">
                Engineering the Future of Intelligent Cloud Experiences through AI-driven transformative engineering services.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="text-gray-400 hover:text-cosmic-cyan transition-colors p-2 bg-white/5 rounded-lg"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-cosmic-cyan transition-colors text-sm group flex items-center space-x-2"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-cosmic-cyan transition-all duration-300" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-cosmic-cyan transition-colors text-sm group flex items-center space-x-2"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-cosmic-cyan transition-all duration-300" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Global Presence Combined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                Contact
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3 text-gray-400 group">
                  <MapPinIcon size={18} className="flex-shrink-0 mt-0.5 group-hover:text-cosmic-cyan transition-colors" />
                  <span className="text-sm">Washington, USA</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 group">
                  <MailIcon size={18} className="flex-shrink-0 group-hover:text-cosmic-cyan transition-colors" />
                  <a href="mailto:info@biblioso.com" className="text-sm hover:text-cosmic-cyan transition-colors">
                    info@biblioso.com
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 group">
                  <PhoneIcon size={18} className="flex-shrink-0 group-hover:text-cosmic-cyan transition-colors" />
                  <a href="tel:+15551234567" className="text-sm hover:text-cosmic-cyan transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>

              <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent">
                Global Presence
              </h3>
              <div className="space-y-3">
                {locations.map((location, index) => (
                  <div key={index} className="group">
                    <p className="font-medium text-gray-300 text-sm group-hover:text-cosmic-cyan transition-colors">
                      {location.region}
                    </p>
                    <p className="text-gray-500 text-xs">{location.cities}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Biblioso. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-cosmic-cyan text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-cosmic-cyan text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-cosmic-cyan text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer