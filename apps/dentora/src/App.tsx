import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { WhyUs } from './components/WhyUs'
import { Results } from './components/Results'
import { Testimonials } from './components/Testimonials'
import { Insurance } from './components/Insurance'
import { Cta } from './components/Cta'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dentora — Astro Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Team />
        <WhyUs />
        <Results />
        <Testimonials />
        <Insurance />
        <Cta />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
