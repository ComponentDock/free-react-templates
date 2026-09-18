import { useEffect } from 'react'
import { TopInfoBar } from './components/TopInfoBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { ServicesBar } from './components/ServicesBar'
import { AboutSection } from './components/AboutSection'
import { IntroBanner } from './components/IntroBanner'
import { StaffSection } from './components/StaffSection'
import { CoursesSection } from './components/CoursesSection'
import { CounterSection } from './components/CounterSection'
import { Testimonials } from './components/Testimonials'
import { ConsultSection } from './components/ConsultSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = "TinyBrights — Children's Education Template"
  }, [])

  return (
    <div className="min-h-screen bg-white font-body">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <TopInfoBar />
      <Navbar />
      <main id="main-content">
        <HeroSlider />
        <ServicesBar />
        <AboutSection />
        <IntroBanner />
        <StaffSection />
        <CoursesSection />
        <CounterSection />
        <Testimonials />
        <ConsultSection />
      </main>
      <Footer />
    </div>
  )
}
