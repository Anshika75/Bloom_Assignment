'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { EmpowermentPaths } from './empowerment-paths'
import { GlitterEffect } from './glitter-effect'

export function EmpowermentAlgorithmLanding() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '1'
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-300 to-purple-700 transition-opacity duration-1000 opacity-0"
    >
      <EmpowermentPaths />
      <GlitterEffect />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ready to Break Free from the Algorithm?
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-pink-100 mb-8 text-center max-w-2xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Introducing the Empowerment Algorithm: A Social Media Revolution That Inspires, Uplifts, and Transforms.
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-white bg-opacity-20 text-white rounded-lg text-lg font-semibold backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 hover:shadow-glow relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            document.getElementById('algorithm-section')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          Discover the Algorithm
        </motion.button>
      </div>
    </section>
  )
}

