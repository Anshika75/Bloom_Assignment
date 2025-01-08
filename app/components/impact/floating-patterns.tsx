'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function FloatingPatterns() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        
        return (
          <motion.div
            key={i}
            className="absolute w-32 h-32"
            style={{
              left: `${(col * 33) + Math.random() * 10}%`,
              top: `${(row * 25) + Math.random() * 10}%`,
              opacity: 0.15,
              color: '#FDB5C0' // medium pink color
            }}
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
              y: [0, -30, 0],
            }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -100 + i * 10]),
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" fill="currentColor" />
            </svg>
          </motion.div>
        )
      })}
    </div>
  )
}

