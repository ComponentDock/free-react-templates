import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { VideoDemo } from './components/VideoDemo'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { DownloadCta } from './components/DownloadCta'
import { Integrations } from './components/Integrations'
import { Metrics } from './components/Metrics'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Appco — App Landing Page Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <VideoDemo />
        <Pricing />
        <Testimonials />
        <Faq />
        <DownloadCta />
        <Integrations />
        <Metrics />
      </main>
      <Footer />
    </div>
  )
}
