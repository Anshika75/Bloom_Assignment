'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const renderAnimatedBackground = () => (
    <div className="absolute inset-0 bg-gradient-to-b from-pink-500 to-black">
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )

  const renderHeadline = () => (
    <motion.h1
      className="font-marcellus text-4xl md:text-[3rem] font-semibold text-white mb-4 leading-tight"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Reinventing Social Media for Empowerment
    </motion.h1>
  )

  const renderSubheadline = () => (
    <motion.p 
      className="font-mulish text-xl md:text-2xl text-white mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      No more doomscrolling. Bloom inspires, uplifts, and transforms.
    </motion.p>
  )

  const renderCTA = () => (
    <motion.button
      className="font-mulish px-8 py-4 bg-white text-purple-800 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-100 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      onClick={() => {
        document.getElementById('dark-side')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }}
    >
      Discover the Future of Social Media
    </motion.button>
  )

  return (
    <section className="relative min-h-screen flex items-center">
      {isClient && renderAnimatedBackground()}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        {renderHeadline()}
        {renderSubheadline()}
        {renderCTA()}
      </div>
    </section>
  )
}

