'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export function InteractiveFlower() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const petalCount = 8
    const baseRadius = 20
    const petalLength = 80

    function drawFlower(time: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw center
      ctx.beginPath()
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255, 182, 193, 0.8)' // lighter pink with more opacity
      ctx.fill()

      // Draw petals
      for (let i = 0; i < petalCount; i++) {
        const angle = (i * 2 * Math.PI) / petalCount
        const wobble = Math.sin(time / 1000 + i) * 5

        ctx.beginPath()
        ctx.moveTo(
          centerX + Math.cos(angle) * baseRadius,
          centerY + Math.sin(angle) * baseRadius
        )

        // Control points for the quadratic curve
        const cp1x = centerX + Math.cos(angle - 0.2) * (petalLength + wobble)
        const cp1y = centerY + Math.sin(angle - 0.2) * (petalLength + wobble)
        const cp2x = centerX + Math.cos(angle + 0.2) * (petalLength + wobble)
        const cp2y = centerY + Math.sin(angle + 0.2) * (petalLength + wobble)

        ctx.quadraticCurveTo(cp1x, cp1y, centerX + Math.cos(angle) * (petalLength + wobble), centerY + Math.sin(angle) * (petalLength + wobble))
        ctx.quadraticCurveTo(cp2x, cp2y, centerX + Math.cos(angle) * baseRadius, centerY + Math.sin(angle) * baseRadius)

        const gradient = ctx.createLinearGradient(
          centerX,
          centerY,
          centerX + Math.cos(angle) * petalLength,
          centerY + Math.sin(angle) * petalLength
        )
        gradient.addColorStop(0, 'rgba(255, 182, 193, 0.8)') // lighter pink
        gradient.addColorStop(1, 'rgba(216, 180, 254, 0.7)') // lighter purple

        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    let animationFrameId: number

    function animate(time: number) {
      drawFlower(time)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="max-w-full"
      />
    </motion.div>
  )
}

