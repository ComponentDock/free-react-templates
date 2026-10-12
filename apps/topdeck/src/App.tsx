import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OffCanvas } from './components/OffCanvas'
import { Section } from './components/Section'
import { PAGE_TITLE, SECTIONS, SUB_PAGES } from './lib/site'
import { useOffCanvas } from './lib/use-off-canvas'

/**
 * Topdeck — the off-canvas panel first (a fixed overlay, exactly as the original
 * puts its panel at the top of the markup), then the transparent two-tier header
 * floating over the band, then the frame-filling photograph itself, then every
 * target the menu declares as a real section, closed by a single strip crediting
 * Component Dock. The header is the only thing that listens for scrolling, and only
 * to pin its own nav row.
 */
export function App() {
  const { isOpen, close, toggle, panelRef, toggleRef, closeRef } = useOffCanvas()

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex flex-col bg-white font-sans">
      <a
        href="#start"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[2100] focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <OffCanvas isOpen={isOpen} onClose={close} panelRef={panelRef} closeRef={closeRef} />

      <Header isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />

      <main>
        <Hero />
        {SECTIONS.map((section) => (
          <Section
            key={section.id}
            section={section}
            subPages={SUB_PAGES.filter((page) => page.parent === section.id)}
          />
        ))}
      </main>

      <Footer />
    </div>
  )
}
