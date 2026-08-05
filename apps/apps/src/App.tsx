import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { About } from './components/About'
import { Services } from './components/Services'
import { Video } from './components/Video'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Apps — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <About />
        <Services />
        <Video />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
