import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { PAGE_TITLE, SECTIONS, SUB_PAGES } from './lib/site'

/**
 * Bowsprit — the bar first, then the frame-filling photograph it floats on, then
 * every destination the row declares as a real section, closed by a single strip
 * crediting Component Dock. The page runs several viewports long so the
 * composition has the scroll room the original has, and the bar is not pinned at
 * any point.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className="flex flex-col bg-white font-sans">
      <a
        href="#dock"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[1100] focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

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
