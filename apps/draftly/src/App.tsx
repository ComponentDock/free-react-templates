import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Counter } from './components/Counter'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { CtaBanner } from './components/CtaBanner'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-500">
      <Navbar />
      <main>
        <Hero />
        <Counter />
        <About />
        <Skills />
        <Services />
        <CtaBanner />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
