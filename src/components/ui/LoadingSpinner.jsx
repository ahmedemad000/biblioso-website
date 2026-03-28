import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-primary-accent border-t-transparent rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-primary-accent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner