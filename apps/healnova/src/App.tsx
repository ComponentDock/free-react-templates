import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { QuickContact } from './components/QuickContact'
import { About } from './components/About'
import { Mission } from './components/Mission'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Healnova — Medical Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickContact />
        <About />
        <Mission />
        <Services />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
