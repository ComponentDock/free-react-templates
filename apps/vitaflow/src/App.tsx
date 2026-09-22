import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { AboutSplit } from './components/AboutSplit'
import { ConsultationBar } from './components/ConsultationBar'
import { Testimonials } from './components/Testimonials'
import { HowItWorks } from './components/HowItWorks'
import { SuccessStories } from './components/SuccessStories'
import { CTAIntro } from './components/CTAIntro'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vitaflow — Health Coaching Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <AboutSplit />
        <ConsultationBar />
        <Testimonials />
        <HowItWorks />
        <SuccessStories />
        <CTAIntro />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
