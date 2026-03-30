import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, MapPin, Calendar, Sparkles, Users, TrendingUp, Award, 
  X, Mail, Phone, CheckCircle, Clock, Globe, Zap, Heart, Star, ArrowRight, Send
} from 'lucide-react'
import Button from '../components/ui/Button'

const Recruiting = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resume: null,
    coverLetter: ''
  })

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

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Washington, USA',
      type: 'Full-time',
      salary: '$140k - $180k',
      description: 'We are looking for a Senior Full Stack Engineer to join our core engineering team. You will be responsible for building and maintaining our cloud-native platforms, working with React, Node.js, and cutting-edge AI technologies.',
      requirements: [
        '5+ years of experience with React and Node.js',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Strong understanding of CI/CD pipelines and DevOps practices',
        'Experience with TypeScript and modern JavaScript',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health, dental, and vision insurance',
        '401(k) matching',
        'Remote work flexibility',
        'Professional development budget',
        'Home office stipend'
      ],
      urgency: 'high'
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Cloud Infrastructure',
      location: 'Dublin, Ireland',
      type: 'Full-time',
      salary: '€80k - €110k',
      description: 'Join our Cloud Infrastructure team to help build and maintain our global infrastructure. You will work with Kubernetes, Terraform, and cutting-edge cloud technologies to ensure 99.999% uptime.',
      requirements: [
        '3+ years of DevOps experience',
        'Experience with Kubernetes and Docker',
        'Strong knowledge of CI/CD tools (GitHub Actions, Jenkins)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with monitoring tools (Prometheus, Grafana)'
      ],
      benefits: [
        'Competitive salary',
        'Relocation assistance',
        'Flexible working hours',
        'Learning and development budget',
        'Annual company retreats'
      ],
      urgency: 'medium'
    },
    {
      id: 3,
      title: 'AI/ML Engineer',
      department: 'Intelligent Applications',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: '₹25L - ₹35L',
      description: 'We are seeking an AI/ML Engineer to work on cutting-edge AI applications. You will develop and deploy machine learning models, work with large datasets, and contribute to our AI strategy.',
      requirements: [
        'MS/PhD in Computer Science, AI, or related field',
        'Experience with PyTorch or TensorFlow',
        'Strong background in machine learning algorithms',
        'Python and data science expertise',
        'Experience with LLMs and generative AI is a plus'
      ],
      benefits: [
        'Competitive compensation package',
        'Stock options',
        'Research opportunities',
        'Conference attendance sponsorship',
        'Flexible work arrangements'
      ],
      urgency: 'high'
    },
    {
      id: 4,
      title: 'Cloud Architect',
      department: 'Cloud Infrastructure',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: 'AED 30k - 45k',
      description: 'Lead our cloud architecture initiatives and help enterprise clients design scalable, secure cloud solutions. Work with hyperscale cloud providers and cutting-edge technologies.',
      requirements: [
        '7+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications',
        'Experience with microservices architecture',
        'Strong knowledge of security best practices',
        'Excellent client communication skills'
      ],
      benefits: [
        'Tax-free salary',
        'Housing allowance',
        'Annual flight allowance',
        'Premium health insurance',
        'Education allowance'
      ],
      urgency: 'medium'
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote (US/EMEA)',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Lead product strategy for our AI-powered cloud platforms. Work with engineering, design, and sales teams to deliver exceptional products.',
      requirements: [
        '5+ years of product management experience',
        'Experience with B2B SaaS products',
        'Strong technical background',
        'Excellent communication skills',
        'Experience with AI/ML products is a plus'
      ],
      benefits: [
        'Competitive salary',
        'Equity package',
        'Remote-first culture',
        'Home office stipend',
        'Learning budget'
      ],
      urgency: 'low'
    },
    {
      id: 6,
      title: 'Security Engineer',
      department: 'Security',
      location: 'Washington, USA',
      type: 'Full-time',
      salary: '$150k - $200k',
      description: 'Join our security team to protect our infrastructure and customer data. Implement security best practices and conduct security assessments.',
      requirements: [
        '5+ years of security engineering experience',
        'Experience with cloud security (AWS/Azure/GCP)',
        'Knowledge of security frameworks (ISO 27001, SOC2)',
        'Experience with penetration testing',
        'Security certifications (CISSP, CEH) are a plus'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits',
        'Professional development',
        'Conference attendance',
        'Flexible hours'
      ],
      urgency: 'high'
    }
  ]

  const departments = ['all', ...new Set(openPositions.map(job => job.department))]
  const locations = ['all', ...new Set(openPositions.map(job => job.location))]

  const filteredJobs = openPositions.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation
    return matchesDepartment && matchesLocation
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Application submitted successfully! We\'ll review your application and get back to you soon.')
    setSelectedJob(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      resume: null,
      coverLetter: ''
    })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] })
  }

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'high': return 'text-red-400 bg-red-400/10'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10'
      case 'low': return 'text-green-400 bg-green-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      {/* Hero Section – Cinematic */}
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
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-xs text-gray-300 font-mono tracking-wider">// CAREERS AT BIBLIOSO</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                <span className="text-white">Build the</span>
                <br />
                <span className="bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
                  Future with Us
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join a team of innovators, engineers, and visionaries shaping the future of intelligent cloud experiences.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <TrendingUp className="w-5 h-5 text-cosmic-cyan" />
                  <span>Fast-growing startup</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-5 h-5 text-cosmic-cyan" />
                  <span>Global team</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-5 h-5 text-cosmic-cyan" />
                  <span>Top-tier benefits</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap className="w-5 h-5 text-cosmic-cyan" />
                  <span>Cutting-edge tech</span>
                </div>
              </div>
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

      {/* Filters – Sleek dark theme */}
      <section className="sticky top-20 z-20 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm focus:outline-none focus:border-cosmic-cyan cursor-pointer appearance-none pr-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1rem'
                }}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-black">
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm focus:outline-none focus:border-cosmic-cyan cursor-pointer appearance-none pr-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1rem'
                }}
              >
                {locations.map(loc => (
                  <option key={loc} value={loc} className="bg-black">
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings – Full‑width animated panels, no cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedJob(job)}
                className="group relative cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-cosmic-cyan/50 hover:shadow-2xl hover:shadow-cosmic-cyan/10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white group-hover:text-cosmic-cyan transition-colors">
                        {job.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getUrgencyColor(job.urgency)}`}>
                        {job.urgency === 'high' ? 'Urgent' : job.urgency === 'medium' ? 'Priority' : 'Normal'}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan text-xs">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cosmic-cyan text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Apply Now
                    </span>
                    <ArrowRight className="w-4 h-4 text-cosmic-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                {/* Bottom glowing line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-cyan/0 via-cosmic-cyan/80 to-cosmic-cyan/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No positions match your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us – No numbers, just storytelling */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cosmic-cyan font-mono text-xs tracking-wider">// WHY BIBLIOSO</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              More Than a Job
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We're building something extraordinary. Here's why you should be part of it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, title: 'Growth & Impact', desc: 'Work on challenging problems that shape the future of cloud computing and AI', color: 'from-cyan-500 to-blue-500' },
              { icon: Users, title: 'Inclusive Culture', desc: 'Join a diverse, global team that values collaboration and innovation', color: 'from-purple-500 to-pink-500' },
              { icon: Award, title: 'Competitive Benefits', desc: 'Enjoy top-tier compensation, equity, health benefits, and flexible work arrangements', color: 'from-green-500 to-emerald-500' },
              { icon: Globe, title: 'Global Opportunities', desc: 'Work with teams across 4 continents and 50+ countries', color: 'from-orange-500 to-red-500' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-cyan/50 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-20 mb-4`}>
                  <item.icon className="w-8 h-8 text-cosmic-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – Open Application */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-cosmic-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Dream Job?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll reach out when the right opportunity arises.
            </p>
            <Button variant="primary" size="lg">
              Send Open Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Application Modal – already premium, kept unchanged */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-space-navy to-space-dark rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <style>{`
                .modal-scroll::-webkit-scrollbar { width: 8px; }
                .modal-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 4px; }
                .modal-scroll::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #00F5FF, #A855F7); border-radius: 4px; }
                .modal-scroll::-webkit-scrollbar-thumb:hover { background: linear-gradient(135deg, #A855F7, #00F5FF); }
              `}</style>
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan" />
                <div className="p-6 border-b border-white/10 bg-gradient-to-r from-cosmic-cyan/5 to-cosmic-purple/5">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedJob.title}</h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(selectedJob.urgency)}`}>
                          {selectedJob.urgency === 'high' ? 'Urgent Hire' : selectedJob.urgency === 'medium' ? 'Priority' : 'Open'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-gray-300"><Briefcase className="w-4 h-4 text-cosmic-cyan" />{selectedJob.department}</span>
                        <span className="flex items-center gap-1.5 text-gray-300"><MapPin className="w-4 h-4 text-cosmic-cyan" />{selectedJob.location}</span>
                        <span className="flex items-center gap-1.5 text-gray-300"><Clock className="w-4 h-4 text-cosmic-cyan" />{selectedJob.salary}</span>
                      </div>
                    </div>
                    <button onClick={() => setSelectedJob(null)} className="p-2 hover:bg-white/10 rounded-xl transition"><X className="w-5 h-5 text-gray-400 hover:text-cosmic-cyan" /></button>
                  </div>
                </div>
              </div>
              <div className="modal-scroll overflow-y-auto max-h-[calc(85vh-120px)]">
                <div className="p-6 md:p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="w-5 h-5 text-cosmic-cyan" />About the Role</h3>
                        <p className="text-gray-300 text-sm">{selectedJob.description}</p>
                      </div>
                      <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-cosmic-cyan" />Requirements</h3>
                        <ul className="space-y-2">
                          {selectedJob.requirements.map((req, i) => <li key={i} className="text-sm text-gray-300 flex gap-2"><span className="text-cosmic-cyan">▹</span>{req}</li>)}
                        </ul>
                      </div>
                      <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2"><Star className="w-5 h-5 text-cosmic-cyan" />What We Offer</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedJob.benefits.map((benefit, i) => <div key={i} className="flex items-center gap-2 text-sm text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan" />{benefit}</div>)}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-5 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10 rounded-xl border border-cosmic-cyan/30">
                        <h3 className="text-xl font-bold text-white mb-2">Apply Now</h3>
                        <p className="text-gray-300 text-sm mb-4">Fill out the form below. Our team will review your application within 3-5 business days.</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div><label className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-cosmic-cyan">*</span></label><input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cosmic-cyan" placeholder="John Doe" /></div>
                            <div><label className="block text-sm font-medium text-gray-300 mb-2">Email <span className="text-cosmic-cyan">*</span></label><input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cosmic-cyan" placeholder="john@example.com" /></div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div><label className="block text-sm font-medium text-gray-300 mb-2">Phone</label><input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white" placeholder="+1 (555) 123-4567" /></div>
                            <div><label className="block text-sm font-medium text-gray-300 mb-2">Experience <span className="text-cosmic-cyan">*</span></label><select required value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white"><option value="">Select</option><option value="0-2">0-2 years</option><option value="3-5">3-5 years</option><option value="6-8">6-8 years</option><option value="9+">9+ years</option></select></div>
                          </div>
                          <div><label className="block text-sm font-medium text-gray-300 mb-2">Resume <span className="text-cosmic-cyan">*</span></label><input type="file" required accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-cosmic-cyan/20 file:text-cosmic-cyan" /><p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p></div>
                          <div><label className="block text-sm font-medium text-gray-300 mb-2">Cover Letter</label><textarea rows={3} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white resize-none" placeholder="Why are you a great fit?" /></div>
                          <div className="flex gap-4 pt-2"><Button type="submit" variant="primary" className="flex-1"><Send className="w-4 h-4 mr-2" />Submit Application</Button><Button type="button" variant="outline" onClick={() => setSelectedJob(null)}>Cancel</Button></div>
                        </form>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl text-center text-xs text-gray-500">By submitting, you agree to our <a href="#" className="text-cosmic-cyan">Privacy Policy</a> and <a href="#" className="text-cosmic-cyan">Terms</a>.</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Recruiting