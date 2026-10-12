import { useEffect } from 'react'
import { Band } from './components/Band'
import { Footer } from './components/Footer'
import { Section } from './components/Section'
import { PAGE_TITLE, SECTIONS } from './lib/site'
import { skipLinkClass } from './lib/styles'

/**
 * Capstan — the strip and the band it sits in first, then every destination the chrome
 * declares, each materialised as a real section, and one band crediting Component Dock at
 * the end. The strip sits in the flow and is never pinned, so the page runs several
 * viewports long and the composition has the scroll room the design's own empty sheet never
 * had.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex min-h-screen flex-col bg-page font-sans">
      <a href="#berth" className={skipLinkClass}>
        Skip to content
      </a>

      <Band />

      <main>
        {SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </main>

      <Footer />
    </div>
  )
}
