import { useEffect } from 'react'
import { ContentBand } from './components/ContentBand'
import { Footer } from './components/Footer'
import { NavToggle } from './components/NavToggle'
import { Section } from './components/Section'
import { SideRail } from './components/SideRail'
import { PAGE_TITLE, SECTIONS, SKIP_TARGET } from './lib/site'
import { columnClass, pageClass, skipLinkClass } from './lib/styles'
import { useDrawer } from './lib/use-drawer'

/**
 * Sponson — the rail the page hangs off: a fixed white column at the left edge carrying six labels,
 * the burger that pulls the same rail out of the left edge below 992px, and the content column
 * beside it holding the band and every block a label points at. The rail's labels are all real
 * destinations and the block beside them travels with the drawer rather than being covered by it,
 * so the page reads the same at every width the design turns at.
 */
export function App() {
  const { isOpen, toggle, close, railRef, toggleRef } = useDrawer()

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className={pageClass}>
      <a href={SKIP_TARGET} className={skipLinkClass}>
        Skip to content
      </a>

      <NavToggle isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />
      <SideRail isOpen={isOpen} railRef={railRef} onNavigate={close} />

      <div className={columnClass(isOpen)} data-testid="column">
        <main>
          <ContentBand />

          {SECTIONS.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </main>

        <Footer />
      </div>
    </div>
  )
}
