import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { CallToAction } from './components/CallToAction'
import { Stats } from './components/Stats'
import { Video } from './components/Video'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tint — Interior Design Studio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <CallToAction />
        <Stats />
        <Video />
        <Services />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
