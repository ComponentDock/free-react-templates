import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Awards } from './components/Awards'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Forma — Astro Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Awards />
        <Faq />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
