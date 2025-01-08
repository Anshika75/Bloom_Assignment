'use client'

import { useEffect, useRef } from 'react'

interface Bubble {
  x: number
  y: number
  radius: number
  dx: number
  dy: number
  color: string
  opacity: number
  speed: number
}

export function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let bubbles: Bubble[] = []
    let mouseX = 0
    let mouseY = 0
    let isHovering = false

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createBubbles = () => {
      bubbles = []
      const numberOfBubbles = Math.floor(window.innerWidth * window.innerHeight / 20000)
      
      for (let i = 0; i < numberOfBubbles; i++) {
        const radius = Math.random() * 30 + 15 // 15-45px
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          dx: (Math.random() - 0.5) * 0.5,
          dy: -Math.random() * 0.5 - 0.1,
          color: getRandomColor(),
          opacity: Math.random() * 0.08 + 0.02, // Reduced opacity to blend with background
          speed: 1 - (radius - 20) / 40
        })
      }
    }

    const getRandomColor = () => {
      const colors = ['#FFC1E3', '#E1BEE7', '#FFFFFF']
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const drawBubble = (bubble: Bubble) => {
      ctx.filter = 'blur(1px)'  // Add minimal blur
      ctx.beginPath()
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
      ctx.fillStyle = `${bubble.color}${Math.round(bubble.opacity * 255).toString(16).padStart(2, '0')}`
      ctx.fill()

      // Subtle glow effect
      const gradient = ctx.createRadialGradient(
        bubble.x, bubble.y, 0,
        bubble.x, bubble.y, bubble.radius * 1.2
      )
      gradient.addColorStop(0, `${bubble.color}11`)
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.filter = 'none'  // Reset filter after drawing
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach(bubble => {
        bubble.x += bubble.dx * bubble.speed
        bubble.y += bubble.dy * bubble.speed

        if (bubble.y + bubble.radius < 0) {
          bubble.y = canvas.height + bubble.radius
          bubble.x = Math.random() * canvas.width
        }
        if (bubble.x + bubble.radius < 0) bubble.x = canvas.width + bubble.radius
        if (bubble.x - bubble.radius > canvas.width) bubble.x = -bubble.radius

        if (isHovering) {
          const dx = mouseX - bubble.x
          const dy = mouseY - bubble.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            bubble.radius = Math.min(bubble.radius * 1.02, bubble.radius * 1.5)
            bubble.opacity = Math.min(bubble.opacity * 1.02, 0.1) // Kept max opacity low
          } else {
            bubble.radius = Math.max(bubble.radius * 0.98, bubble.radius / 1.5)
            bubble.opacity = Math.max(bubble.opacity * 0.98, 0.02)
          }
        }

        drawBubble(bubble)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
      isHovering = true
    }

    const handleMouseLeave = () => {
      isHovering = false
    }

    resizeCanvas()
    createBubbles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createBubbles()
    })
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  )
}

