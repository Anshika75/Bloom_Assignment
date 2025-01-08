'use client'

import { motion } from 'framer-motion'
import { TestimonialsGlobe } from './testimonials-globe'
import { TestimonialCards } from './testimonial-cards'
import { DecorativeElements } from './decorative-elements'

export function TestimonialsSection() {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-[#FDEAE9] to-[#F8ECE4]">
      <DecorativeElements />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(to right, #D81B60, #880E4F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          What Our Community is Saying
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl text-center text-[#A4978E] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Voices from around the world, sharing their journey with Bloom.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <TestimonialsGlobe />
          </div>
          <div className="w-full md:w-1/2">
            <TestimonialCards />
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D81B60] to-[#880E4F] text-white text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 193, 227, 0)",
                "0 0 20px 2px rgba(255, 193, 227, 0.3)",
                "0 0 0 0 rgba(255, 193, 227, 0)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Explore More Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

