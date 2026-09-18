import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { ClientLogos } from './components/ClientLogos'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Creative } from './components/Creative'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Doflo — Digital Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Banner />
        <ClientLogos />
        <About />
        <Services />
        <Portfolio />
        <Creative />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
