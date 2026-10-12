import { SITE_NAME } from '../lib/site'
import { wordmarkClass, wordmarkColumnClass } from '../lib/styles'

/**
 * The bar's left anchor: the page's own name alone, at 24px in uppercase with a wide
 * track and weight 400, on a half-width column pinned 5% from the bar's left edge from
 * 768px up, where the column leaves the flow and the row above it loses its height. It
 * points at the top of the page, the same destination the current row opens.
 */
export function Wordmark() {
  return (
    <div data-testid="wordmark-column" className={wordmarkColumnClass}>
      <a href="#top" className={wordmarkClass}>
        {SITE_NAME}
      </a>
    </div>
  )
}
