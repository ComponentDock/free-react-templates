import { useEffect } from 'react'
import { Band } from './components/Band'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

/**
 * Menutree — a navigation-first page. Structure is 1:1 with the reference: a
 * transparent header floating over a single flat band, plus the fixed off-canvas
 * drawer (chrome rather than a band). The band carries the ten landing panels the
 * menu's rows point at, and a minimal strip below it closes the shell.
 */
export function App() {
  useEffect(() => {
    document.title = 'Menutree — Multi-Level Menu Template'
  }, [])

  return (
    <div className="min-h-screen bg-band font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[2100] focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Band />
      </main>

      <Footer />
    </div>
  )
}
