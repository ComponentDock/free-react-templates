import { useEffect } from 'react'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InfoBar } from './components/InfoBar'
import { QuoteForm } from './components/QuoteForm'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'

export function App() {
  useEffect(() => {
    document.title = 'Vitesse — Transportation & Freight Template'
  }, [])

  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <Services />
        <About />
        <QuoteForm />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
