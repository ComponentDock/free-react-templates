import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { PAGE_TITLE, SECTIONS } from './lib/site'

/**
 * Halyard — the solid bar first, then the frame-filling photograph it hands over to,
 * then every destination the bar and the drawer declare, each materialised as a real
 * section, and a single strip crediting Component Dock at the end. The page runs
 * several viewports long, so the composition has the scroll room the design's doubled
 * body height gives it — with real content in place of the design's blank filler —
 * and the bar is not pinned at any point along the way.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex flex-col bg-white font-sans">
      <a
        href="#bridge"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[2100] focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        {SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </main>

      <Footer />
    </div>
  )
}
