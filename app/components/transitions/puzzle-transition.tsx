'use client'

import { useEffect, useRef } from 'react'
import { PuzzlePiece } from './puzzle-piece'
import html2canvas from 'html2canvas'

interface PuzzleTransitionProps {
  onComplete: () => void
}

export function PuzzleTransition({ onComplete }: PuzzleTransitionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const piecesRef = useRef<PuzzlePiece[]>([])
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setup = async () => {
      // Set canvas size to window size
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Capture the current page
      const screenshot = await html2canvas(document.documentElement, {
        logging: false,
        useCORS: true
      })

      // Create image from screenshot
      const image = new Image()
      image.src = screenshot.toDataURL()

      await new Promise((resolve) => {
        image.onload = resolve
      })

      // Create puzzle pieces
      const cols = 8
      const rows = 6
      const pieceWidth = canvas.width / cols
      const pieceHeight = canvas.height / rows

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const piece = new PuzzlePiece(
            x * pieceWidth,
            y * pieceHeight,
            pieceWidth,
            pieceHeight,
            image
          )
          piecesRef.current.push(piece)
        }
      }

      startTimeRef.current = performance.now()
      animate()
    }

    const animate = () => {
      const currentTime = performance.now()
      const elapsed = (currentTime - startTimeRef.current) / 1500 // 1.5 seconds duration

      if (elapsed >= 1) {
        onComplete()
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      piecesRef.current.forEach((piece, index) => {
        // Update piece properties based on animation progress
        piece.x = piece.x + (piece.targetX - piece.x) * elapsed
        piece.y = piece.y + (piece.targetY - piece.y) * elapsed
        piece.rotation = piece.rotation * elapsed
        piece.scale = 1 - elapsed * 0.5
        piece.opacity = 1 - elapsed

        // Draw the piece
        piece.draw(ctx)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    setup()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

