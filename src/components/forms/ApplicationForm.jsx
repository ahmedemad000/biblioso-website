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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          {...register('fullName')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent ${
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          {...register('email')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          {...register('phone')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="+1 234 567 8900"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Resume/CV *
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary-accent transition-colors">
          <div className="space-y-1 text-center">
            {resumeFile ? (
              <div className="flex items-center justify-between space-x-4">
                <span className="text-sm text-gray-600">{resumeFile.name}</span>
                <button
                  type="button"
                  onClick={() => setResumeFile(null)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary-accent hover:text-secondary focus-within:outline-none">
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
          <p className="mt-1 text-sm text-red-500">{resumeError}</p>
        )}
        {errors.resume && (
          <p className="mt-1 text-sm text-red-500">{errors.resume.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Letter
        </label>
        <textarea
          {...register('coverLetter')}
          rows={4}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent ${
            errors.coverLetter ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us why you're a great fit for this role..."
        />
        {errors.coverLetter && (
          <p className="mt-1 text-sm text-red-500">{errors.coverLetter.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          LinkedIn Profile
        </label>
        <input
          type="url"
          {...register('linkedinProfile')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent ${
            errors.linkedinProfile ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="https://linkedin.com/in/johndoe"
        />
        {errors.linkedinProfile && (
          <p className="mt-1 text-sm text-red-500">{errors.linkedinProfile.message}</p>
        )}
      </div>
      
      <div className="flex space-x-4">
        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
        >
          Submit Application
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default ApplicationForm