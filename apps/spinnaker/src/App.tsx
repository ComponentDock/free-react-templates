import { useEffect } from 'react'
import { Band } from './components/Band'
import { Footer } from './components/Footer'
import { Section } from './components/Section'
import { PAGE_TITLE, SECTIONS, SKIP_TARGET } from './lib/site'
import { skipLinkClass } from './lib/styles'

/**
 * Spinnaker — the band the page opens on, with its centred heading and the rounded navy bar inset
 * inside it, then every destination the chrome declares materialised as a real block, and one strip
 * crediting the dock at the end. The bar sits in the flow and is never pinned, so the page runs
 * several viewports long and the composition has the scroll room the design's own blank sheet never
 * had.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex min-h-screen flex-col bg-page font-sans">
      <a href={SKIP_TARGET} className={skipLinkClass}>
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
