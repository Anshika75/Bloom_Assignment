'use client'

import { useTransition } from '../../contexts/transition-context'
import { PuzzleTransition } from './puzzle-transition'
import { useRouter } from 'next/navigation'

export function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const { isTransitioning, endTransition } = useTransition()
  const router = useRouter()

  return (
    <>
      {children}
      {isTransitioning && (
        <PuzzleTransition
          onTransitionComplete={endTransition}
        />
      )}
    </>
  )
}

