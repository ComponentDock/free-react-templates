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
 * The band the page opens on: the design's 112px of air, a centred heading column half
 * the container's width, and then — as the design lays it out — the bar itself, so the
 * band's own bottom padding closes the composition under the bar rather than sitting
 * between the heading and it.
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
