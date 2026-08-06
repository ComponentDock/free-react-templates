import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Clients } from './components/Clients'
import { Services } from './components/Services'
import { FeatureCards } from './components/FeatureCards'
import { Portfolio } from './components/Portfolio'
import { Workflow } from './components/Workflow'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Mosh — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Clients />
        <Services />
        <FeatureCards />
        <Portfolio />
        <Workflow />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
