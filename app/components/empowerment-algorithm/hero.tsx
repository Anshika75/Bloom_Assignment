'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { NetworkGraph } from './network-graph'
import { GlowingButton } from '../ui/glowing-button'

export function EmpowermentAlgorithmHero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-purple-900 mb-6 text-center relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Ready to{' '}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
        >
          Break Free
        </motion.span>{' '}
        from the Algorithm?
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl text-purple-700 mb-12 text-center max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Meet the Empowerment Algorithm – Social Media, Reimagined to Inspire, Empower, and Uplift.
      </motion.h2>

      <div className="w-full h-[500px] mb-12 relative">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <NetworkGraph setHoveredNode={setHoveredNode} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
        {hoveredNode && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-2 rounded shadow">
            {hoveredNode}
          </div>
        )}
      </div>

      <GlowingButton>
        Let's Begin
      </GlowingButton>

      <p className="mt-4 text-purple-600">
        Scroll down to explore how we empower your digital experience.
      </p>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-100 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      />
    </section>
  )
}

