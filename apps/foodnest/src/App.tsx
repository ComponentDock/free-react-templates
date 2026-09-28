import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Restaurant } from './components/Restaurant'
import { SpecialMenu } from './components/SpecialMenu'
import { OurMenu } from './components/OurMenu'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Foodnest — Restaurant Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Restaurant />
        <SpecialMenu />
        <OurMenu />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
