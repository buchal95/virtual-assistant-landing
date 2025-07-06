import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Benefits from '@/components/Benefits'
import Results from '@/components/Results'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Benefits />
      <Results />
      <Testimonials />
      <CTA />
    </main>
  )
}