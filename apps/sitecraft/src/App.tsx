import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServicesTabs } from './components/ServicesTabs'
import { ServicesGrid } from './components/ServicesGrid'
import { Counters } from './components/Counters'
import { ProjectGallery } from './components/ProjectGallery'
import { TeamSection } from './components/TeamSection'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sitecraft — Construction Company Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-gray-600 transition-colors dark:bg-gray-950 dark:text-gray-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesTabs />
        <ServicesGrid />
        <Counters />
        <ProjectGallery />
        <TeamSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
