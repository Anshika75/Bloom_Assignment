'use client'

import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
}

export class PuzzlePiece {
  x: number
  y: number
  width: number
  height: number
  targetX: number
  targetY: number
  rotation: number
  scale: number
  opacity: number
  image: HTMLImageElement
  bezierPoints: Point[]

  constructor(x: number, y: number, width: number, height: number, image: HTMLImageElement) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.targetX = x + (Math.random() - 0.5) * window.innerWidth * 1.5
    this.targetY = y + (Math.random() - 0.5) * window.innerHeight * 1.5
    this.rotation = (Math.random() - 0.5) * Math.PI
    this.scale = 1
    this.opacity = 1
    this.image = image
    
    // Create bezier points for puzzle piece shape
    this.bezierPoints = this.createPuzzleShape()
  }

  private createPuzzleShape(): Point[] {
    const tabSize = this.width * 0.2
    const points: Point[] = []
    
    // Top edge with tab
    points.push({ x: 0, y: 0 })
    points.push({ x: this.width * 0.3, y: 0 })
    points.push({ x: this.width * 0.5, y: -tabSize })
    points.push({ x: this.width * 0.7, y: 0 })
    points.push({ x: this.width, y: 0 })
    
    // Right edge with tab
    points.push({ x: this.width, y: this.height * 0.3 })
    points.push({ x: this.width + tabSize, y: this.height * 0.5 })
    points.push({ x: this.width, y: this.height * 0.7 })
    points.push({ x: this.width, y: this.height })
    
    // Bottom edge with tab
    points.push({ x: this.width * 0.7, y: this.height })
    points.push({ x: this.width * 0.5, y: this.height + tabSize })
    points.push({ x: this.width * 0.3, y: this.height })
    points.push({ x: 0, y: this.height })
    
    // Left edge with tab
    points.push({ x: 0, y: this.height * 0.7 })
    points.push({ x: -tabSize, y: this.height * 0.5 })
    points.push({ x: 0, y: this.height * 0.3 })
    
    return points
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    
    // Transform
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
    ctx.rotate(this.rotation)
    ctx.scale(this.scale, this.scale)
    ctx.translate(-this.width / 2, -this.height / 2)
    
    // Create puzzle piece path
    ctx.beginPath()
    ctx.moveTo(this.bezierPoints[0].x, this.bezierPoints[0].y)
    for (let i = 1; i < this.bezierPoints.length; i += 3) {
      ctx.bezierCurveTo(
        this.bezierPoints[i].x, this.bezierPoints[i].y,
        this.bezierPoints[(i + 1) % this.bezierPoints.length].x, this.bezierPoints[(i + 1) % this.bezierPoints.length].y,
        this.bezierPoints[(i + 2) % this.bezierPoints.length].x, this.bezierPoints[(i + 2) % this.bezierPoints.length].y
      )
    }
    ctx.closePath()
    
    // Clip and draw image
    ctx.clip()
    ctx.drawImage(this.image, 0, 0, this.width, this.height)
    
    ctx.restore()
  }
}

