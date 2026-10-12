import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OffCanvas } from './components/OffCanvas'
import { PAGE_TITLE } from './lib/site'
import { useOffCanvas } from './lib/use-off-canvas'

/**
 * Larboard — three regions in the reference's order: the off-canvas sidebar (a
 * fixed overlay, so it renders first), the transparent header floating over the
 * band, then the one frame-filling image band itself, closed by a single strip
 * crediting Component Dock. The header is never pinned and nothing listens for
 * scrolling: the band is tall enough on its own to carry the page.
 */
export function App() {
  const { isOpen, close, toggle, panelRef, toggleRef, closeRef } = useOffCanvas()

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex flex-col bg-white font-sans">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[2100] focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <OffCanvas isOpen={isOpen} onClose={close} panelRef={panelRef} closeRef={closeRef} />

      <Header isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  )
}
