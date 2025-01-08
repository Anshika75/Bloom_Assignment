'use client'

import { motion } from 'framer-motion'
import { Smile, Sprout, Clock } from 'lucide-react'

const stats = [
  {
    icon: Smile,
    percentage: 80,
    text: "of users report increased happiness",
    color: "from-[#FFC1E3] to-[#E1BEE7]",
  },
  {
    icon: Sprout,
    percentage: 70,
    text: "of users discover new growth opportunities",
    color: "from-[#E1BEE7] to-[#B39DDB]",
  },
  {
    icon: Clock,
    number: 10,
    unit: "million",
    text: "hours of mindful engagement generated",
    color: "from-[#D1C4E9] to-[#B39DDB]",
  },
]

export function ImpactStats() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="absolute inset-0 bg-gray-600/20 backdrop-blur-xl rounded-2xl transition-transform duration-300" />
          <div className="relative p-8 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="mb-4">
              <stat.icon className={`w-12 h-12 bg-gradient-to-br ${stat.color} text-white p-2 rounded-xl`} />
            </div>
            <div className="space-y-2">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                {stat.percentage ? `${stat.percentage}%` : `${stat.number} ${stat.unit}`}
              </div>
              <p className="text-white/90">{stat.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

