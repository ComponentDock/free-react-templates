import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroCarousel } from './components/HeroCarousel'
import { ShowGrid } from './components/ShowGrid'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { TRENDING_SHOWS, POPULAR_SHOWS, RECENT_SHOWS, LIVE_ACTION_SHOWS } from './data'

/* Anipulse — anime streaming template. Section order mirrors the
   source template 1:1: navbar → hero carousel → trending → popular →
   recently added → live action → sidebar (on desktop alongside content)
   → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Anipulse — Anime Streaming Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-navy font-sans text-text-white">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-6 py-8 lg:flex-row">
            {/* Main content */}
            <div className="min-w-0 flex-1">
              <ShowGrid title="Trending Now" shows={TRENDING_SHOWS} viewAll />
              <ShowGrid title="Popular Shows" shows={POPULAR_SHOWS} />
              <ShowGrid title="Recently Added Shows" shows={RECENT_SHOWS} />
              <ShowGrid title="Live Action" shows={LIVE_ACTION_SHOWS} />
            </div>
            {/* Sidebar */}
            <div className="w-full shrink-0 lg:w-[320px]">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
