import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OffCanvas } from './components/OffCanvas'
import { TopBar } from './components/TopBar'
import { PAGE_TITLE } from './lib/site'
import { useOffCanvas } from './lib/use-off-canvas'

/**
 * Menuribbon — the reference's page in its own order: the off-canvas panel, the
 * #eee utility bar, the white header over the frame-filling photograph, then a
 * single closing strip crediting Component Dock. There is no content section —
 * the document is forced to 200vh so the header's sticky flip is visible.
 */
export function App() {
  const { isOpen, close, toggle, panelRef, toggleRef } = useOffCanvas()

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex min-h-[200vh] flex-col bg-white font-sans">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[2100] focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <OffCanvas isOpen={isOpen} onClose={close} panelRef={panelRef} />

      <TopBar />

      <Header isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />

      <main id="hero">
        <Hero />
      </main>

      <Footer />
    </div>
  )
}
