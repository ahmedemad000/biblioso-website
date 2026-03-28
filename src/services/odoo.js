import api from './api'

export const odooService = {
  // Fetch all vacancies
  getVacancies: async (filters = {}) => {
    try {
      const response = await api.get('/vacancies', { params: filters })
      return response.data
    } catch (error) {
      console.error('Error fetching vacancies:', error)
      throw error
    }
  },

  // Fetch single vacancy by ID
  getVacancyById: async (id) => {
    try {
      const response = await api.get(`/vacancies/${id}`)
      return response.data
    } catch (error) {
      console.error('Error fetching vacancy:', error)
      throw error
    }
  },

  // Submit job application
  submitApplication: async (applicationData) => {
    try {
      const formData = new FormData()
      
      // Append all fields to FormData
      Object.keys(applicationData).forEach(key => {
        if (key === 'resume') {
          formData.append('resume', applicationData.resume)
        } else {
          formData.append(key, applicationData[key])
        }
      })
      
      const response = await api.post('/applications', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      
      return response.data
    } catch (error) {
      console.error('Error submitting application:', error)
      throw error
    }
  },

  // Mock data for development (remove in production)
  getMockVacancies: () => {
    return [
      {
        id: 1,
        title: 'Senior Full Stack Engineer',
        department: 'Engineering',
        location: 'Washington, USA',
        type: 'Full-time',
        description: 'We are looking for a Senior Full Stack Engineer to join our team. You will be responsible for building and maintaining web applications, working with modern technologies, and mentoring junior developers.',
        requirements: [
          '5+ years of experience with React and Node.js',
          'Experience with cloud platforms (AWS/Azure)',
          'Strong understanding of CI/CD pipelines',
          'Excellent problem-solving skills'
        ],
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Remote work options',
          'Professional development budget'
        ]
      },
      {
        id: 2,
        title: 'DevOps Engineer',
        department: 'Cloud Infrastructure',
        location: 'Dublin, Ireland',
        type: 'Full-time',
        description: 'Join our Cloud Infrastructure team to help build and maintain our global infrastructure. You will work with cutting-edge technologies and help shape our cloud strategy.',
        requirements: [
          '3+ years of DevOps experience',
          'Experience with Kubernetes and Docker',
          'Strong knowledge of CI/CD tools',
          'Infrastructure as Code (Terraform)'
        ],
        benefits: [
          'Competitive salary',
          'Relocation assistance',
          'Flexible working hours',
          'Learning budget'
        ]
      },
      {
        id: 3,
        title: 'AI/ML Engineer',
        department: 'Intelligent Applications',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'We are seeking an AI/ML Engineer to work on cutting-edge AI applications. You will develop and deploy machine learning models, work with large datasets, and contribute to our AI strategy.',
        requirements: [
          'MS/PhD in Computer Science or related field',
          'Experience with PyTorch or TensorFlow',
          'Strong background in machine learning algorithms',
          'Python and data science expertise'
        ],
        benefits: [
          'Competitive compensation',
          'Stock options',
          'Research opportunities',
          'Conference attendance'
        ]
      }
    ]
  }
}