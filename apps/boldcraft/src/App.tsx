import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutInfoBar } from './components/AboutInfoBar'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { AboutMe } from './components/AboutMe'
import { BrandArea } from './components/BrandArea'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BoldCraft — Personal Portfolio & Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-text-primary transition-colors">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutInfoBar />
        <Services />
        <Gallery />
        <AboutMe />
        <BrandArea />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
