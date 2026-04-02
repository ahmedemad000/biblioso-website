import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { applicationSchema } from '../../utils/validators'
import Button from '../ui/Button'
import { Upload, X } from 'lucide-react'

const ApplicationForm = ({ jobId, onSuccess, onCancel }) => {
  const [resumeFile, setResumeFile] = useState(null)
  const [resumeError, setResumeError] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      jobId: jobId
    }
  })
  
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const maxSize = 5 * 1024 * 1024
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      
      if (!allowedTypes.includes(file.type)) {
        setResumeError('Please upload PDF, DOC, or DOCX files only')
        setResumeFile(null)
        return
      }
      
      if (file.size > maxSize) {
        setResumeError('File size must be less than 5MB')
        setResumeFile(null)
        return
      }
      
      setResumeError('')
      setResumeFile(file)
    }
  }
  
  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        resume: resumeFile
      }
      
      // Here you would call your submit application hook
      console.log('Submitting application:', formData)
      onSuccess && onSuccess()
      reset()
      setResumeFile(null)
    } catch (error) {
      console.error('Error submitting application:', error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="hidden" {...register('jobId')} />
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Full Name <span className="text-cosmic-cyan">*</span>
        </label>
        <input
          type="text"
          {...register('fullName')}
          className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 ${
            errors.fullName ? 'border-red-500' : 'border-white/10'
          }`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address <span className="text-cosmic-cyan">*</span>
        </label>
        <input
          type="email"
          {...register('email')}
          className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 ${
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
          className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 ${
            errors.phone ? 'border-red-500' : 'border-white/10'
          }`}
          placeholder="+1 234 567 8900"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Resume/CV <span className="text-cosmic-cyan">*</span>
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-colors border-white/10 hover:border-cosmic-cyan/50">
          <div className="space-y-1 text-center">
            {resumeFile ? (
              <div className="flex items-center justify-between space-x-4">
                <span className="text-sm text-gray-300">{resumeFile.name}</span>
                <button
                  type="button"
                  onClick={() => setResumeFile(null)}
                  className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                  aria-label="Remove file"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <Upload className="mx-auto h-12 w-12 text-gray-500" />
                <div className="flex text-sm text-gray-400">
                  <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-cosmic-cyan hover:text-cosmic-cyan/80 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX up to 5MB
                </p>
              </>
            )}
          </div>
        </div>
        {resumeError && (
          <p className="mt-1 text-sm text-red-400">{resumeError}</p>
        )}
        {errors.resume && (
          <p className="mt-1 text-sm text-red-400">{errors.resume.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Cover Letter
        </label>
        <textarea
          {...register('coverLetter')}
          rows={4}
          className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 resize-none ${
            errors.coverLetter ? 'border-red-500' : 'border-white/10'
          }`}
          placeholder="Tell us why you're a great fit for this role..."
        />
        {errors.coverLetter && (
          <p className="mt-1 text-sm text-red-400">{errors.coverLetter.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          LinkedIn Profile
        </label>
        <input
          type="url"
          {...register('linkedinProfile')}
          className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan transition-all duration-200 ${
            errors.linkedinProfile ? 'border-red-500' : 'border-white/10'
          }`}
          placeholder="https://linkedin.com/in/johndoe"
        />
        {errors.linkedinProfile && (
          <p className="mt-1 text-sm text-red-400">{errors.linkedinProfile.message}</p>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          className="sm:flex-1"
        >
          Submit Application
        </Button>
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={onCancel}
          className="sm:flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default ApplicationForm