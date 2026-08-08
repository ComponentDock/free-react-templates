import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Endpoint — Astro Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Contact />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
