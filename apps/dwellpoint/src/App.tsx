import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { Properties } from './components/Properties'
import { Testimonials } from './components/Testimonials'
import { Cities } from './components/Cities'
import { Features } from './components/Features'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Properties />
        <Testimonials />
        <Cities />
        <Features />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}
