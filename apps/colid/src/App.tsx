import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Showcase } from './components/Showcase'
import { SpecialFeatures } from './components/SpecialFeatures'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Clients } from './components/Clients'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'

export function App() {
  useEffect(() => {
    document.title = 'Colid — Business Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Showcase />
        <SpecialFeatures />
        <Pricing />
        <Team />
        <Testimonials />
        <Faq />
        <Clients />
        <Blog />
      </main>
      <Contact />
    </div>
  )
}
