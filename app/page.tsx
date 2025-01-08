'use client'

import HeroSection from './components/hero-section'
import { DarkSideSection } from './components/dark-side-section'

export default function Page() {
  return (
    <main id="main-content" className="relative">
      <HeroSection />
      <div className="bg-black">
        <DarkSideSection />
      </div>
    </main>
  )
}

