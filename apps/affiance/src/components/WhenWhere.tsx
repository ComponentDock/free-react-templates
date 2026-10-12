import { Cake, Church } from 'lucide-react'
import { cn, ButtonLink } from '@free-react-templates/ui'
import { EVENT_PLACES, SECTION_IDS, type EventGlyph } from '../lib/site'
import {
  containerClass,
  placeClass,
  placeDiscClass,
  placeGlyphClass,
  placeLineClass,
  placeMapClass,
  placePhoneClass,
  placeTitleClass,
  placesRowClass,
  sectionClass,
} from '../lib/styles'
import { SectionHeading } from './SectionHeading'

/** The chapel and the cake the design sets inside a 100px white disc. */
function PlaceGlyph({ glyph }: { glyph: EventGlyph }) {
  return glyph === 'church' ? (
    <Church className={placeGlyphClass} aria-hidden="true" />
  ) : (
    <Cake className={placeGlyphClass} aria-hidden="true" />
  )
}

/** The digits a phone link needs: nothing but the dialling characters survive. */
function dialable(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

/**
 * When & where: the light band's two event columns, each under a white disc with its brand-pink
 * glyph, carrying the date, the time, the two-line address, a dialable phone number and a See Map
 * link into a keyless OpenStreetMap view.
 */
export function WhenWhere() {
  return (
    <section
      id={SECTION_IDS.whenWhere}
      className={cn(sectionClass, 'bg-band')}
      aria-label="When and where"
    >
      <div className={containerClass}>
        <SectionHeading subheading="Planning" title="When & Where" />
        <div className={placesRowClass}>
          {EVENT_PLACES.map((place) => (
            <div key={place.title} data-testid={`place-${place.glyph}`} className={placeClass}>
              <span className={placeDiscClass}>
                <PlaceGlyph glyph={place.glyph} />
              </span>
              <h3 className={placeTitleClass}>{place.title}</h3>
              <p className={placeLineClass}>{place.date}</p>
              <p className={placeLineClass}>{place.time}</p>
              <address className={cn(placeLineClass, 'not-italic')}>
                {place.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className={placeLineClass}>
                <a className={placePhoneClass} href={`tel:${dialable(place.phone)}`}>
                  {place.phone}
                </a>
              </p>
              <ButtonLink
                href={place.map}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="sm"
                className={placeMapClass}
              >
                See Map
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
