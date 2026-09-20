import { useEffect } from 'react'
import { UpperBar } from './components/UpperBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroFeatures } from './components/IntroFeatures'
import { Welcome } from './components/Welcome'
import { Features } from './components/Features'
import { Classes } from './components/Classes'
import { Testimonials } from './components/Testimonials'
import { Professors } from './components/Professors'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cognita — Online Learning Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <UpperBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroFeatures />
        <Welcome />
        <Features />
        <Classes />
        <Testimonials />
        <Professors />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
