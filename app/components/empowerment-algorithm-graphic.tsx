'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Line, Html } from '@react-three/drei'

const Node = ({ position, name }: { position: [number, number, number]; name: string }) => {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <>
      <Sphere
        ref={ref}
        args={[0.1, 32, 32]}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial color={hovered ? 'hotpink' : 'pink'} />
      </Sphere>
      {hovered && (
        <Html position={position}>
          <div className="bg-white px-2 py-1 rounded text-sm text-purple-800">{name}</div>
        </Html>
      )}
    </>
  )
}

const Connection = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => (
  <Line points={[start, end]} color="pink" lineWidth={1} />
)

const AlgorithmGraph = () => {
  const nodes = [
    { position: [-1, 0, 0], name: 'Creativity' },
    { position: [1, 0, 0], name: 'Mindfulness' },
    { position: [0, 1, 0], name: 'Community' },
    { position: [0, -1, 0], name: 'Growth' },
    { position: [0, 0, 1], name: 'Positivity' },
  ]

  return (
    <>
      {nodes.map((node, i) => (
        <Node key={i} position={node.position} name={node.name} />
      ))}
      {nodes.map((start, i) =>
        nodes.slice(i + 1).map((end, j) => (
          <Connection key={`${i}-${j}`} start={start.position} end={end.position} />
        ))
      )}
    </>
  )
}

export function EmpowermentAlgorithmGraphic() {
  return (
    <motion.div
      className="w-full h-96"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AlgorithmGraph />
      </Canvas>
    </motion.div>
  )
}

