import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, MapPin, Calendar, DollarSign, ChevronRight, Sparkles, Users, 
  TrendingUp, Award, LayoutList, LayoutGrid, Kanban, X, Mail, Phone, 
  FileText, CheckCircle, Clock, Globe, Zap, Heart, Star, ArrowRight, Send
} from 'lucide-react'
import Button from '../components/ui/Button'

const Recruiting = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [viewMode, setViewMode] = useState('list') // list, grid, kanban
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  })

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
      status: 'active',
      urgency: 'high',
      applicants: 23,
      postedDate: '2024-01-15'
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
      status: 'active',
      urgency: 'medium',
      applicants: 15,
      postedDate: '2024-01-10'
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
      status: 'active',
      urgency: 'high',
      applicants: 31,
      postedDate: '2024-01-05'
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
      status: 'active',
      urgency: 'medium',
      applicants: 12,
      postedDate: '2024-01-12'
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
      status: 'active',
      urgency: 'low',
      applicants: 8,
      postedDate: '2024-01-14'
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
      status: 'active',
      urgency: 'high',
      applicants: 18,
      postedDate: '2024-01-08'
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
      position: '',
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
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/30'
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30'
    }
  }

  const renderJobCard = (job, index) => {
    if (viewMode === 'list') {
      return (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-200 cursor-pointer group"
          onClick={() => setSelectedJob(job)}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-xl font-bold text-white group-hover:text-cosmic-cyan transition-colors">
                  {job.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(job.urgency)}`}>
                  {job.urgency === 'high' ? 'Urgent' : job.urgency === 'medium' ? 'Priority' : 'Normal'}
                </span>
                <span className="px-2 py-1 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan text-xs">
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
                  <DollarSign className="w-4 h-4" />
                  {job.salary}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {job.applicants} applicants
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </motion.div>
      )
    } else if (viewMode === 'grid') {
      return (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cosmic-cyan/50 transition-all duration-200 cursor-pointer group"
          onClick={() => setSelectedJob(job)}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-cosmic-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cosmic-cyan transition-colors">
                  {job.title}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${getUrgencyColor(job.urgency)}`}>
                  {job.urgency === 'high' ? 'Urgent' : job.urgency === 'medium' ? 'Priority' : 'Normal'}
                </span>
              </div>
            </div>
            <span className="px-2 py-1 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan text-xs">
              {job.type}
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Briefcase className="w-4 h-4" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{job.description}</p>
          
          <Button variant="outline" size="sm" className="w-full">
            Apply Now
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      )
    } else if (viewMode === 'kanban') {
      return (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cosmic-cyan/50 transition-all duration-200 cursor-pointer group"
          onClick={() => setSelectedJob(job)}
        >
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-semibold text-white group-hover:text-cosmic-cyan transition-colors text-sm">
              {job.title}
            </h4>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${getUrgencyColor(job.urgency)}`}>
              {job.urgency === 'high' ? '!' : job.urgency === 'medium' ? '!' : ''}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <MapPin className="w-3 h-3" />
            <span>{job.location.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Users className="w-3 h-3" />
            <span>{job.applicants} applied</span>
          </div>
        </motion.div>
      )
    }
  }

  return (
    <div className="bg-black">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
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
        </div>
      </section>

      {/* Filters & View Controls - FIXED DROPDOWN COLORS */}
      <section className="py-8 border-b border-white/10 sticky top-20 z-20 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-3">
              {/* Department Filter - Fixed Dropdown */}
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-cosmic-cyan focus:ring-2 focus:ring-cosmic-cyan/20 cursor-pointer appearance-none pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.25rem'
                  }}
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="text-gray-900">
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Location Filter - Fixed Dropdown */}
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-cosmic-cyan focus:ring-2 focus:ring-cosmic-cyan/20 cursor-pointer appearance-none pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.25rem'
                  }}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc} className="text-gray-900">
                      {loc === 'all' ? 'All Locations' : loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-cosmic-cyan/20 text-cosmic-cyan border border-cosmic-cyan/50' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title="List View"
              >
                <LayoutList className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-cosmic-cyan/20 text-cosmic-cyan border border-cosmic-cyan/50' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('kanban')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'kanban' 
                    ? 'bg-cosmic-cyan/20 text-cosmic-cyan border border-cosmic-cyan/50' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title="Kanban View"
              >
                <Kanban className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-gray-400 text-sm">
              Showing <span className="text-cosmic-cyan font-semibold">{filteredJobs.length}</span> open positions
            </p>
          </div>

          {viewMode === 'list' && (
            <div className="space-y-4 max-w-5xl mx-auto">
              {filteredJobs.map((job, index) => renderJobCard(job, index))}
            </div>
          )}

          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => renderJobCard(job, index))}
            </div>
          )}

          {viewMode === 'kanban' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['high', 'medium', 'low'].map(urgency => (
                <div key={urgency} className="space-y-4">
                  <div className={`px-4 py-2 rounded-lg ${
                    urgency === 'high' ? 'bg-red-500/10 border border-red-500/30' :
                    urgency === 'medium' ? 'bg-yellow-500/10 border border-yellow-500/30' :
                    'bg-green-500/10 border border-green-500/30'
                  }`}>
                    <h3 className={`font-semibold ${
                      urgency === 'high' ? 'text-red-400' :
                      urgency === 'medium' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {urgency === 'high' ? 'Urgent' : urgency === 'medium' ? 'Priority' : 'Normal'}
                    </h3>
                    <p className="text-xs text-gray-500">{filteredJobs.filter(j => j.urgency === urgency).length} positions</p>
                  </div>
                  {filteredJobs.filter(job => job.urgency === urgency).map((job, index) => renderJobCard(job, index))}
                </div>
              ))}
            </div>
          )}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No positions found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us - Enhanced */}
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
              Why Join <span className="text-cosmic-cyan">Us</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We're building something extraordinary. Here's why you should be part of it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: 'Growth & Impact',
                description: 'Work on challenging problems that shape the future of cloud computing and AI',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Users,
                title: 'Inclusive Culture',
                description: 'Join a diverse, global team that values collaboration and innovation',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Award,
                title: 'Competitive Benefits',
                description: 'Enjoy top-tier compensation, equity, health benefits, and flexible work arrangements',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Globe,
                title: 'Global Opportunities',
                description: 'Work with teams across 4 continents and 50+ countries',
                color: 'from-orange-500 to-red-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-cyan/50 transition-all duration-200"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-20 mb-4`}>
                  <item.icon className="w-8 h-8 text-cosmic-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Application Modal - Enhanced */}
      {/* Application Modal - Redesigned Wider & Premium */}
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
        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .modal-scroll::-webkit-scrollbar {
            width: 8px;
          }
          .modal-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
          }
          .modal-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #00F5FF, #A855F7);
            border-radius: 4px;
          }
          .modal-scroll::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #A855F7, #00F5FF);
          }
        `}</style>

        {/* Header with Gradient Border */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan" />
          <div className="p-6 border-b border-white/10 bg-gradient-to-r from-cosmic-cyan/5 to-cosmic-purple/5">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedJob.title}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(selectedJob.urgency)}`}>
                    {selectedJob.urgency === 'high' ? 'Urgent Hire' : selectedJob.urgency === 'medium' ? 'Priority' : 'Open'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <Briefcase className="w-4 h-4 text-cosmic-cyan" />
                    {selectedJob.department}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <MapPin className="w-4 h-4 text-cosmic-cyan" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <DollarSign className="w-4 h-4 text-cosmic-cyan" />
                    {selectedJob.salary}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <Users className="w-4 h-4 text-cosmic-cyan" />
                    {selectedJob.applicants} applicants
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <Clock className="w-4 h-4 text-cosmic-cyan" />
                    Posted {selectedJob.postedDate}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all duration-200 group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-cosmic-cyan transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content with Custom Scrollbar */}
        <div className="modal-scroll overflow-y-auto max-h-[calc(85vh-120px)]">
          <div className="p-6 md:p-8">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Job Details */}
              <div className="space-y-6">
                {/* About the Role */}
                <div className="p-5 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cosmic-cyan" />
                    About the Role
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Key Responsibilities / Requirements */}
                <div className="p-5 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cosmic-cyan" />
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-cosmic-cyan mt-1">▹</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="p-5 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-cosmic-cyan" />
                    What We Offer
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedJob.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Application Form */}
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-r from-cosmic-cyan/10 to-cosmic-purple/10 rounded-xl border border-cosmic-cyan/30">
                  <h3 className="text-xl font-bold text-white mb-2">Apply Now</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Fill out the form below to apply for this position. Our team will review your application within 3-5 business days.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name <span className="text-cosmic-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan focus:ring-1 focus:ring-cosmic-cyan/50 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address <span className="text-cosmic-cyan">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan focus:ring-1 focus:ring-cosmic-cyan/50 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan focus:ring-1 focus:ring-cosmic-cyan/50 transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Years of Experience <span className="text-cosmic-cyan">*</span>
                        </label>
                        <select
                          required
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cosmic-cyan focus:ring-1 focus:ring-cosmic-cyan/50 transition-all"
                        >
                          <option value="" className="bg-space-navy">Select experience</option>
                          <option value="0-2" className="bg-space-navy">0-2 years</option>
                          <option value="3-5" className="bg-space-navy">3-5 years</option>
                          <option value="6-8" className="bg-space-navy">6-8 years</option>
                          <option value="9+" className="bg-space-navy">9+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Resume/CV <span className="text-cosmic-cyan">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cosmic-cyan file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-cosmic-cyan/20 file:text-cosmic-cyan file:text-sm hover:file:bg-cosmic-cyan/30 transition-all cursor-pointer"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Cover Letter
                      </label>
                      <textarea
                        rows={4}
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan focus:ring-1 focus:ring-cosmic-cyan/50 transition-all resize-none"
                        placeholder="Tell us why you're a great fit for this role..."
                      />
                    </div>

                    <div className="flex gap-4 pt-2">
                      <Button type="submit" variant="primary" className="flex-1">
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setSelectedJob(null)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Company Info */}
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                  <p className="text-xs text-gray-500">
                    By submitting this application, you agree to our 
                    <a href="#" className="text-cosmic-cyan hover:underline mx-1">Privacy Policy</a>
                    and 
                    <a href="#" className="text-cosmic-cyan hover:underline mx-1">Terms of Service</a>
                  </p>
                </div>
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