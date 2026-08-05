import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Achievements } from './components/Achievements'
import { Brands } from './components/Brands'
import { FeatureRows } from './components/FeatureRows'
import { Testimonial } from './components/Testimonial'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bold — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Achievements />
        <Brands />
        <FeatureRows />
        <Testimonial />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
