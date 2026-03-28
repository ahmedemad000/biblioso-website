import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Calendar, X } from 'lucide-react'
import { useVacancies } from '../hooks/useVacancies'
import FadeIn from '../components/animations/FadeIn'
import Card, { CardContent } from '../components/ui/Card'
import Modal from '../components/ui/Modal'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import ApplicationForm from '../components/forms/ApplicationForm'

const Careers = () => {
  const [selectedVacancy, setSelectedVacancy] = useState(null)
  const [showApplication, setShowApplication] = useState(false)
  const [filters, setFilters] = useState({
    department: '',
    location: ''
  })
  
  const { vacancies, loading, error } = useVacancies(filters)
  
  const departments = [...new Set(vacancies.map(v => v.department))].filter(Boolean)
  const locations = [...new Set(vacancies.map(v => v.location))].filter(Boolean)
  
  const handleApply = (vacancy) => {
    setSelectedVacancy(vacancy)
    setShowApplication(true)
  }
  
  const handleApplicationSuccess = () => {
    setShowApplication(false)
    setSelectedVacancy(null)
  }
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary-dark to-primary-navy">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Build the future of intelligent cloud experiences with us
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex gap-4">
              <select
                value={filters.department}
                onChange={(e) => setFilters(prev => ({ ...prev, department: e.target.value }))}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              >
                <option value="">All Locations</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            
            {(filters.department || filters.location) && (
              <button
                onClick={() => setFilters({ department: '', location: '' })}
                className="text-primary-accent hover:text-secondary"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>
      
      {/* Vacancies List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {vacancies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No open positions at the moment. Please check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {vacancies.map((vacancy, index) => (
                <FadeIn key={vacancy.id} delay={index * 0.05}>
                  <Card hover>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{vacancy.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {vacancy.department}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {vacancy.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {vacancy.type}
                            </span>
                          </div>
                          <p className="text-gray-600">{vacancy.description}</p>
                        </div>
                        <div>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleApply(vacancy)}
                          >
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Application Modal */}
      <Modal
        isOpen={showApplication}
        onClose={() => setShowApplication(false)}
        title={`Apply for ${selectedVacancy?.title || 'Position'}`}
      >
        <ApplicationForm
          jobId={selectedVacancy?.id}
          onSuccess={handleApplicationSuccess}
          onCancel={() => setShowApplication(false)}
        />
      </Modal>
    </div>
  )
}

export default Careers