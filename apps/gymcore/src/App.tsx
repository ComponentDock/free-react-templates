import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Classes } from './components/Classes'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Banner } from './components/Banner'
import { Membership } from './components/Membership'
import { Register } from './components/Register'
import { Blog } from './components/Blog'
import { FooterBanner } from './components/FooterBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gymcore — Fitness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Classes />
        <Team />
        <Testimonials />
        <Banner />
        <Membership />
        <Register />
        <Blog />
        <FooterBanner />
      </main>
      <Footer />
    </div>
  )
}
