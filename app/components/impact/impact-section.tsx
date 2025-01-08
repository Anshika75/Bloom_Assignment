'use client'

import { motion } from 'framer-motion'
import { ImpactStats } from './impact-stats'
import { FloatingBubbles } from './floating-bubbles'

export function ImpactSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#D81B60] to-[#880E4F] py-24 overflow-hidden">
      <FloatingBubbles />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#FFC1E3] to-[#E1BEE7] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Making Social Media a Force for Good
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Here's how Bloom transforms lives and society.
          </motion.p>
        </div>

        <ImpactStats />
      </div>
    </section>
  )
}

