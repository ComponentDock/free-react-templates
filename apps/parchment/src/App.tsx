import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { EntriesGrid } from './components/EntriesGrid'
import { ExtraSection } from './components/ExtraSection'
import { FeaturedSlider } from './components/FeaturedSlider'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

/* Parchment — minimal editorial blog home page (ColorLib "Wordsmith"
   recreation). The navy #111860 page background shows through behind the
   footer band; the gray #f2f2f2 featured/entries sections and the white
   s-extra section paint over it. */
export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-brand font-body text-black/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[950] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <FeaturedSlider />
        <EntriesGrid />
        <ExtraSection />
      </main>
      <Footer />
    </div>
  )
}
