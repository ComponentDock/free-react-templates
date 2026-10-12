import { BAND_HEADING, BAND_HEADING_ID } from '../lib/site'
import {
  bandClass,
  bandColumnClass,
  bandHeadingClass,
  bandRowClass,
  containerClass,
} from '../lib/styles'
import { Bar } from './Bar'
import { TopChrome } from './TopChrome'

export interface BandProps {
  /** The query the page is narrowed to, handed straight through to the chrome row's field. */
  query: string
  /** Reports every keystroke in that field. */
  onQuery: (value: string) => void
}

/**
 * The band the page opens on: the design's own `padding:112px 0` over the grey page, holding the
 * centred heading in its own container — which, with the heading's 8px tail and the column's 48px
 * of air, is what lands the chrome row's top edge exactly 210px below the page top at every width
 * — and then the full-bleed chrome row and the dark bar, both inside the same band.
 */
export function Band({ query, onQuery }: BandProps) {
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

      <TopChrome query={query} onChange={onQuery} />
      <Bar />
    </section>
  )
}
