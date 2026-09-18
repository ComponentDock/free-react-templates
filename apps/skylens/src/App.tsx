import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { VideoSection } from './components/VideoSection'
import { RecentProjects } from './components/RecentProjects'
import { SecondServices } from './components/SecondServices'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export function App() {
  useEffect(() => {
    document.title = 'SkyLens — Drone Photography Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <VideoSection />
        <RecentProjects />
        <SecondServices />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
