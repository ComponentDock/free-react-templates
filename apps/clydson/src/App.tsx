import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CounterStats from './components/CounterStats'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import CTA from './components/CTA'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <CounterStats />
      <About />
      <Skills />
      <Services />
      <CTA />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
