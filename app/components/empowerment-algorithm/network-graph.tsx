'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line, Html } from '@react-three/drei'
import * as THREE from 'three'

const nodes = [
  { name: 'Mindfulness', position: [0, 2, 0] },
  { name: 'Creativity', position: [-2, -1, 0] },
  { name: 'Community', position: [2, -1, 0] },
  { name: 'Growth', position: [0, -2, 0] },
]

export function NetworkGraph({ setHoveredNode }: { setHoveredNode: (name: string | null) => void }) {
  const pointsRef = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(nodes.length * 3)
    nodes.forEach((node, i) => {
      positions[i * 3] = node.position[0]
      positions[i * 3 + 1] = node.position[1]
      positions[i * 3 + 2] = node.position[2]
    })
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="#8B5CF6" sizeAttenuation transparent />
      </points>
      {nodes.map((node, index) => (
        <group key={node.name} position={node.position}>
          <mesh
            onPointerOver={() => setHoveredNode(node.name)}
            onPointerOut={() => setHoveredNode(null)}
          >
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="#8B5CF6" />
          </mesh>
          <Html distanceFactor={10}>
            <div className="text-purple-600 text-sm font-bold">{node.name}</div>
          </Html>
        </group>
      ))}
      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((otherNode, j) => (
          <Line
            key={`${i}-${j}`}
            points={[node.position, otherNode.position]}
            color="#8B5CF6"
            lineWidth={1}
          />
        ))
      )}
    </group>
  )
}

