import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Industries } from './components/Industries'
import { Cta } from './components/Cta'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Itkol — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Features />
        <Industries />
        <Cta />
        <About />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  )
}
