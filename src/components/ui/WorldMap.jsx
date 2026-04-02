import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WorldMap = ({ locations, onLocationHover }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null)

  // Simple viewbox for world map (adjust as needed)
  const viewBox = "0 0 1000 500"

  // Pre‑define approximate SVG coordinates for each location (lat/lng → x,y)
  // You can fine‑tune these numbers
  const locationCoords = useMemo(() => {
    const map = {
      'North America': { x: 280, y: 160 },
      'EMEA': { x: 520, y: 160 },
      'Latin America': { x: 390, y: 280 },
      'Asia Pacific': { x: 750, y: 240 }
    }
    return locations.map(loc => ({
      ...loc,
      ...map[loc.region],
      x: map[loc.region]?.x || 0,
      y: map[loc.region]?.y || 0
    }))
  }, [locations])

  const handleHover = (loc) => {
    setHoveredLocation(loc)
    if (onLocationHover) onLocationHover(loc)
  }

  return (
    <div className="relative w-full">
      <svg
        viewBox={viewBox}
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.2))' }}
      >
        {/* Base map (simplified continents) – you can replace with a more detailed SVG if desired */}
        <path
          d="M280,120 L320,110 L360,130 L380,150 L370,180 L330,190 L290,180 L280,120 Z"
          fill="rgba(79,159,255,0.05)"
          stroke="rgba(79,159,255,0.4)"
          strokeWidth="1.5"
          className="transition-all duration-300 hover:fill-cosmic-cyan/10"
        />
        <path
          d="M500,80 L540,70 L580,90 L600,120 L580,150 L540,140 L500,120 L500,80 Z"
          fill="rgba(79,159,255,0.05)"
          stroke="rgba(79,159,255,0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M750,200 L780,180 L820,190 L850,210 L830,240 L790,250 L760,230 L750,200 Z"
          fill="rgba(79,159,255,0.05)"
          stroke="rgba(79,159,255,0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M950,300 L980,290 L1010,310 L1000,340 L970,350 L940,330 L950,300 Z"
          fill="rgba(79,159,255,0.05)"
          stroke="rgba(79,159,255,0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M650,350 L680,340 L710,360 L700,390 L670,400 L640,380 L650,350 Z"
          fill="rgba(79,159,255,0.05)"
          stroke="rgba(79,159,255,0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M180,280 L210,270 L240,290 L230,320 L200,330 L170,310 L180,280 Z"
          fill="rgba(79,159,255,0.05)"
          stroke="rgba(79,159,255,0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M400,340 L430,330 L460,350 L450,380 L420,390 L390,370 L400,340 Z"
          fill="rgba(79,159,255,0.05)"
          stroke="rgba(79,159,255,0.4)"
          strokeWidth="1.5"
        />

        {/* Connection lines (optional) */}
        <path
          d="M280,160 L520,160"
          stroke="rgba(79,159,255,0.3)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M520,160 L750,240"
          stroke="rgba(79,159,255,0.3)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M390,280 L520,160"
          stroke="rgba(79,159,255,0.3)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Animated location dots */}
        {locationCoords.map((loc, idx) => (
          <g key={idx}>
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="8"
              fill="var(--color-cosmic-cyan)"
              fillOpacity="0.3"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
            />
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="4"
              fill="var(--color-cosmic-cyan)"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.3 }}
              whileHover={{ r: 6, fill: '#ff3366' }}
              onMouseEnter={() => handleHover(loc)}
              onMouseLeave={() => setHoveredLocation(null)}
              className="cursor-pointer"
            />
            <title>{loc.region}</title>
          </g>
        ))}
      </svg>

      {/* Floating tooltip on hover */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: 'fixed',
              left: hoveredLocation.x + 20,
              top: hoveredLocation.y - 40,
              transform: 'translate(-50%, -100%)',
              pointerEvents: 'none'
            }}
            className="bg-black/90 backdrop-blur-md text-white rounded-lg px-4 py-2 border border-cosmic-cyan shadow-xl whitespace-nowrap z-50"
          >
            <p className="font-bold text-sm">{hoveredLocation.region}</p>
            <p className="text-xs text-gray-300">{hoveredLocation.cities} • {hoveredLocation.timezone}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WorldMap