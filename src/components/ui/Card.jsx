import React from 'react'

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 ${hover ? 'hover:border-cosmic-cyan/50 hover:shadow-2xl hover:shadow-cosmic-cyan/10 transition-all duration-500 transform hover:-translate-y-2' : ''} ${className}`}>
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-white/10 ${className}`}>{children}</div>
)

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
)

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-white/10 ${className}`}>{children}</div>
)

export default Card