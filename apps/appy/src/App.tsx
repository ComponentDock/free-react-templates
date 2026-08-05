import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { SplitOne } from './components/SplitOne'
import { SplitTwo } from './components/SplitTwo'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Screenshots } from './components/Screenshots'
import { OurFeatures } from './components/OurFeatures'
import { Download } from './components/Download'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Appy — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <SplitOne />
        <SplitTwo />
        <Features />
        <Testimonials />
        <Screenshots />
        <OurFeatures />
        <Download />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
