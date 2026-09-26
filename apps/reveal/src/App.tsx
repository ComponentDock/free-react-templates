import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { ClientLogos } from './components/ClientLogos'
import { About } from './components/About'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-raleway text-black">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <ClientLogos />
        <About />
        <Services />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
