import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BrandLogos } from './components/BrandLogos'
import { Services } from './components/Services'
import { AboutSection } from './components/AboutSection'
import { TopJobs } from './components/TopJobs'
import { JobPost } from './components/JobPost'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'JobGrid — Job Board Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandLogos />
        <Services />
        <AboutSection />
        <TopJobs />
        <JobPost />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
