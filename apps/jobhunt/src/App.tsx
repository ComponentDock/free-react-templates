import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TopJobs } from './components/TopJobs'
import { About } from './components/About'
import { Categories } from './components/Categories'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'JobHunt — Job Portal Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TopJobs />
        <About />
        <Categories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
