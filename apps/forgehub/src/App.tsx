import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServicesOverview } from './components/ServicesOverview'
import { Portfolio } from './components/Portfolio'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { About } from './components/About'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ForgeHub — Creative Agency & Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesOverview />
        <Portfolio />
        <Features />
        <Testimonials />
        <Services />
        <About />
        <Team />
        <Blog />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
