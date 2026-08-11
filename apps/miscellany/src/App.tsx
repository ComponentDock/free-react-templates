import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { BlogGrid } from './components/BlogGrid'
import { InstagramStrip } from './components/InstagramStrip'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <HeroSlider />
        <BlogGrid />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
