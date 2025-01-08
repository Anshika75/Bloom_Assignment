'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function HeroText() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (headlineRef.current && subheadlineRef.current) {
      gsap.fromTo(
        headlineRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
        }
      )

      gsap.fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out',
        }
      )

      gsap.to('.underline', {
        width: '100%',
        duration: 1,
        delay: 1,
        ease: 'power2.inOut',
      })
    }
  }, [])

  return (
    <div className="text-center z-10">
      <h1
        ref={headlineRef}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
      >
        {'Empowerment, Redefined.'.split('').map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </h1>
      <div className="underline w-0 h-1 bg-blue-500 mx-auto mb-4"></div>
      <p
        ref={subheadlineRef}
        className="text-xl md:text-2xl text-blue-200"
      >
        A Social Media Algorithm That Inspires and Uplifts.
      </p>
    </div>
  )
}

