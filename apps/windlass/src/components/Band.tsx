import { BAND_HEADING, BAND_HEADING_ID } from '../lib/site'
import { bandClass, bandColumnClass, bandHeadingClass, bandRowClass, containerClass } from '../lib/styles'
import { Bar } from './Bar'

/**
 * The band the page opens on: the design's own `padding:112px 0` over the grey page, holding
 * the centred heading in its own container and the card in a second one underneath it, which is
 * what lands the card's top edge exactly 210px below the page top at every width
 * (112 + 42 + 8 + 48).
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

      <div className={containerClass}>
        <Bar />
      </div>
    </section>
  )
}
