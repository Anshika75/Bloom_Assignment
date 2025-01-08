'use client'

import { motion } from 'framer-motion'
import { Brain, Clock, Heart } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Personalized for Upliftment",
    description: "Bloom uses advanced technology to curate content that inspires creativity, builds community, and nurtures well-being.",
  },
  {
    icon: Clock,
    title: "Breaking Free from Engagement Loops",
    description: "Say goodbye to doomscrolling. Bloom's algorithm values your time and well-being, offering content that empowers rather than exploits.",
  },
  {
    icon: Heart,
    title: "Designed for Positive Impact",
    description: "Whether it's a motivational video, a mindful activity, or an opportunity to connect with your community, Bloom is here to help you grow.",
  },
]

export function KeyFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="font-marcellus text-xl font-semibold text-purple-800 mb-2">{feature.title}</h3>
          <p className="font-mulish text-purple-600 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

