import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedClasses } from './components/FeaturedClasses'
import { Schedule } from './components/Schedule'
import { About } from './components/About'
import { Events } from './components/Events'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedClasses />
        <Schedule />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
