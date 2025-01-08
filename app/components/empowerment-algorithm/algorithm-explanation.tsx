'use client'

import { motion } from 'framer-motion'
import { AlgorithmCard } from './algorithm-card'
import { useState } from 'react'

const algorithmStages = [
  {
    icon: 'funnel',
    title: 'Data Input',
    description: 'Collecting user interactions and content preferences to kickstart the empowerment process.',
  },
  {
    icon: 'smile',
    title: 'Sentiment Analysis',
    description: 'Analyzing the emotional tone of content to filter out negativity and highlight positivity.',
  },
  {
    icon: 'flower',
    title: 'Positive Prioritization',
    description: 'Prioritizing uplifting and inspiring content to drive meaningful engagement.',
  },
  {
    icon: 'map',
    title: 'Personalized Recommendations',
    description: 'Providing content and actionable paths that align with individual interests and growth.',
  },
  {
    icon: 'checklist',
    title: 'Action Plan Execution',
    description: 'Helping users set and achieve goals that align with their personal empowerment journey.',
  },
  {
    icon: 'refresh',
    title: 'Feedback Loop',
    description: 'Learning from user interactions to improve and refine recommendations for continuous growth.',
  },
]

const generateDots = (count: number) => {
  return [...Array(count)].map((_, i) => {
    const size = Math.random() * 12 + 4 // 4-16px (larger than before)
    const left = Math.random() * 100 // 0-100%
    const top = Math.random() * 100 // 0-100%
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-pink-300"
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          top: `${top}%`,
        }}
        animate={{
          y: [0, -15, 0], // Slightly larger movement range
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          y: {
            duration: 4 + Math.random() * 3, // Slightly longer duration
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 5 + Math.random() * 3, // Slightly longer duration
            repeat: Infinity,
            repeatType: 'reverse',
          },
          opacity: {
            duration: 5 + Math.random() * 3, // Slightly longer duration
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />
    )
  })
}

export function AlgorithmExplanation() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-pink-50" id="algorithm-section">
      <div className="absolute inset-0 pointer-events-none">
        {generateDots(70)} // Reduced from 100 to 70
      </div>
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover How the Empowerment Algorithm Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {algorithmStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AlgorithmCard
                {...stage}
                isExpanded={expandedCard === index}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

