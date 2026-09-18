import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { StatsCounter } from './components/StatsCounter'
import { About } from './components/About'
import { Process } from './components/Process'
import { Clients } from './components/Clients'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'DigiView — Digital Agency Template'
  }, [])

  return (
    <div className="min-h-screen font-['Nunito_Sans',sans-serif] text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <StatsCounter />
        <About />
        <Process />
        <Clients />
        <Faq />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
