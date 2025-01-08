'use client'

import { motion } from 'framer-motion'

export function WhyBloom() {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-purple-900 mb-8">Why Bloom?</h2>
        <p className="text-xl text-purple-700 mb-6">
          Social media today drains us with endless doomscrolling and meaningless engagement. 
          The Empowerment Algorithm flips the script: it inspires, uplifts, and connects you in meaningful ways.
        </p>
        <p className="text-xl text-purple-700 font-bold">
          This is not just another algorithm – it's a revolution for your well-being.
        </p>
      </motion.div>
    </section>
  )
}

