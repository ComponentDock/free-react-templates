import { SITE_NAME } from '../lib/site'
import { brandClass } from '../lib/styles'

/**
 * The wordmark: the app's own name in one uppercase 20px line in the design's own white, sitting at
 * the **left edge of the bar** on `5px 0` of padding with 16px of space after it — 46px tall on the
 * inherited `line-height:1.8`, which is what the bar's own height is measured from. It is the one
 * link in the chrome with a real destination of its own: the top of the page.
 */
export function Brand() {
  return (
    <a href="#top" aria-label={SITE_NAME} className={brandClass} data-testid="brand">
      {SITE_NAME}
    </a>
  )
}
