import { useEffect } from 'react'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { CtaBanner } from './components/CtaBanner'
import { Deliveries } from './components/Deliveries'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Quote } from './components/Quote'
import { Services } from './components/Services'

export function App() {
  useEffect(() => {
    document.title = 'Cargoly — Logistics & Freight'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Process />
        <Quote />
        <Deliveries />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
