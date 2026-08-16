import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ContactStrip } from './components/ContactStrip'
import { PromiseSection } from './components/PromiseSection'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Team } from './components/Team'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Stalwart — Construction Company'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <Hero />
        <ContactStrip />
        <PromiseSection />
        <Services />
        <Gallery />
        <About />
        <Team />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
