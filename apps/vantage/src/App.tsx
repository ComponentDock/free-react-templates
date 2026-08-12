import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Offer } from './components/Offer'
import { Features } from './components/Features'
import { Gallery } from './components/Gallery'
import { ContactQuote } from './components/ContactQuote'
import { LatestBlog } from './components/LatestBlog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vantage — Business & Finance'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Offer />
        <Features />
        <Gallery />
        <ContactQuote />
        <LatestBlog />
      </main>
      <Footer />
    </div>
  )
}
