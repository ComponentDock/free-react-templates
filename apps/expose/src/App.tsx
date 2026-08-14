import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { MobileMenu } from './components/MobileMenu'
import { PhotoGrid } from './components/PhotoGrid'
import { Footer } from './components/Footer'

/* Expose — single-page photography portfolio: fixed black right sidebar
   (logo + nav + socials) → masonry photo grid (19 cards, hover overlays)
   → centered footer credit. Black page background with coral #ef6c57
   accents and Quicksand type. */
export function App() {
  useEffect(() => {
    document.title = 'Expose — Photography Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-ink font-sans text-white">
      <Sidebar />
      <MobileMenu />
      <main className="md:mr-[250px]">
        <PhotoGrid />
        <Footer />
      </main>
    </div>
  )
}
