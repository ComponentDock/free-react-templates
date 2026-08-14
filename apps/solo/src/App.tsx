import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Facts } from './components/Facts'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { BlogSection } from './components/BlogSection'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Solo — Personal Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-muted antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Facts />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <BlogSection />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
