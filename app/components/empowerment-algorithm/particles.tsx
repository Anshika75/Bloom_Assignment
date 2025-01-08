'use client'

import { useEffect, useRef } from 'react'

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 20

    class Particle {
      x: number
      y: number
      size: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 200
        this.size = Math.random() * 3 + 1
        this.speedY = Math.random() * 1 + 0.5
        this.color = `rgba(255, ${Math.random() * 200 + 55}, 255, ${Math.random() * 0.5 + 0.5})`
      }

      update() {
        this.y -= this.speedY
        if (this.y < 0) {
          this.y = canvas.height + Math.random() * 200
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((particle) => {
          particle.update()
          particle.draw()
        })
      }
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

