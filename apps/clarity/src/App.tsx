import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Training } from './components/Training'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Clarity — Professional Coaching Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Training />
        <Testimonials />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
