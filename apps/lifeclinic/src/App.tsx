import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AppointmentForm } from './components/AppointmentForm'
import { About } from './components/About'
import { CoolFacts } from './components/CoolFacts'
import { Gallery } from './components/Gallery'
import { Features } from './components/Features'
import { Blog } from './components/Blog'
import { Emergency } from './components/Emergency'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'LifeClinic — Medical & Healthcare Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main id="main" className="flex-1">
        <Hero />
        <AppointmentForm />
        <About />
        <CoolFacts />
        <Gallery />
        <Features />
        <Blog />
        <Emergency />
      </main>
      <Footer />
    </div>
  )
}
