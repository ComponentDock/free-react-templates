import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedModels } from './components/FeaturedModels'
import { About } from './components/About'
import { Services } from './components/Services'
import { TopModels } from './components/TopModels'
import { Blog } from './components/Blog'
import { Testimony } from './components/Testimony'
import { Appointment } from './components/Appointment'
import { Quote } from './components/Quote'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pose — Model Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedModels />
        <About />
        <Services />
        <TopModels />
        <Blog />
        <Testimony />
        <Appointment />
        <Quote />
      </main>
      <Footer />
    </div>
  )
}
