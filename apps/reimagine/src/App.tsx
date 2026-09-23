import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Story } from './components/Story'
import { Newsletter } from './components/Newsletter'
import { FooterWidgets } from './components/FooterWidgets'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Reimagine — Creative Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-[--color-body]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Story />
        <Newsletter />
      </main>
      <FooterWidgets />
      <Footer />
    </div>
  )
}
