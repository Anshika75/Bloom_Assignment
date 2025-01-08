'use client'

import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
  alpha: number
}

export function ParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 500
    canvas.height = 500

    const particles: Particle[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: Math.random() * 5 + 2,
        color: `rgb(${Math.floor(Math.random() * 55 + 200)}, ${Math.floor(Math.random() * 55 + 150)}, ${Math.floor(Math.random() * 55 + 200)})`,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: Math.random()
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.alpha -= 0.005

        if (particle.alpha <= 0) {
          particle.x = canvas.width / 2
          particle.y = canvas.height / 2
          particle.vx = (Math.random() - 0.5) * 2
          particle.vy = (Math.random() - 0.5) * 2
          particle.alpha = 1
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      particles.forEach((particle) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          particle.vx += dx * 0.01
          particle.vy += dy * 0.01
        }
      })
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[500px] max-h-[500px]"
      />
    </div>
  )
}

