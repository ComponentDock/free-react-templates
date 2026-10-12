import { SITE_NAME, WORDMARK_NAME, WORDMARK_TRADE } from '../lib/site'
import { wordmarkClass, wordmarkTradeClass } from '../lib/styles'

/**
 * The wordmark: the shop's own name as two uppercase lines in black — a 20px/700 line
 * over a 12px/500 block line, a 42px lockup inside the design's `5px 0` padding, with
 * 30px of tail under it that makes the strip 72px tall. It points at the top of the page
 * — the design's own brand mark is its only real link — and its colour never changes,
 * because the design's hover colour is the black it already rests in.
 */
export function Wordmark() {
  return (
    <a href="#top" aria-label={SITE_NAME} className={wordmarkClass}>
      {WORDMARK_NAME}
      <span className={wordmarkTradeClass}>{WORDMARK_TRADE}</span>
    </a>
  )
}
