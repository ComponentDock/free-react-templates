import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Subscription } from './components/Subscription'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Subscription />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
