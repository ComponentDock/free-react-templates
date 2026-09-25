import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { CTABanner } from './components/CTABanner'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans text-body-text bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <CTABanner />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
