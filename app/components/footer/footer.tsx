'use client'

import { FlowerAnimation } from './flower-animation'
import { ContactForm } from './contact-form'

export function Footer() {
  return (
    <footer className="relative bg-[#B83267] overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <FlowerAnimation />
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  )
}

