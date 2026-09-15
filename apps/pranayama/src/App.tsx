import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { YogaClasses } from './components/YogaClasses'
import { DifferentYoga } from './components/DifferentYoga'
import { YogaName } from './components/YogaName'
import { Testimonials } from './components/Testimonials'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pranayama — Yoga Studio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <YogaClasses />
        <DifferentYoga />
        <YogaName />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
