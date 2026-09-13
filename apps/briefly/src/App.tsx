import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { AboutVideo } from './components/AboutVideo'
import { AboutSuccess } from './components/AboutSuccess'
import { Services } from './components/Services'
import { ServiceDetail } from './components/ServiceDetail'
import { Team } from './components/Team'
import { CTA } from './components/CTA'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Briefly — Law Firm Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <AboutVideo />
        <AboutSuccess />
        <Services />
        <ServiceDetail />
        <Team />
        <CTA />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
