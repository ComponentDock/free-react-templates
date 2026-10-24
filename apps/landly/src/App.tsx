import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FilterBar } from './components/FilterBar'
import { ServicesAbout } from './components/ServicesAbout'
import { Properties } from './components/Properties'
import { Agents } from './components/Agents'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'
import { pageTitle, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <FilterBar />
        <ServicesAbout />
        <Properties />
        <Agents />
        <Testimonials />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
