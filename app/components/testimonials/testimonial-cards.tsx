'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Bloom helped me discover my passions.",
    user: "Maria, 27, Spain"
  },
  {
    quote: "I feel uplifted every time I log in.",
    user: "John, 32, Canada"
  },
  {
    quote: "It's not just a platform; it's a movement.",
    user: "Aisha, 29, Nigeria"
  }
]

export function TestimonialCards() {
  return (
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-[#F8ECE4] p-6 rounded-lg shadow-md border border-[#F6B9C8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        >
          <p className="font-mulish text-[#6B5E55] text-lg italic mb-2 leading-relaxed">"{testimonial.quote}"</p>
          <p className="font-marcellus text-transparent bg-clip-text bg-gradient-to-r from-[#D81B60] to-[#880E4F] text-sm">- {testimonial.user}</p>
        </motion.div>
      ))}
    </div>
  )
}

