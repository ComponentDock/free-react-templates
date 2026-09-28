import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { OurStory } from './components/OurStory'
import { BestSellers } from './components/BestSellers'
import { OurMenu } from './components/OurMenu'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pieslice — Pizza Restaurant Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <BestSellers />
        <OurMenu />
      </main>
      <Footer />
    </div>
  )
}
