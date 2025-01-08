'use client'

import { motion } from 'framer-motion'

export function NextSection() {
  return (
    <section className="py-24 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-purple-900 mb-6">
          Scroll to see the magic behind the Empowerment Algorithm
        </h2>
        <motion.div
          className="w-12 h-12 mx-auto border-4 border-purple-600 rounded-full"
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-3 h-3 bg-purple-600 rounded-full mx-auto mt-2"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

