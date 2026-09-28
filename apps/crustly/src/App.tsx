import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { CanvasMenu } from './components/CanvasMenu'
import { HeroBanner } from './components/HeroBanner'
import { AboutStory } from './components/AboutStory'
import { FeatureStory } from './components/FeatureStory'
import { OurMenu } from './components/OurMenu'
import { Testimonials } from './components/Testimonials'
import { BookTable } from './components/BookTable'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crustly — Restaurant & Bakery Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <AboutStory />
        <FeatureStory />
        <OurMenu />
        <Testimonials />
        <BookTable />
      </main>
      <Footer />
      <CanvasMenu />
    </div>
  )
}
