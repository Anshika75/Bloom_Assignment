'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sphere, Line, Html } from '@react-three/drei'
import * as THREE from 'three'

const nodes = [
  { name: 'Creativity', position: [1, 1, 1] },
  { name: 'Mindfulness', position: [-1, 1, -1] },
  { name: 'Community', position: [1, -1, -1] },
  { name: 'Growth', position: [-1, -1, 1] },
]

export function HolographicSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  const nodeRefs = useRef<THREE.Mesh[]>([])

  const linePositions = useMemo(() => {
    const positions = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        positions.push(nodes[i].position, nodes[j].position)
      }
    }
    return positions
  }, [])

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = THREE.MathUtils.lerp(
        sphereRef.current.rotation.x,
        mouse.y * 0.2,
        0.1
      )
      sphereRef.current.rotation.y = THREE.MathUtils.lerp(
        sphereRef.current.rotation.y,
        mouse.x * 0.2,
        0.1
      )
    }

    nodeRefs.current.forEach((node, i) => {
      node.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1)
    })
  })

  return (
    <group ref={sphereRef}>
      <Sphere args={[2, 64, 64]}>
        <meshBasicMaterial color="#4B0082" transparent opacity={0.1} />
      </Sphere>

      {nodes.map((node, i) => (
        <group key={node.name} position={node.position}>
          <Sphere
            ref={(el) => (nodeRefs.current[i] = el!)}
            args={[0.1, 32, 32]}
          >
            <meshBasicMaterial color="#00FFFF" />
          </Sphere>
          <Html distanceFactor={10}>
            <div className="text-white text-sm font-bold bg-purple-900 bg-opacity-75 px-2 py-1 rounded">
              {node.name}
            </div>
          </Html>
        </group>
      ))}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length}
            array={new Float32Array(linePositions.flat())}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00FFFF" transparent opacity={0.3} />
      </lineSegments>
    </group>
  )
}

