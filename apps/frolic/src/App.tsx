import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Packages } from './components/Packages'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = "Frolic — Kids' Activity Template"
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Packages />
        <Pricing />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
