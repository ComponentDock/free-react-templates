import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { Benefits } from './components/Benefits'
import { Portfolio } from './components/Portfolio'
import { Resume } from './components/Resume'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Testimonials />
        <Services />
        <Benefits />
        <Portfolio />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
