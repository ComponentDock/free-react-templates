import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { Highlights } from './components/Highlights'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Doglife — Dog Care Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Highlights />
        <Pricing />
        <Faq />
        <Testimonials />
        <Blog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
