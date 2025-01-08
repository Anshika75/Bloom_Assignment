'use client'

import { motion } from 'framer-motion'

export function GlowingOrb() {
  return (
    <div className="relative mb-8">
      <motion.div
        className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-400 to-purple-600"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {[1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full border border-white"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

