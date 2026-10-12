import { SITE_NAME } from '../lib/site'
import { wordmarkClass } from '../lib/styles'

/**
 * The wordmark: the page's own name at the design's 20px on a 36px line, uppercase and
 * white, pinned to the bar's left edge and vertically centred in its height. It points at
 * the top of the page — the only row on the bar whose destination is the page itself —
 * and its colour never changes, because the design's hover colour is the colour it
 * already rests in.
 */
export function Wordmark() {
  return (
    <a href="#top" className={wordmarkClass}>
      {SITE_NAME}
    </a>
  )
}
