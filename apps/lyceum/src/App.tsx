import { useEffect } from 'react'
import { Blog } from './components/Blog'
import { Courses } from './components/Courses'
import { FeatureStrip } from './components/FeatureStrip'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Impress } from './components/Impress'
import { Navbar } from './components/Navbar'
import { Packages } from './components/Packages'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { TopBar } from './components/TopBar'
import { documentTitle, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <FeatureStrip />
        <Courses />
        <Team />
        <Testimonials />
        <Packages />
        <Blog />
        <Impress />
      </main>
      <Footer />
    </div>
  )
}
