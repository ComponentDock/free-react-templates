import { SITE_NAME, SITE_TAGLINE } from '../lib/site'
import { wordmarkClass, wordmarkLineClass } from '../lib/styles'

/**
 * The wordmark: the app's own name in the place where the design puts its own — one uppercase
 * 20px line in black at the bar's left, with a 12px line under it — inside `5px 0` of padding so
 * the lockup is the design's own 42px box. It is the one link in the chrome that points at the
 * top of the page rather than at a destination, and it keeps the design's own 20px bottom margin
 * below 768px, which is what makes the wrapped narrow-width bar 82px tall there.
 */
export function Wordmark() {
  return (
    <a href="#top" aria-label={SITE_NAME} className={wordmarkClass}>
      <span className="block">{SITE_NAME}</span>
      <span className={wordmarkLineClass}>{SITE_TAGLINE}</span>
    </a>
  )
}
