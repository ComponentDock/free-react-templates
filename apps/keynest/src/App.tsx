import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PropertyListings } from './components/PropertyListings'
import { FeatureShowcase } from './components/FeatureShowcase'
import { ProcessSteps } from './components/ProcessSteps'
import { Team } from './components/Team'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keynest — Property Listing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-heading">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PropertyListings />
        <FeatureShowcase />
        <ProcessSteps />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
