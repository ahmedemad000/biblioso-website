import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles, Cpu, Bot, Cloud, BarChart3, Home } from 'lucide-react'

// Import your logo image – adjust the path if needed
import logo from '../../../src/assets/logo.png'

// Custom Menu and X icons (unchanged)
const MenuIcon = ({ size = 24, isOpen = false }) => (
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
    className="transition-transform duration-300"
  >
    <motion.line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
      transition={{ duration: 0.3 }}
    />
    <motion.line
      x1="3"
      y1="6"
      x2="21"
      y2="6"
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
      transition={{ duration: 0.3 }}
    />
  </svg>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const coreCompetencies = [
    { name: 'Professional Services', path: '/services/professional', icon: Cpu, color: 'from-cyan-500 to-blue-500' },
    { name: 'Intelligent Applications', path: '/services/intelligent-applications', icon: Bot, color: 'from-purple-500 to-pink-500' },
    { name: 'Cloud Infrastructure & Engineering', path: '/services/cloud-infrastructure', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { name: 'Analytics', path: '/services/analytics', icon: BarChart3, color: 'from-orange-500 to-red-500' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollY / windowHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setDropdownOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 150)
  }

  const Button = ({ children, variant = 'primary', size = 'md', className = '' }) => {
    const variants = {
      primary: 'bg-gradient-to-r from-cosmic-cyan to-cosmic-purple text-white shadow-lg hover:shadow-cosmic-cyan/25',
      outline: 'border-2 border-white/30 text-white hover:border-cosmic-cyan hover:text-cosmic-cyan backdrop-blur-sm',
    }
    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-9 py-4 text-lg',
    }
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group ${variants[variant]} ${sizes[size]} ${className}`}
      >
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        )}
      </motion.button>
    )
  }

  const isActiveCoreCompetencies = location.pathname === '/core-competencies' ||
    location.pathname.startsWith('/services/')

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-cyan z-[60] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={false}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-space-navy/90 backdrop-blur-xl shadow-2xl border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo only – no background, no animation, larger size */}
            <Link to="/" className="relative group">
              <div className="flex items-center">
                <div className="w-65 h-32 flex items-center justify-center">
                  <img src={logo} alt="Biblioso" className="w-full h-full object-contain" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${isActive
                    ? 'text-cosmic-cyan'
                    : scrolled
                      ? 'text-gray-300 hover:text-cosmic-cyan'
                      : 'text-white/90 hover:text-cosmic-cyan'
                  }`
                }
              >
                Home
              </NavLink>

              <Link
                to="/core-competencies"
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1 ${isActiveCoreCompetencies
                  ? 'text-cosmic-cyan'
                  : scrolled
                    ? 'text-gray-300 hover:text-cosmic-cyan'
                    : 'text-white/90 hover:text-cosmic-cyan'
                  }`}
              >
                Core Competencies
              </Link>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${isActive
                    ? 'text-cosmic-cyan'
                    : scrolled
                      ? 'text-gray-300 hover:text-cosmic-cyan'
                      : 'text-white/90 hover:text-cosmic-cyan'
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/recruiting"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${isActive
                    ? 'text-cosmic-cyan'
                    : scrolled
                      ? 'text-gray-300 hover:text-cosmic-cyan'
                      : 'text-white/90 hover:text-cosmic-cyan'
                  }`
                }
              >
                Recruiting
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${isActive
                    ? 'text-cosmic-cyan'
                    : scrolled
                      ? 'text-gray-300 hover:text-cosmic-cyan'
                      : 'text-white/90 hover:text-cosmic-cyan'
                  }`
                }
              >
                Contact
              </NavLink>

              <div className="ml-4">
                <Link to="/contact">
                  <Button variant={scrolled ? 'primary' : 'outline'} size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors relative z-50"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <MenuIcon size={24} isOpen={isOpen} />
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation (unchanged except logo size) */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-space-navy/95 backdrop-blur-xl shadow-2xl z-40 md:hidden border-l border-white/10"
              >
                <div className="flex flex-col h-full pt-20 pb-8 px-6">
                  <div className="mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-20 h-20 flex items-center justify-center">
                        <img src={logo} alt="Biblioso" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === '/'
                        ? 'bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 text-cosmic-cyan border border-cosmic-cyan/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <Home className="w-5 h-5" />
                        <span className="font-medium">Home</span>
                      </div>
                    </Link>

                    <Link
                      to="/core-competencies"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all duration-200 ${isActiveCoreCompetencies
                        ? 'bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 text-cosmic-cyan border border-cosmic-cyan/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-medium">Core Competencies</span>
                      </div>
                    </Link>

                    <div className="pl-4 ml-2 border-l border-white/10 space-y-2">
                      {coreCompetencies.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cosmic-cyan hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="h-px bg-white/10 my-4" />

                    <Link
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      About Us
                    </Link>

                    <Link
                      to="/recruiting"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      Recruiting
                    </Link>

                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      Contact
                    </Link>
                  </div>

                  <div className="pt-8">
                    <Link to="/contact">
                      <Button variant="primary" size="lg" className="w-full">
                        Get Started
                      </Button>
                    </Link>

                    <div className="flex justify-center space-x-6 mt-8">
                      {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-gray-400 hover:text-cosmic-cyan transition-colors"
                          aria-label={social}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header