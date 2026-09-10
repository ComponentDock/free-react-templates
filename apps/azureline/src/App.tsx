import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { VideoSection } from './components/VideoSection'
import { Services } from './components/Services'
import { LatestWorks } from './components/LatestWorks'
import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Azureline — Business Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <Services />
        <LatestWorks />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
