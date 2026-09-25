import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Carousel } from './components/Carousel'
import { Services } from './components/Services'
import { VideoSection } from './components/VideoSection'
import { ServicesHorizontal } from './components/ServicesHorizontal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crafty — Art & Crafting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Carousel />
        <Services />
        <VideoSection />
        <ServicesHorizontal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
