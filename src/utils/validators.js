import { z } from 'zod'

export const applicationSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name is too long')
    .regex(/^[a-zA-Z\s-]+$/, 'Name can only contain letters, spaces, and hyphens'),
  
  email: z.string()
    .email('Invalid email address')
    .min(5, 'Email is too short')
    .max(100, 'Email is too long'),
  
  phone: z.string()
    .regex(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,4}$/, 'Invalid phone number')
    .optional(),
  
  resume: z.custom((file) => {
    if (!file) return true
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    
    if (file.size > maxSize) {
      return false
    }
    
    if (!allowedTypes.includes(file.type)) {
      return false
    }
    
    return true
  }, 'Resume must be PDF or DOC/DOCX and less than 5MB'),
  
  coverLetter: z.string()
    .max(5000, 'Cover letter is too long')
    .optional(),
  
  linkedinProfile: z.string()
    .url('Invalid LinkedIn URL')
    .regex(/^https?:\/\/(www\.)?linkedin\.com\/.*$/, 'Must be a valid LinkedIn profile URL')
    .optional(),
  
  jobId: z.number()
    .positive('Invalid job selection')
})

export const validateFile = (file, maxSize = 5 * 1024 * 1024) => {
  if (!file) return null
  
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  
  if (!allowedTypes.includes(file.type)) {
    return 'File must be PDF, DOC, or DOCX'
  }
  
  if (file.size > maxSize) {
    return `File size must be less than ${maxSize / (1024 * 1024)}MB`
  }
  
  return null
}