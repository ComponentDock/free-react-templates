import { Cake, Camera, Church, Wine, type LucideIcon } from 'lucide-react'
import { DETAILS, DETAILS_TITLE, SECTION_IDS, type DetailGlyph } from '../lib/site'
import {
  containerClass,
  detailBodyClass,
  detailCardClass,
  detailDotClass,
  detailGlyphClass,
  detailsListClass,
  detailsSectionClass,
  detailsSpineClass,
  detailsTrackClass,
  detailTitleClass,
} from '../lib/styles'
import { BandHeading } from './BandHeading'

const GLYPHS: Record<DetailGlyph, LucideIcon> = {
  ceremony: Church,
  toast: Wine,
  cake: Cake,
  photography: Camera,
}

/**
 * The design's signature band: a 1px spine down the centre of the track with four detail cards
 * hooked onto it by a negative top margin and floated to alternating sides, each carrying its own
 * 18px dot on the spine and a 56px rose glyph. At 768px it flattens into one left-aligned column.
 */
export function Details() {
  return (
    <section id={SECTION_IDS.details} className={detailsSectionClass}>
      <div className={containerClass}>
        <BandHeading title={DETAILS_TITLE} />
        <div className={detailsTrackClass}>
          <span className={detailsSpineClass} aria-hidden="true" />
          <ol className={detailsListClass}>
            {DETAILS.map((detail, position) => {
              const side: 'left' | 'right' = position % 2 === 0 ? 'right' : 'left'
              const Glyph = GLYPHS[detail.glyph]

              return (
                <li key={detail.title} className={detailCardClass(side)}>
                  <span className={detailDotClass(side)} aria-hidden="true" />
                  <Glyph className={detailGlyphClass} aria-hidden="true" />
                  <h4 className={detailTitleClass}>{detail.title}</h4>
                  <p className={detailBodyClass}>{detail.body}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
