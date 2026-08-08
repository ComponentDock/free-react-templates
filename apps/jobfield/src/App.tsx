import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { FeaturedJobs } from './components/FeaturedJobs'
import { Categories } from './components/Categories'
import { Companies } from './components/Companies'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { JobAlerts } from './components/JobAlerts'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Jobfield — Job Board Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero />
        <Stats />
        <FeaturedJobs />
        <Categories />
        <Companies />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <JobAlerts />
        <Cta />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
