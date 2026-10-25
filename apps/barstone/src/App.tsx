import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { CaseStudy } from './components/CaseStudy'
import { Attorneys } from './components/Attorneys'
import { ConsultationCta } from './components/ConsultationCta'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <CaseStudy />
        <Attorneys />
        <ConsultationCta />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
