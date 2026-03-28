import { useState, useEffect, useCallback } from 'react'
import { odooService } from '../services/odoo'
import toast from 'react-hot-toast'

export const useVacancies = (initialFilters = {}) => {
  const [vacancies, setVacancies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState(initialFilters)

  const fetchVacancies = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      // Use mock data for development (remove in production)
      const useMock = import.meta.env.DEV
      let data
      
      if (useMock) {
        data = odooService.getMockVacancies()
        // Apply filters to mock data
        if (filters.department) {
          data = data.filter(v => v.department === filters.department)
        }
        if (filters.location) {
          data = data.filter(v => v.location.includes(filters.location))
        }
      } else {
        data = await odooService.getVacancies(filters)
      }
      
      setVacancies(data)
    } catch (err) {
      setError(err.message)
      toast.error('Failed to load vacancies')
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchVacancies()
  }, [fetchVacancies])

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const resetFilters = () => {
    setFilters(initialFilters)
  }

  return {
    vacancies,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters,
    refetch: fetchVacancies
  }
}