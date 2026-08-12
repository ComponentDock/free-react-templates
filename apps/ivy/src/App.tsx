import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { ServicesStrip } from './components/ServicesStrip'
import { WhatWeOffer } from './components/WhatWeOffer'
import { CounterVideo } from './components/CounterVideo'
import { Courses } from './components/Courses'
import { Teachers } from './components/Teachers'
import { QuoteForm } from './components/QuoteForm'
import { Events } from './components/Events'
import { BlogSection } from './components/BlogSection'
import { Testimonials } from './components/Testimonials'
import { GalleryStrip } from './components/GalleryStrip'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ivy — University Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesStrip />
        <WhatWeOffer />
        <CounterVideo />
        <Courses />
        <Teachers />
        <QuoteForm />
        <Events />
        <BlogSection />
        <Testimonials />
        <GalleryStrip />
      </main>
      <Footer />
    </div>
  )
}
