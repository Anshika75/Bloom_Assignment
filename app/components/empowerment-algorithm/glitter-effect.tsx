'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Glitter {
  x: number
  y: number
  size: number
  color: string
  twinkleSpeed: number
  twinklePhase: number
}

export function GlitterEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const glitters: Glitter[] = []
    const glitterCount = 100

    for (let i = 0; i < glitterCount; i++) {
      glitters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
        twinkleSpeed: Math.random() * 0.002 + 0.0005, // Much slower twinkle effect
        twinklePhase: Math.random() * Math.PI * 2
      })
    }

    function drawGlitter(glitter: Glitter, time: number) {
      if (!ctx || !canvas) return

      const twinkle = Math.sin(time * glitter.twinkleSpeed + glitter.twinklePhase) * 0.5 + 0.5
      const size = glitter.size * (0.5 + twinkle * 0.5)

      // Calculate opacity based on y-position
      const opacityFactor = glitter.y / canvas.height
      const baseOpacity = 0.2 + (opacityFactor * 0.8) // 20% at top, 100% at bottom

      ctx.beginPath()
      ctx.arc(glitter.x, glitter.y, size, 0, Math.PI * 2)
      ctx.fillStyle = glitter.color
      ctx.globalAlpha = twinkle * baseOpacity
      ctx.fill()
      ctx.globalAlpha = 1
    }

    let animationFrameId: number

    function animate(time: number) {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      glitters.forEach((glitter) => {
        drawGlitter(glitter, time)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

