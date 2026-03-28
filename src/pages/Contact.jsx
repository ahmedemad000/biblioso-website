import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Mail, Clock, Send, Sparkles, Globe, ArrowRight, CheckCircle, MessageCircle, Users, Headphones, Building2 } from 'lucide-react'
import Button from '../components/ui/Button'
import toast from 'react-hot-toast'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const Contact = () => {
  const containerRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedLocation, setSelectedLocation] = useState({
    city: 'Washington, USA',
    lat: 38.8951,
    lng: -77.0364,
    zoom: 12
  })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroScale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.98]), { stiffness: 200, damping: 25 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  })
  
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
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormSubmitted(true)
      reset()
      setTimeout(() => setFormSubmitted(false), 3000)
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Washington, USA', 'Texas, USA', 'Dublin, Ireland', 'Dubai, UAE', 'Bangalore, India'],
      color: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', '+353 (1) 234 5678'],
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@biblioso.com', 'sales@biblioso.com', 'careers@biblioso.com'],
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM EST', '24/7 Emergency Support', 'Global Coverage Across Time Zones'],
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20'
    }
  ]

  const offices = [
    { 
      city: 'Washington, USA', 
      region: 'North America', 
      flag: '🇺🇸', 
      timezone: 'EST',
      lat: 38.8951,
      lng: -77.0364,
      address: 'Washington, DC, USA',
      zoom: 12
    },
    { 
      city: 'Dublin, Ireland', 
      region: 'EMEA', 
      flag: '🇮🇪', 
      timezone: 'GMT',
      lat: 53.3498,
      lng: -6.2603,
      address: 'Dublin, Ireland',
      zoom: 12
    },
    { 
      city: 'Dubai, UAE', 
      region: 'EMEA', 
      flag: '🇦🇪', 
      timezone: 'GST',
      lat: 25.2048,
      lng: 55.2708,
      address: 'Dubai, United Arab Emirates',
      zoom: 12
    },
    { 
      city: 'Bangalore, India', 
      region: 'Asia Pacific', 
      flag: '🇮🇳', 
      timezone: 'IST',
      lat: 12.9716,
      lng: 77.5946,
      address: 'Bangalore, Karnataka, India',
      zoom: 12
    },
  ]

  const supportOptions = [
    { icon: Headphones, title: 'Technical Support', description: '24/7 expert assistance', action: 'support@biblioso.com' },
    { icon: MessageCircle, title: 'Sales Inquiries', description: 'Get a custom quote', action: 'sales@biblioso.com' },
    { icon: Users, title: 'Partnerships', description: 'Collaborate with us', action: 'partners@biblioso.com' },
    { icon: Building2, title: 'Careers', description: 'Join our team', action: 'careers@biblioso.com' },
  ]

  // Generate Google Maps embed URL based on selected location
  const getMapEmbedUrl = () => {
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(selectedLocation.address)}&zoom=${selectedLocation.zoom}&maptype=satellite`
  }

  // Fallback static map if no API key (using standard embed)
  const getStaticMapUrl = () => {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(selectedLocation.address)}&zoom=${selectedLocation.zoom}`
  }

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ x: mousePosition.x * 0.6, y: mousePosition.y * 0.6 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-cyan/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ x: mousePosition.x * -0.4, y: mousePosition.y * -0.4 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px]"
        />
        
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
                <span className="text-xs text-gray-300 font-mono tracking-wider">// LET'S CONNECT</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
                <span className="text-white">Let's</span>
                <br />
                <span className="bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
                  Create Together
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you have a question about our services, want to discuss a project, or just want to say hello — we're here to help.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-cosmic-cyan to-transparent" />
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Send us a message</h2>
                  <p className="text-gray-400">Fill out the form and we'll get back to you within 24 hours.</p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-cosmic-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-cosmic-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject <span className="text-cosmic-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('subject')}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 ${
                        errors.subject ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-cosmic-cyan">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isSubmitting}
                    className="w-full py-4"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {formSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 gap-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.bgGradient}`}>
                        <info.icon className={`w-6 h-6 text-cosmic-cyan`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-400 text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Support Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Quick Support</h3>
                <div className="grid grid-cols-2 gap-3">
                  {supportOptions.map((option, index) => (
                    <a
                      key={index}
                      href={`mailto:${option.action}`}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                    >
                      <option.icon className="w-4 h-4 text-cosmic-cyan" />
                      <div>
                        <p className="text-xs text-gray-300 group-hover:text-cosmic-cyan transition-colors">{option.title}</p>
                        <p className="text-[10px] text-gray-500">{option.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations - Interactive Map Style */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// OUR OFFICES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Global <span className="text-cosmic-cyan">Presence</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Click on any location to view it on the map below
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setSelectedLocation({
                    city: office.city,
                    address: office.address,
                    lat: office.lat,
                    lng: office.lng,
                    zoom: office.zoom
                  })
                  toast.success(`Showing ${office.city} on map`)
                }}
                className={`bg-white/5 border rounded-2xl p-6 text-center transition-all duration-200 cursor-pointer group ${
                  selectedLocation.city === office.city
                    ? 'border-cosmic-cyan bg-cosmic-cyan/10'
                    : 'border-white/10 hover:border-cosmic-cyan/50'
                }`}
              >
                <div className="text-4xl mb-3">{office.flag}</div>
                <h3 className={`text-lg font-semibold mb-1 transition-colors ${
                  selectedLocation.city === office.city
                    ? 'text-cosmic-cyan'
                    : 'text-white group-hover:text-cosmic-cyan'
                }`}>
                  {office.city}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{office.region}</p>
                <p className="text-xs text-cosmic-cyan">{office.timezone}</p>
                {selectedLocation.city === office.city && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-3 inline-block px-2 py-1 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan text-[10px]"
                  >
                    Currently Viewing
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Interactive Map - Updates based on selected location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 relative overflow-hidden rounded-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10" />
            <div className="relative h-[450px] bg-space-navy/50">
              {/* Display selected location info overlay */}
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cosmic-cyan" />
                  <span className="text-sm text-white font-medium">{selectedLocation.city}</span>
                </div>
              </div>
              
              {/* Google Maps Embed - Updates when location changes */}
              <iframe
                key={selectedLocation.city} // This forces re-render when location changes
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(selectedLocation.address)}&zoom=${selectedLocation.zoom}&maptype=roadmap`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`Map showing ${selectedLocation.city} office location`}
                className="transition-opacity duration-300"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-xs text-gray-300">Click any location to update map</span>
              </div>
            </div>
          </motion.div>

          {/* Location Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {offices.map((office, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedLocation({
                    city: office.city,
                    address: office.address,
                    lat: office.lat,
                    lng: office.lng,
                    zoom: office.zoom
                  })
                  toast.success(`📍 ${office.city} office selected`)
                }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:border-cosmic-cyan/50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">{office.flag}</div>
                  <div>
                    <p className={`text-xs font-medium transition-colors ${
                      selectedLocation.city === office.city ? 'text-cosmic-cyan' : 'text-gray-300 group-hover:text-cosmic-cyan'
                    }`}>
                      {office.city}
                    </p>
                    <p className="text-[10px] text-gray-500">{office.timezone}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Let's Talk */}
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
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <MessageCircle className="w-4 h-4 text-cosmic-cyan" />
              <span className="text-xs text-gray-300">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
              Let's Build Something<br />
              <span className="text-cosmic-cyan">Amazing Together</span>
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're ready to start a project or just want to explore possibilities, we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15551234567">
                <Button variant="primary" size="lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us Now
                </Button>
              </a>
              <a href="mailto:info@biblioso.com">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact