'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
