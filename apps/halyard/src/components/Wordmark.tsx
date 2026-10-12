import { SITE_NAME } from '../lib/site'
import { wordmarkClass } from '../lib/styles'

/**
 * The middle third's anchor: the yard's own name alone, drawn lowercase at 27.2px in
 * the brand green with no underline in any state and no colour change on hover. It
 * reads as a box at the bar's left edge below 992px and as the page's centre from
 * there up, where its column is the middle third of the grid. It points at the top of
 * the page, the same destination the current row opens.
 */
export function Wordmark() {
  return (
    <a href="#top" className={wordmarkClass}>
      {SITE_NAME}
    </a>
  )
}
