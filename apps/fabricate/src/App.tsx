import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
