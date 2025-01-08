'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    year: 2020,
    title: "The Idea",
    description: "A dream to transform social media was born."
  },
  {
    year: 2022,
    title: "Development Begins",
    description: "The Bloom platform started taking shape."
  },
  {
    year: 2024,
    title: "Launch",
    description: "Empowering millions worldwide with mindful technology."
  },
  {
    year: 2026,
    title: "Global Growth",
    description: "Bloom reaches 50 countries, connecting humanity."
  },
  {
    year: 2030,
    title: "The Vision",
    description: "A future where every individual thrives with Bloom."
  }
]

export function Timeline() {
  // const containerRef = useRef<HTMLDivElement>(null)
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"]
  // })

  // const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1])

  return (
    <div className="relative pt-4">
      <motion.div 
        className="absolute top-8 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#F48FB1] to-[#CE93D8]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative grid grid-cols-5 gap-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F48FB1] to-[#CE93D8] mb-4 relative group z-10"
              whileHover={{ scale: 1.2 }}
            >
              <div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm text-gray-800 whitespace-nowrap">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            >
              <p className="text-2xl font-bold text-[#333333] mb-1">{milestone.year}</p>
              <p className="text-sm text-[#666666]">{milestone.title}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

