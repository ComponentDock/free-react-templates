import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedProperties } from './components/FeaturedProperties'
import { CallToAction } from './components/CallToAction'
import { Testimonials } from './components/Testimonials'
import { AgentSection } from './components/AgentSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <CallToAction />
        <Testimonials />
        <AgentSection />
      </main>
      <Footer />
    </div>
  )
}
