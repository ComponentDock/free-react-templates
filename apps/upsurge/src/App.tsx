import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { DomainSearch } from './components/DomainSearch'
import { SkillsTestimonials } from './components/SkillsTestimonials'
import { Pricing } from './components/Pricing'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Upsurge — Hosting Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <DomainSearch />
        <SkillsTestimonials />
        <Pricing />
        <Banner />
      </main>
      <Footer />
    </>
  )
}
