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
 * The band the page opens on: the design's 112px of air, a centred heading column half the
 * container's width, then — as the design lays it out, still inside the same section — the
 * strip itself, so the band's own bottom padding closes the composition under the strip
 * rather than sitting between it and anything else.
 */
export function Band() {
  return (
    <section aria-labelledby={BAND_HEADING_ID} className={bandClass} data-testid="band">
      <div className={containerClass}>
        <div className={bandRowClass}>
          <div className={bandColumnClass}>
            <h2 id={BAND_HEADING_ID} className={bandHeadingClass}>
              {BAND_HEADING}
            </h2>
          </div>
        </div>
      </div>

      <Bar />
    </section>
  )
}
