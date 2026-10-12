import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Band } from './components/Band'
import { Footer } from './components/Footer'
import { Section } from './components/Section'
import { FILTER_EMPTY, FILTER_RESET_LABEL, PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { filterSections, filterSummary, isFiltering } from './lib/search'
import {
  containerClass,
  filterBarClass,
  filterResetClass,
  filterTextClass,
  skipLinkClass,
} from './lib/styles'

/**
 * Binnacle — the band the page opens on, with the dark strip and the white bar inside it, then
 * every destination the chrome declares materialised as a real block, and one strip crediting the
 * dock at the end. The bar sits in the flow and is never pinned, so the page runs several
 * viewports long and the composition has the scroll room the design's own blank sheet never had.
 *
 * The search field on the bar is the app's own working interaction: it narrows the blocks below as
 * it is typed into, says how many are left, and puts everything back with one press — where the
 * design's own field submits nowhere at all.
 */
export function App() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  const sections = filterSections(query)
  const filtering = isFiltering(query)

  return (
    <div id="top" className="flex min-h-screen flex-col bg-page font-sans">
      <a href={SKIP_TARGET} className={skipLinkClass}>
        Skip to content
      </a>

      <Band query={query} onQuery={setQuery} />

      <main>
        {filtering && (
          <div className={cn(containerClass, filterBarClass)} data-testid="filter-status">
            <p aria-live="polite" className={filterTextClass}>
              {filterSummary(sections.length, query)}
            </p>
            <button type="button" onClick={() => setQuery('')} className={filterResetClass}>
              {FILTER_RESET_LABEL}
            </button>
          </div>
        )}

        {sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {filtering && sections.length === 0 && (
          <p className={cn(containerClass, filterTextClass)} data-testid="no-matches">
            {FILTER_EMPTY}
          </p>
        )}
      </main>

      <Footer />
    </div>
  )
}
