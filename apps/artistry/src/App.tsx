import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutSkills } from './components/AboutSkills'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white text-ink" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <AboutSkills />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
