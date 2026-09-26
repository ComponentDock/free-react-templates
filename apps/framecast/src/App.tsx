import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PortfolioGrid } from './components/PortfolioGrid'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <Services />
        <Blog />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
