import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DomainSearch } from './components/DomainSearch'
import { Guarantee } from './components/Guarantee'
import { Counters } from './components/Counters'
import { Pricing } from './components/Pricing'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { VpsTabs } from './components/VpsTabs'
import { Clients } from './components/Clients'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Netrise — Web Hosting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DomainSearch />
        <Guarantee />
        <Counters />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <VpsTabs />
        <Clients />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
