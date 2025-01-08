'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface FlowerMotif {
  x: number
  y: number
  size: number
  petalCount: number
  rotationSpeed: number
  rotationDirection: 1 | -1
  color: string
  baseScale: number;
  rotation: number;
}

export function FlowerAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const PADDING = 30; // Padding from canvas borders

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 500
    canvas.height = 700

    const flowerMotifs: FlowerMotif[] = []
    const motifCount = 50

    const generateLightPinkColor = () => {
      const r = Math.floor(Math.random() * 55) + 200
      const g = Math.floor(Math.random() * 55) + 180
      const b = Math.floor(Math.random() * 55) + 200
      return `rgb(${r}, ${g}, ${b})`
    }

    // Create a grid to evenly distribute flowers
    //const gridSize = Math.ceil(Math.sqrt(motifCount))
    //const cellWidth = canvas.width / gridSize
    //const cellHeight = canvas.height / gridSize
    //const borderPadding = 40 // Padding from canvas borders

    for (let i = 0; i < motifCount; i++) {
      flowerMotifs.push({
        x: PADDING + Math.random() * (canvas.width - 2 * PADDING),
        y: PADDING + Math.random() * (canvas.height - 2 * PADDING),
        size: Math.random() * 30 + 20,
        petalCount: Math.floor(Math.random() * 3) + 6,
        rotationSpeed: Math.random() * 0.02 + 0.01,
        rotationDirection: Math.random() < 0.5 ? 1 : -1,
        color: generateLightPinkColor(),
        baseScale: Math.random() * 0.5 + 0.75, // Random base scale between 0.75 and 1.25
        rotation: 0, // Initial rotation
      })
    }

    let time = 0

    function drawFlowerMotif(motif: FlowerMotif, globalScale: number) {
      const { x, y, size, petalCount, rotationSpeed, rotationDirection, color, baseScale, rotation } = motif

      ctx.save()
      ctx.translate(x, y)
      
      // Apply individual flower rotation
      ctx.rotate(rotation)
      
      // Apply both global scale and individual flower scale
      const combinedScale = globalScale * baseScale * (1 + Math.sin(time * 2) * 0.1)
      ctx.scale(combinedScale, combinedScale)

      // Draw center
      ctx.beginPath()
      ctx.arc(0, 0, size / 4, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()

      // Draw petals
      for (let i = 0; i < petalCount; i++) {
        const angle = (i * 2 * Math.PI) / petalCount
        const petalSize = size

        ctx.beginPath()
        ctx.moveTo(0, 0)

        ctx.arc(
          Math.cos(angle) * petalSize * 0.5,
          Math.sin(angle) * petalSize * 0.5,
          petalSize * 0.5,
          angle - Math.PI * 0.5,
          angle + Math.PI * 0.5
        )
        ctx.closePath()

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, petalSize)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, color.replace('rgb', 'rgba').replace(')', ', 0.5)'))

        ctx.fillStyle = gradient
        ctx.fill()
      }

      ctx.restore()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate global scale based on time
      const globalScale = 0.8 + Math.sin(time * 0.5) * 0.2

      flowerMotifs.forEach(motif => {
        // Update rotation
        motif.rotation += motif.rotationSpeed * motif.rotationDirection
        drawFlowerMotif(motif, globalScale)
      })

      time += 0.016
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Clean up animation frame if needed
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1 })
    } else {
      controls.start({ opacity: 0 })
    }
  }, [isVisible, controls])

  return (
    <motion.div
      className="w-full h-[600px] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[500px] max-h-[600px]"
      />
    </motion.div>
  )
}

