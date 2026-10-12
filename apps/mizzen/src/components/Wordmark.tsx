import { SITE_NAME, SITE_TAGLINE } from '../lib/site'
import { wordmarkClass, wordmarkLineClass } from '../lib/styles'

/**
 * The wordmark: the app's own two-line lockup in the place where the design puts its own — one
 * uppercase 20px line in black with a 12px line under it at 30% black — inside `5px 0` of
 * padding, 16px clear of the field beside it and carrying its own 30px of bottom margin at every
 * width, which is what makes the chrome row 78.4px tall. It lives on the **chrome row** rather
 * than inside the bar, and it is the one link in the chrome that points back at the top of the
 * page.
 */
export function Wordmark() {
  return (
    <a href="#top" aria-label={SITE_NAME} className={wordmarkClass} data-testid="wordmark">
      <span className="block">{SITE_NAME}</span>
      <span className={wordmarkLineClass}>{SITE_TAGLINE}</span>
    </a>
  )
}
