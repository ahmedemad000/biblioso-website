import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const Marker = ({ position, title, details }) => {
  const [hovered, setHovered] = useState(false)
  const ringRef = useRef()

  useFrame(({ clock }) => {
    if (ringRef.current && hovered) {
      ringRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 8) * 0.2)
    }
  })

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={hovered ? '#ff3366' : '#00F5FF'} emissive={hovered ? '#ff3366' : '#00F5FF'} emissiveIntensity={0.6} />
      </mesh>
      {/* Pulsing ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[0.12, 0.2, 16]} />
        <meshStandardMaterial color="#00F5FF" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>
      {hovered && (
        <Html distanceFactor={1.2}>
          <div className="bg-black/90 backdrop-blur-md text-white rounded-lg px-4 py-2 border border-cosmic-cyan shadow-xl whitespace-nowrap pointer-events-none z-50">
            <p className="font-bold text-sm">{title}</p>
            <p className="text-xs text-gray-300">{details}</p>
          </div>
        </Html>
      )}
    </group>
  )
}

const Earth = ({ locations }) => {
  const globeRef = useRef()
  const [hoveredLocation, setHoveredLocation] = useState(null)

  const getPosition = (lat, lng, radius = 1.02) => {
    const phi = (90 - lat) * Math.PI / 180
    const theta = lng * Math.PI / 180
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.cos(phi)
    const z = radius * Math.sin(phi) * Math.sin(theta)
    return [x, y, z]
  }

  const locationData = useMemo(() => {
    return locations.map(loc => ({
      ...loc,
      position: getPosition(loc.lat, loc.lng),
      details: `${loc.cities} • ${loc.timezone}`
    }))
  }, [locations])

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })

  // Stars background
  const stars = useMemo(() => {
    const positions = []
    for (let i = 0; i < 1500; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000 - 500
      positions.push([x, y, z])
    }
    return positions
  }, [])

  // Load Earth texture
  const texture = useMemo(() => new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'), [])

  return (
    <>
      {/* Starfield */}
      <points>
        {stars.map((pos, i) => (
          <mesh key={i} position={[pos[0], pos[1], pos[2]]}>
            <sphereGeometry args={[0.2, 4, 4]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
          </mesh>
        ))}
      </points>

      {/* Earth sphere with texture */}
      <Sphere ref={globeRef} args={[1, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          metalness={0.2}
          roughness={0.5}
          emissive="#112244"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[1.01, 64, 64]}>
        <meshBasicMaterial color="#00F5FF" transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>

      {/* Markers */}
      {locationData.map((loc, idx) => (
        <Marker key={idx} position={loc.position} title={loc.region} details={loc.details} />
      ))}
    </>
  )
}

const Globe3D = ({ locations, height = 550 }) => {
  return (
    <div style={{ height: `${height}px`, width: '100%', background: 'radial-gradient(circle at center, #050B1A 0%, #030613 100%)', borderRadius: '1rem', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00F5FF" />
        <Earth locations={locations} />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.8} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

export default Globe3D