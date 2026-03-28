import { useState } from 'react'
import { odooService } from '../services/odoo'
import toast from 'react-hot-toast'

export const useSubmitApplication = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const submitApplication = async (formData) => {
    setLoading(true)
    setError(null)
    
    try {
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.resume) {
        throw new Error('Please fill in all required fields')
      }
      
      // Use mock for development (remove in production)
      const useMock = import.meta.env.DEV
      
      if (useMock) {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        toast.success('Application submitted successfully!')
        return { success: true }
      } else {
        const response = await odooService.submitApplication(formData)
        toast.success('Application submitted successfully!')
        return response
      }
    } catch (err) {
      setError(err.message)
      toast.error(err.message || 'Failed to submit application')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    submitApplication,
    loading,
    error
  }
}