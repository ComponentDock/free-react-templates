import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Stats } from './components/Stats'
import { CtaBanner } from './components/CtaBanner'
import { Services } from './components/Services'
import { ContactNews } from './components/ContactNews'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Credix — Loan & Credit Company Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <CtaBanner />
        <Services />
        <ContactNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
