import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { UpcomingGames } from './components/UpcomingGames'
import { RecentUpdate } from './components/RecentUpdate'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

/* Gambit — a gaming & esports landing page. Section order mirrors the
   source template 1:1: navbar → hero → about → upcoming games → recent
   update tabs → screens gallery → testimonials → pricing → FAQ → blog →
   newsletter → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Gambit — Gaming & Esports Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <UpcomingGames />
        <RecentUpdate />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Faq />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
