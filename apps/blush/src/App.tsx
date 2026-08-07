import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutSplit } from './components/AboutSplit'
import { Faq } from './components/Faq'
import { Stats } from './components/Stats'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Blush — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSplit />
        <Faq />
        <Stats />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
