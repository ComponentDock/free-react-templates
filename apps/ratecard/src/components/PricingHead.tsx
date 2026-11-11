import { EYEBROW, HEADLINE, HEADING_ID, LEDE } from '../data/site'

/**
 * The 640px centred head: a 13px uppercase eyebrow, the page's only `h1` and a
 * two-line lede. Nothing else lives here — no button, no proof row, no logo —
 * and the 48px clearance to the grid is the wrapper's bottom margin.
 */
export function PricingHead() {
  return (
    <header className="rc-head">
      <p className="rc-eyebrow">{EYEBROW}</p>
      <h1 className="rc-title" id={HEADING_ID}>
        {HEADLINE}
      </h1>
      <p className="rc-lede">{LEDE}</p>
    </header>
  )
}
