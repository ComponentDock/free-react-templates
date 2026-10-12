import { SITE_NAME } from '../lib/site'
import { wordmarkClass } from '../lib/styles'

/**
 * The wordmark: the app's own name, in the place where the design puts its own — one uppercase
 * line in black at the card's left, 20px on the design's 36px line inside `5px 0` of padding,
 * a 46px box — turning white with the card below 992px. It rests in the colour it hovers in,
 * because the design's hover colour for this mark is the colour it already wears, and it is
 * the one link in the chrome that points at the top of the page rather than at a destination.
 */
export function Wordmark() {
  return (
    <a href="#top" aria-label={SITE_NAME} className={wordmarkClass}>
      {SITE_NAME}
    </a>
  )
}
