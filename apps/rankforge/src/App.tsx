import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhatWeDo } from './components/WhatWeDo'
import { StepsSection } from './components/StepsSection'
import { GeneratingCustomers } from './components/GeneratingCustomers'
import { Pricing } from './components/Pricing'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { BlogTips } from './components/BlogTips'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <StepsSection />
        <GeneratingCustomers />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <BlogTips />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
