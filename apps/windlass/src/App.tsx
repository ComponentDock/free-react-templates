import { useEffect } from 'react'
import { Band } from './components/Band'
import { Footer } from './components/Footer'
import { Section } from './components/Section'
import { PAGE_TITLE, SECTIONS } from './lib/site'
import { skipLinkClass } from './lib/styles'

/**
 * Windlass — the band and the card it ends with first, then every destination the card
 * declares, each materialised as a real section, and one band crediting the yard's own site at
 * the end. The card sits in the flow and is never pinned, so the page runs several viewports
 * long and the composition has the scroll room the design's own blank sheet never had.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex min-h-screen flex-col bg-page font-sans">
      <a href="#drum" className={skipLinkClass}>
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
