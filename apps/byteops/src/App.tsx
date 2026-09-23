import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Team } from './components/Team'
import { Stats } from './components/Stats'
import { Process } from './components/Process'
import { Partners } from './components/Partners'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ByteOps — Digital Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Projects />
        <About />
        <Team />
        <Stats />
        <Process />
        <Partners />
        <Faq />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
