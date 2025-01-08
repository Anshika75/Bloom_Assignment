'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function GlowingButton({ children }: { children: ReactNode }) {
  return (
    <motion.button
      className="relative px-8 py-4 bg-teal-500 text-white rounded-full text-lg font-semibold overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

