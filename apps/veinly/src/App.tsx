import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Investors } from './components/Investors'
import { Stats } from './components/Stats'
import { Team } from './components/Team'
import { Press } from './components/Press'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { QuoteModal } from './components/QuoteModal'

/* Veinly — mining company one-pager.
   Section order matches the reference preview 1:1: sticky navbar with
   coral brand + Get Quote button → 2-slide hero slider → Investors photo
   tiles → coral stats band (video block + counters) → Team cards → Press
   items → Testimonials quote cards → Blog posts → Contact form → dark
   footer; the navbar "Get Quote" opens the quote modal. */
export function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />
      <main>
        <Hero />
        <Investors />
        <Stats />
        <Team />
        <Press />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  )
}
