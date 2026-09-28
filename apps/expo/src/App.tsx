import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Brands } from './components/Brands'
import { About } from './components/About'
import { Features } from './components/Features'
import { ProjectUs } from './components/ProjectUs'
import { Pricing } from './components/Pricing'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-body text-text-dark bg-white">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Features />
        <ProjectUs />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
