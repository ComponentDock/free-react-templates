import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Brands } from './components/Brands'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Rankly — SEO Analysis Landing'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Features />
        <Pricing />
        <Team />
        <Testimonials />
        <Blog />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
