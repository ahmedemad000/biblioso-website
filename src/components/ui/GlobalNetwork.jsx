import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GlobalNetwork = ({ locations }) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [hoveredNode, setHoveredNode] = useState(null)
  const nodes = useRef([])
  const animationRef = useRef()

  // Generate random node positions within the container
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Create nodes when dimensions are known
  useEffect(() => {
    if (dimensions.width && dimensions.height && locations.length) {
      // Distribute nodes roughly in a circle, but slightly random
      const centerX = dimensions.width / 2
      const centerY = dimensions.height / 2
      const radius = Math.min(dimensions.width, dimensions.height) * 0.35
      nodes.current = locations.map((loc, i) => {
        const angle = (i / locations.length) * Math.PI * 2
        const offset = 0.8 + Math.random() * 0.4 // random radial offset
        const x = centerX + Math.cos(angle) * radius * offset
        const y = centerY + Math.sin(angle) * radius * offset
        return { ...loc, x, y, angle, offset }
      })
    }
  }, [dimensions, locations])

  // Animation loop: draw connecting lines and pulses
  useEffect(() => {
    if (!canvasRef.current || nodes.current.length === 0) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let time = 0
    const animate = () => {
      time += 0.02
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw connections between nodes (full mesh)
      for (let i = 0; i < nodes.current.length; i++) {
        for (let j = i + 1; j < nodes.current.length; j++) {
          const a = nodes.current[i]
          const b = nodes.current[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          const maxDist = Math.min(dimensions.width, dimensions.height) * 0.5
          const opacity = Math.max(0, 1 - dist / maxDist) * 0.4
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(79, 159, 255, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Draw nodes with glow
      for (let node of nodes.current) {
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20)
        gradient.addColorStop(0, `rgba(79, 159, 255, 0.8)`)
        gradient.addColorStop(1, `rgba(79, 159, 255, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2)
        ctx.fill()

        // Inner core
        ctx.beginPath()
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = '#4F9FFF'
        ctx.fill()

        // Pulsing ring (animated)
        const pulse = (Math.sin(time * 3) + 1) / 2 * 0.3 + 0.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, 12 + Math.sin(time * 4) * 2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(79, 159, 255, ${0.5 + pulse * 0.5})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationRef.current)
  }, [dimensions])

  return (
    <div ref={containerRef} className="relative w-full h-[500px] bg-black rounded-2xl overflow-hidden">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 w-full h-full"
      />
      {nodes.current.map((node, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: node.x - 30,
            top: node.y - 30,
            width: 60,
            height: 60,
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoveredNode(node)}
          onMouseLeave={() => setHoveredNode(null)}
        />
      ))}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              position: 'absolute',
              left: hoveredNode.x,
              top: hoveredNode.y - 80,
              transform: 'translateX(-50%)',
            }}
            className="bg-black/90 backdrop-blur-md border border-cosmic-cyan rounded-xl px-5 py-3 shadow-xl z-10 pointer-events-none"
          >
            <div className="text-center">
              <div className="text-2xl mb-1">{hoveredNode.flag}</div>
              <p className="text-white font-bold text-sm">{hoveredNode.region}</p>
              <p className="text-gray-300 text-xs mt-1">{hoveredNode.cities}</p>
              <p className="text-cosmic-cyan text-xs mt-1">{hoveredNode.timezone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GlobalNetwork