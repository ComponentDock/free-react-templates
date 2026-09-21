import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { Services } from './components/Services'
import { History } from './components/History'
import { Testimonials } from './components/Testimonials'
import { VisitUs } from './components/VisitUs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = "Sartorial — Men's Tailor Shop Template"
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Services />
        <History />
        <Testimonials />
        <VisitUs />
      </main>
      <Footer />
    </div>
  )
}
