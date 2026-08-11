import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Solutions } from './components/Solutions'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

/* Ascendly — business-consulting landing, recreation of ColorLib "Arcwork".
   Section order (1:1): navbar → hero (split white/cream + typed headline) →
   feature cards → "Our Solutions" → testimonial → blog → CTA band → footer. */
export function App() {
  return (
    <div className="font-sans text-muted">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Testimonial />
        <Blog />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
