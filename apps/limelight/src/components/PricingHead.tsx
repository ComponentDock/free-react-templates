import { EYEBROW, HEADING_ID, HEADLINE_GLOW, HEADLINE_LEAD, LEDE } from '../content'

/**
 * The 640px centred head: a pill eyebrow with a live dot, the page's only `h1`
 * whose last word glows, and a balanced two-line lede. Nothing else lives here —
 * no button, no logo, no proof row — the 56px clearance to the grid is the
 * wrapper's bottom margin.
 */
export function PricingHead() {
  return (
    <header className="lm-head">
      <p className="lm-eyebrow">
        <span className="lm-dot" aria-hidden="true" />
        {EYEBROW}
      </p>
      <h1 className="lm-title" id={HEADING_ID}>
        {HEADLINE_LEAD}
        <span className="lm-glow">{HEADLINE_GLOW}</span>
      </h1>
      <p className="lm-lede">{LEDE}</p>
    </header>
  )
}
