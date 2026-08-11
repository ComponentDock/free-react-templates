import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { CoursesGrid } from './components/CoursesGrid'
import { CtaBand } from './components/CtaBand'
import { FeatureBand } from './components/FeatureBand'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Partners } from './components/Partners'
import { PopularCourses } from './components/PopularCourses'
import { Testimonials } from './components/Testimonials'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Campus — Online University Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <FeatureBand />
        <CoursesGrid />
        <Testimonials />
        <PopularCourses />
        <Partners />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
