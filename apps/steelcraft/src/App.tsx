import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Brands } from './components/Brands'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

/* Steelcraft — industrial services one-pager.
   Section order matches the reference preview 1:1: header (black top bar +
   sticky nav) → hero → services cards → brand strip → about + video +
   counters → testimonials → CTA band → footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <About />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
