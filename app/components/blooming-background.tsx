'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion'

const Flower = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-8 h-8"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 2, delay }}
  >
    <div className="w-full h-full bg-pink-200 rounded-full" />
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-pink-300 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 0',
        }}
        animate={{
          rotate: [i * 72, i * 72 + 10, i * 72],
          x: ['0%', '120%', '100%'],
          y: ['0%', '-20%', '0%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    ))}
  </motion.div>
)

export function BloomingBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const controls = useAnimation()

  useEffect(() => {
    const updateBackground = () => {
      controls.start({ opacity: 1 - scrollYProgress.get() })
    }

    const unsubscribe = scrollYProgress.onChange(updateBackground)
    return () => unsubscribe()
  }, [scrollYProgress, controls])

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      animate={controls}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <Flower
          key={i}
          x={Math.random() * 100}
          y={Math.random() * 100}
          delay={Math.random() * 2}
        />
      ))}
    </motion.div>
  )
}

