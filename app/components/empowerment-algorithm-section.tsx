'use client'

import { motion } from 'framer-motion'
import { KeyFeatures } from './key-features'
import { GlowingButton } from './ui/glowing-button'

export function EmpowermentAlgorithmSection() {
  return (
    <section className="relative min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        <header className="text-center space-y-6">
          <motion.h2
            className="text-5xl md:text-7xl font-serif text-purple-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Introducing the Empowerment Algorithm
          </motion.h2>
          <p className="text-xl md:text-2xl text-purple-600 max-w-3xl mx-auto">
            A transformative approach to social media that inspires, uplifts, and empowers you.
          </p>
        </header>

        <KeyFeatures />

        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <GlowingButton>Experience the Bloom Effect</GlowingButton>
          <p className="text-purple-600 text-lg">Discover how Bloom transforms your digital world.</p>
        </motion.div>
      </div>
    </section>
  )
}

