import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedPractice } from './components/FeaturedPractice'
import { AreasOfExpertise } from './components/AreasOfExpertise'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Consultation } from './components/Consultation'
import { TestimonialsFaq } from './components/TestimonialsFaq'
import { SocialBar } from './components/SocialBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Jurist — Law Firm Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedPractice />
        <AreasOfExpertise />
        <WhyChooseUs />
        <Consultation />
        <TestimonialsFaq />
        <SocialBar />
      </main>
      <Footer />
    </div>
  )
}
