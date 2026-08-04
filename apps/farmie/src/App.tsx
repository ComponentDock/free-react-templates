import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { About } from './components/About'
import { FarmToTable } from './components/FarmToTable'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { Newsletter } from './components/Newsletter'
import { Practices } from './components/Practices'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { News } from './components/News'
import { TrustBadges } from './components/TrustBadges'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Farmie — Farm & Organic Shop Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <About />
        <FarmToTable />
        <Services />
        <Products />
        <Newsletter />
        <Practices />
        <Testimonials />
        <Contact />
        <News />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  )
}
