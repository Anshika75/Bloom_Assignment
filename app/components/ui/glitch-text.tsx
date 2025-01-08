'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

export function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  const [scope, animate] = useAnimate()
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const letters = text.split('')

  return (
    <motion.div ref={scope} className={`relative ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block relative"
          animate={isGlitching ? {
            x: [0, -2, 2, 0],
            y: [0, 1, -1, 0],
            filter: [
              'hue-rotate(0deg)',
              'hue-rotate(90deg)',
              'hue-rotate(180deg)',
              'hue-rotate(0deg)'
            ],
            opacity: [1, 0.8, 0.9, 1]
          } : {}}
          transition={{
            duration: 0.1,
            delay: index * 0.02
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
          {isGlitching && (
            <>
              <motion.span
                className="absolute left-0 top-0 text-red-500 mix-blend-screen"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
                animate={{
                  x: [-1, 1, -1],
                }}
                transition={{ duration: 0.1 }}
              >
                {letter}
              </motion.span>
              <motion.span
                className="absolute left-0 top-0 text-blue-500 mix-blend-screen"
                style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
                animate={{
                  x: [1, -1, 1],
                }}
                transition={{ duration: 0.1 }}
              >
                {letter}
              </motion.span>
            </>
          )}
        </motion.span>
      ))}
    </motion.div>
  )
}

