import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Recruiting = lazy(() => import('./pages/Recruiting'))
const CoreCompetencies = lazy(() => import('./pages/CoreCompetencies'))
const Contact = lazy(() => import('./pages/Contact'))
const Industries = lazy(() => import('./pages/Industries'))  // <-- NEW

// Service Pages
const ProfessionalServices = lazy(() => import('./pages/services/ProfessionalServices'))
const IntelligentApplications = lazy(() => import('./pages/services/IntelligentApplications'))
const CloudInfrastructure = lazy(() => import('./pages/services/CloudInfrastructure'))
const Analytics = lazy(() => import('./pages/services/Analytics'))

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          } />
          <Route path="core-competencies" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CoreCompetencies />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          } />
          <Route path="recruiting" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Recruiting />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          } />
          <Route path="industries" element={                               // <-- NEW
            <Suspense fallback={<LoadingSpinner />}>
              <Industries />
            </Suspense>
          } />
          
          {/* Service Routes */}
          <Route path="services/professional" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProfessionalServices />
            </Suspense>
          } />
          <Route path="services/intelligent-applications" element={
            <Suspense fallback={<LoadingSpinner />}>
              <IntelligentApplications />
            </Suspense>
          } />
          <Route path="services/cloud-infrastructure" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CloudInfrastructure />
            </Suspense>
          } />
          <Route path="services/analytics" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Analytics />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App