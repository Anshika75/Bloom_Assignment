'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })

  const points = [
    [1, 0, 0],
    [0, 1, 0],
    [-1, 0, 0],
    [0, -1, 0],
    [0.7, 0.7, 0],
    [-0.7, 0.7, 0],
    [-0.7, -0.7, 0],
    [0.7, -0.7, 0],
  ]

  return (
    <group>
      <Sphere ref={globeRef} args={[1, 64, 64]} scale={[1, 1, 1]}>
        <meshBasicMaterial color="#F8ECE4" transparent opacity={0.3} />
      </Sphere>
      {points.map((point, index) => (
        <group key={index}>
          <Sphere
            position={point}
            args={[0.02, 16, 16]}
            onPointerOver={() => setHovered(index)}
            onPointerOut={() => setHovered(null)}
          >
            <meshBasicMaterial color={hovered === index ? "#F8C7D8" : "#FFE0D4"} />
          </Sphere>
          {points.slice(index + 1).map((endPoint, endIndex) => (
            <Line
              key={`${index}-${endIndex}`}
              points={[point, endPoint]}
              color="#F6B9C8"
              lineWidth={1}
              transparent
              opacity={0.5}
            />
          ))}
        </group>
      ))}
    </group>
  )
}

export function TestimonialsGlobe() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Globe />
      </Canvas>
    </div>
  )
}

