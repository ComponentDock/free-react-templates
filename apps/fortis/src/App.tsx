import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Works } from './components/Works'
import { Counters } from './components/Counters'
import { Studio } from './components/Studio'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Fortis — web design agency one-pager.
   Section order matches the reference preview 1:1: transparent navbar with
   hamburger-only nav → full-height photo hero (dark overlay, ghost CTA) →
   About 3-col split with skills bars → light services cards → works
   gallery → light counters band → studio video block → light testimonials →
   blog → light footer with newsletter. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Counters />
        <Studio />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
