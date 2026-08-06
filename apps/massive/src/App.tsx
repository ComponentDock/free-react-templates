import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AppSplit } from './components/AppSplit'
import { Video } from './components/Video'
import { Work } from './components/Work'
import { Screenshots } from './components/Screenshots'
import { Testimonials } from './components/Testimonials'
import { Download } from './components/Download'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Massive — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <AppSplit />
        <Video />
        <Work />
        <Screenshots />
        <Testimonials />
        <Download />
        <Team />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
