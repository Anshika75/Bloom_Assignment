'use client'

import { EmpowermentAlgorithmLanding } from '../components/empowerment-algorithm/landing'
import { AlgorithmExplanation } from '../components/empowerment-algorithm/algorithm-explanation'
import { ImpactSection } from '../components/impact/impact-section'
import { MissionSection } from '../components/mission/mission-section'
import { TestimonialsSection } from '../components/testimonials/testimonials-section'
import { Footer } from '../components/footer/footer'

export default function EmpowermentAlgorithmPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <EmpowermentAlgorithmLanding />
      <AlgorithmExplanation />
      <ImpactSection />
      <MissionSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

