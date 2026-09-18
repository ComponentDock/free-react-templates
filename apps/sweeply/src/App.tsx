import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Stats } from './components/Stats'
import { Industries } from './components/Industries'
import { Services } from './components/Services'
import { WorkSteps } from './components/WorkSteps'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { CallToAction } from './components/CallToAction'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sweeply — Cleaning Services Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Stats />
        <Industries />
        <Services />
        <WorkSteps />
        <Testimonials />
        <Pricing />
        <CallToAction />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
