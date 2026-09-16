import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Services2 } from './components/Services2'
import { AboutSplit } from './components/AboutSplit'
import { Counter } from './components/Counter'
import { WorkGallery } from './components/WorkGallery'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Edifica — Construction & Home Builder Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-smoke transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Services2 />
        <AboutSplit />
        <Counter />
        <WorkGallery />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
