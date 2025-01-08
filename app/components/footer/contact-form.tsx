'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-[#9A3B6F] to-[#B83267] bg-opacity-80 rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-6">We'd Love to Hear from You!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white border border-[#F48FB1] text-[#3D2E35] focus:outline-none focus:border-[#FF6597] focus:ring-2 focus:ring-[#FF6597]"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-white mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white border border-[#F48FB1] text-[#3D2E35] focus:outline-none focus:border-[#FF6597] focus:ring-2 focus:ring-[#FF6597]"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white border border-[#F48FB1] text-[#3D2E35] focus:outline-none focus:border-[#FF6597] focus:ring-2 focus:ring-[#FF6597] h-32 resize-none"
            required
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-[#F6B9C8] to-[#FDDAC3] text-white font-bold rounded hover:from-[#F48FB1] hover:to-[#FFC1E3] transition-colors duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  )
}

