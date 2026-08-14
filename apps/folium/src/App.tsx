import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { SplitOne } from './components/SplitOne'
import { SplitTwo } from './components/SplitTwo'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Folium — Business Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-800 antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <SplitOne />
        <SplitTwo />
        <Testimonials />
        <Services />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
