'use client'

import { motion } from 'framer-motion'
import { Timeline } from './timeline'
import { DecorativePatterns } from './decorative-patterns'

export function MissionSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FDE8F0] to-white py-24 overflow-hidden">
      <DecorativePatterns />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <motion.h2
            className="font-marcellus text-4xl md:text-[2.5rem] font-semibold bg-gradient-to-r from-[#D81B60] to-[#9C27B0] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A World Where Everyone Can Bloom
          </motion.h2>
          <motion.p
            className="font-mulish text-xl md:text-2xl text-[#6E6E6E] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We believe in a social media that uplifts, empowers, and connects for the greater good.
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-mulish text-[#444444] text-lg tracking-wide mb-4 leading-relaxed">
            Our mission is to create a platform that inspires people to grow into the best versions of themselves.
          </p>
          <p className="font-mulish text-[#444444] text-lg tracking-wide leading-relaxed">
            We envision a future where technology serves humanity's well-being.
          </p>
        </motion.div>

        <Timeline />

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="font-mulish px-8 py-4 rounded-full bg-gradient-to-r from-[#F48FB1] to-[#CE93D8] text-white text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(244, 143, 177, 0)",
                "0 0 20px 2px rgba(244, 143, 177, 0.3)",
                "0 0 0 0 rgba(244, 143, 177, 0)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Join the Movement
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

