import { HEADING_ID, HEADLINE, LEDE } from '../content'

/**
 * The centred head: one heavy two-line headline and a balanced two-line lede,
 * with no eyebrow, no logo and no button.
 */
export function PricingHead() {
  return (
    <header className="tb-head">
      <h1 className="tb-title" id={HEADING_ID}>
        {HEADLINE}
      </h1>
      <p className="tb-lede">{LEDE}</p>
    </header>
  )
}
