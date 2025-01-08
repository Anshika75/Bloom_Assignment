'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GlitchText } from './ui/glitch-text'
import { FloatingElements } from './dark-side/floating-elements'
import { Statistics } from './dark-side/statistics'
import { useRouter } from 'next/navigation'

export function DarkSideSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleTransitionClick = () => {
    // Add fade-out effect to the entire main content
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.style.transition = 'opacity 0.8s ease-out'
      mainContent.style.opacity = '0'
    }
    
    // Navigate after fade-out completes and ensure scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0 })
      router.push('/empowerment')
    }, 800)
  }

  return (
    <section
      id="dark-side"
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-black via-black to-purple-900 pt-24"
    >
      <FloatingElements density={3} />
      
      <div id="main-content" className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <div className="space-y-8 text-center">
            <GlitchText
              text="The Dark Side of Social Media"
              className="font-marcellus text-4xl md:text-[3rem] font-semibold text-white"
            />
            <p className="font-mulish text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Engagement algorithms exploit our time and attention, leading to doomscrolling,
              anxiety, and negativity. Social media isn't connecting us—it's dividing us.
            </p>
          </div>

          <Statistics />

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="font-mulish text-lg text-gray-500 italic">But what if there was another way?</p>
            <motion.button
              onClick={handleTransitionClick}
              className="font-mulish mt-8 px-8 py-4 rounded-full bg-purple-800 text-white hover:bg-purple-700 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ready to break free from the algorithm?
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

