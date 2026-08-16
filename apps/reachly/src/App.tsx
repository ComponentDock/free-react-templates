import { useEffect } from 'react'
import { About } from './components/About'
import { BrandStrip } from './components/BrandStrip'
import { CaseStudy } from './components/CaseStudy'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'

/* Reachly — single-page SEO & digital marketing agency template.
   Section order mirrors the reference 1:1: header → hero → services →
   about → pricing → why choose us → brand strip → case study →
   testimonials → CTA banner → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Reachly — SEO & Marketing Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <WhyChooseUs />
        <BrandStrip />
        <CaseStudy />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
