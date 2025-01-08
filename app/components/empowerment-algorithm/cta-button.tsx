'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export function CTAButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1,
          ease: 'power2.out',
        }
      )

      gsap.to(buttonRef.current, {
        boxShadow: '0 0 15px 5px rgba(0, 255, 255, 0.5)',
        repeat: -1,
        yoyo: true,
        duration: 2,
      })
    }
  }, [])

  const handleHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.3,
    })
  }

  const handleHoverExit = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
    })
  }

  const handleClick = () => {
    // Implement smooth scroll or page transition here
    console.log('CTA clicked')
  }

  return (
    <button
      ref={buttonRef}
      className="mt-8 px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-blue-400 hover:text-white"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      onClick={handleClick}
    >
      Discover the Algorithm
    </button>
  )
}

