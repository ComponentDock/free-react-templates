import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Partner } from './components/Partner'
import { Domain } from './components/Domain'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Counters } from './components/Counters'
import { Cta } from './components/Cta'
import { Faq } from './components/Faq'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Nebuly — single-page cloud services & domain hosting landing:
   header → hero → partner strip → domain search → cloud services →
   feature row → counter band → CTA strip → FAQ → pricing → testimonials →
   blog → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Nebuly — Cloud Services'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-600">
      <Header />
      <main className="flex-1">
        <Hero />
        <Partner />
        <Domain />
        <Services />
        <Features />
        <Counters />
        <Cta />
        <Faq />
        <Pricing />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
