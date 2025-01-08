'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function CircleAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0.3,
      backgroundColor: '#F8D0D6',
    },
    animate: {
      scale: [0, 1, 0.9],
      opacity: [0.3, 1, 1],
      backgroundColor: ['#F8D0D6', '#FFB6C1', '#FFB6C1'],
      transition: {
        duration: 8,
        times: [0, 0.6, 1],
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <motion.div
        className="rounded-full"
        style={{
          width: '30%',
          paddingBottom: '30%',
          maxWidth: '150px',
          maxHeight: '150px',
        }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: [0, 0.2, 0], scale: 1.3 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{ backgroundColor: '#FFB6C1' }}
          />
        )}
      </motion.div>
    </div>
  )
}

