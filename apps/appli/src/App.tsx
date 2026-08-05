import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectScreen } from './components/ProjectScreen'
import { Brands } from './components/Brands'
import { Services } from './components/Services'
import { AboutOne } from './components/AboutOne'
import { AboutTwo } from './components/AboutTwo'
import { Video } from './components/Video'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Appli — App Landing Page Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectScreen />
        <Brands />
        <Services />
        <AboutOne />
        <AboutTwo />
        <Video />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
