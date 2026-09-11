import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Stats } from './components/Stats'
import { CtaBanner } from './components/CtaBanner'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Guideway — Consulting Business Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-mist">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        <CtaBanner />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
