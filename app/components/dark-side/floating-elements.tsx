'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ThumbsDown, Bell, AlertTriangle } from 'lucide-react'

const elements = [
  { icon: MessageCircle, text: "Anxiety Rates Soar" },
  { icon: ThumbsDown, text: "Political Divides Widen" },
  { icon: Bell, text: "Teen Mental Health Crisis" },
  { icon: AlertTriangle, text: "Social Media Addiction Rises" }
]

export function FloatingElements({ density = 1 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 * density }).map((_, i) => {
        const Element = elements[i % elements.length]
        const randomDelay = Math.random() * 20
        const randomDuration = 15 + Math.random() * 10
        const startX = Math.random() * 100
        const startY = 120 + Math.random() * 20

        return (
          <motion.div
            key={i}
            className="absolute flex items-center gap-2 text-gray-400/30"
            initial={{ x: `${startX}vw`, y: `${startY}vh` }}
            animate={{
              x: `${startX - 20}vw`,
              y: '-20vh',
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Element.icon className="w-4 h-4" />
            <span className="text-sm">{Element.text}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

