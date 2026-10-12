import type { ComponentType } from 'react'
import { Church, Clock, MapPin, Music, Utensils } from 'lucide-react'
import { TitleBlock } from './title-block'
import { VENUES, VENUE_EYEBROW, VENUE_HEADING, VENUE_LEAD, type VenueKind } from '../lib/site'
import {
  containerClass,
  sectionAnchorStyle,
  venueBandClass,
  venueCardClass,
  venueGlyphClass,
  venueIconClass,
  venueLineClass,
  venueListClass,
  venueRowClass,
  venueTitleClass,
} from '../lib/styles'

const VENUE_GLYPHS: Record<VenueKind, ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  vows: Church,
  feast: Utensils,
  dancing: Music,
}

/** The three cards: when it starts, and where to be — each one stating its clock and its address. */
export function Venue() {
  return (
    <section
      id="where"
      data-testid="where"
      aria-labelledby="where-heading"
      className={venueBandClass}
      style={sectionAnchorStyle}
    >
      <div className={containerClass}>
        <TitleBlock
          eyebrow={VENUE_EYEBROW}
          heading={VENUE_HEADING}
          headingId="where-heading"
          lead={VENUE_LEAD}
        />

        <div className={venueRowClass}>
          {VENUES.map((venue) => {
            const Glyph = VENUE_GLYPHS[venue.kind]

            return (
              <div key={venue.title} className={venueCardClass} data-testid="venue-card">
                <Glyph className={venueIconClass} aria-hidden="true" />
                <h3 className={venueTitleClass}>{venue.title}</h3>
                <ul className={venueListClass}>
                  <li className={venueLineClass}>
                    <Clock className={venueGlyphClass} aria-hidden="true" />
                    {venue.time}
                  </li>
                  <li className={venueLineClass}>
                    <MapPin className={venueGlyphClass} aria-hidden="true" />
                    {venue.place}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
