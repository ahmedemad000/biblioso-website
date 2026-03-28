import axios from 'axios'
import toast from 'react-hot-toast'

const api = axios.create({
  baseURL: import.meta.env.VITE_ODOO_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_ODOO_API_KEY
    if (apiKey) {
      config.headers['X-API-Key'] = apiKey
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      const message = error.response.data?.message || 'An error occurred'
      toast.error(message)
      
      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        // Redirect to login or show message
        console.error('Authentication failed')
      }
      
      // Handle 403 Forbidden
      if (error.response.status === 403) {
        console.error('Access forbidden')
      }
      
      // Handle 404 Not Found
      if (error.response.status === 404) {
        console.error('Resource not found')
      }
    } else if (error.request) {
      // Request was made but no response
      toast.error('Network error. Please check your connection.')
    } else {
      // Something else happened
      toast.error('An unexpected error occurred')
    }
    return Promise.reject(error)
  }
)

export default api