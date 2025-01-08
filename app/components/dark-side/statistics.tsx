'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Clock, TrendingUp, Bell } from 'lucide-react'

const statistics = [
  {
    icon: Clock,
    text: "60% of users report feeling anxious after scrolling social media",
    color: "text-red-500"
  },
  {
    icon: TrendingUp,
    text: "The average person spends 2 hours per day on social media—more than 5 years of their life",
    color: "text-yellow-500"
  },
  {
    icon: Bell,
    text: "Algorithms prioritize engagement over well-being, amplifying negativity and division",
    color: "text-orange-500"
  }
]

export function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={containerRef} className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto px-4">
      <div className="space-y-8">
        {statistics.map((stat, index) => {
          const opacity = useTransform(
            scrollYProgress,
            [0, 0.3 + index * 0.2, 0.5 + index * 0.2],
            [0, 1, 1]
          )

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className="flex items-start gap-4 p-6 rounded-lg bg-gray-900/50 backdrop-blur"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} shrink-0`} />
              <p className="text-gray-300 text-lg">{stat.text}</p>
            </motion.div>
          )
        })}
      </div>
      <div className="relative h-full min-h-[300px]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-64 h-64 rounded-full bg-red-500/10 blur-2xl" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500/50"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translateY(-100px)`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

