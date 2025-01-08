'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export function DecorativePatterns() {
  const mouseRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }

  return (
    <div 
      className="absolute inset-0 pointer-events-auto overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 100 + 40; // Random size between 40px and 140px
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
              opacity: 0.1,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.1,
              y: [-20, 20, -20],
              transition: {
                y: {
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
            whileHover={{ 
              scale: 1.2,
              opacity: 0.2,
              transition: { duration: 0.3 }
            }}
          >
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <path
                d="M60 0C26.9 0 0 26.9 0 60s26.9 60 60 60 60-26.9 60-60S93.1 0 60 0zm0 110c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="120"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F48FB1" />
                  <stop offset="1" stopColor="#CE93D8" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
        );
      })}
    </div>
  )
}

