import { BAND_HEADING, BAND_HEADING_ID } from '../lib/site'
import {
  bandClass,
  bandColumnClass,
  bandHeadingClass,
  bandRowClass,
  containerClass,
} from '../lib/styles'
import { Bar } from './Bar'

/**
 * The band the page opens on: the design's own `padding:112px 0` over the `#fafafa` page, holding
 * the centred 28px heading in its own container — which, with the heading's 8px tail and the
 * column's 48px of air, is what lands the bar's top edge exactly **210px** below the page top at
 * every width — and then the bar in a **second** container of the very same tier, which is what
 * makes the bar inset rather than full-bleed.
 */
export function Band() {
  return (
    <section className={bandClass} aria-labelledby={BAND_HEADING_ID} data-testid="band">
      <div className={containerClass}>
        <div className={bandRowClass}>
          <div className={bandColumnClass}>
            <h2 id={BAND_HEADING_ID} className={bandHeadingClass}>
              {BAND_HEADING}
            </h2>
          </div>
        </div>
      </div>

      <div className={containerClass} data-testid="bar-shell">
        <Bar />
      </div>
    </section>
  )
}
