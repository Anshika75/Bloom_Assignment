'use client'

import { useEffect, useRef } from 'react'

export function EmpowermentPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    class Path {
      x: number
      y: number
      angle: number
      length: number
      maxLength: number
      phase: 'growing' | 'shrinking' | 'growing-back'
      color: string
      spreadFactor: number

      constructor() {
        this.x = centerX
        this.y = centerY
        this.angle = Math.random() * Math.PI * 2
        this.length = 0
        this.maxLength = Math.random() * 100 + 200 // Random max length between 200 and 300
        this.phase = 'growing'
        this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100}, ${Math.random() * 155 + 100}, 0.5)`
        this.spreadFactor = Math.random() * 1 // Changed from 0.5 + 0.5
      }

      update() {
        switch (this.phase) {
          case 'growing':
            this.length += 8 // Increased from 4
            if (this.length >= this.maxLength) {
              this.phase = 'shrinking'
            }
            break
          case 'shrinking':
            this.length -= 4 // Increased from 2
            if (this.length <= this.maxLength * 0.45) {
              this.phase = 'growing-back'
            }
            break
          case 'growing-back':
            this.length += 4 // Increased from 2
            if (this.length >= this.maxLength) {
              this.phase = 'shrinking'
            }
            break
        }
      }

      draw() {
        const endX = this.x + Math.cos(this.angle) * this.length * this.spreadFactor
        const endY = this.y + Math.sin(this.angle) * this.length * this.spreadFactor

        ctx!.beginPath()
        ctx!.moveTo(this.x, this.y)
        ctx!.lineTo(endX, endY)
        ctx!.strokeStyle = this.color
        ctx!.lineWidth = 2
        ctx!.stroke()
      }
    }

    const paths: Path[] = []
    for (let i = 0; i < 30; i++) {
      paths.push(new Path())
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      paths.forEach(path => {
        path.update()
        path.draw()
      })

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

