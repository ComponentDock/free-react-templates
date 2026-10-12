import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { OverlayMenu } from './components/OverlayMenu'
import { Section } from './components/Section'
import { PAGE_TITLE, SECTIONS, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'
import { useOverlay } from './lib/use-overlay'

/**
 * Bimini — the cover drawn over the page: one viewport-wide sheet holding a wordmark and four
 * letterspaced labels, the header burger that grows it into place, and the charcoal hero plus the
 * five blocks the labels point at behind it. Every label is a real destination, and the sheet is
 * also the page lock, so the cover is always exactly one window wide and tall.
 */
export function App() {
  const { isOpen, isCloseVisible, toggle, close, sheetRef, toggleRef } = useOverlay()

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className={pageClass}>
      <a href={SKIP_TARGET} className={skipLinkClass}>
        Skip to content
      </a>

      <OverlayMenu
        isOpen={isOpen}
        isCloseVisible={isCloseVisible}
        onClose={close}
        onNavigate={close}
        sheetRef={sheetRef}
      />

      <Navbar isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />

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
