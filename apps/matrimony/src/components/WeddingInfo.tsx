import { Award, CalendarDays, Clock, MapPin, Navigation, Rocket, ScanSearch } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import {
  CARD_CTA,
  CARD_LINK,
  EVENT_CARDS,
  INFO_SUBTEXT,
  INFO_TITLE,
  SECTION_IDS,
  type CardGlyph,
  type RowIcon,
} from '../lib/site'
import {
  cardClass,
  cardCtaClass,
  cardCtaRevealClass,
  cardDividerClass,
  cardGlyphClass,
  cardGridClass,
  cardLinkClass,
  cardRowClass,
  cardRowIconClass,
  cardTitleClass,
  containerClass,
  infoSectionClass,
} from '../lib/styles'
import { SectionHeading } from './SectionHeading'

/** The three card glyphs the design paints, read off its own icon set rather than its class names. */
const GLYPHS: Record<CardGlyph, LucideIcon> = {
  ceremony: ScanSearch,
  reception: Rocket,
  party: Award,
}

const ROW_ICONS: Record<RowIcon, LucideIcon> = {
  date: CalendarDays,
  time: Clock,
  venue: MapPin,
  address: Navigation,
}

/**
 * The wedding information band: the near-white floral ground with the centred title block, then the
 * design's three white cards. The active card wears the scarlet border and keeps its pill visible;
 * the other two grow both on hover and on focus-within, so a keyboard visitor sees what a pointer
 * visitor sees.
 */
export function WeddingInfo() {
  return (
    <section id={SECTION_IDS.info} className={infoSectionClass} aria-label="Wedding information">
      <div className={containerClass}>
        <SectionHeading title={INFO_TITLE} subtext={INFO_SUBTEXT} />
        <div className={cardGridClass}>
          {EVENT_CARDS.map((card) => {
            const Glyph = GLYPHS[card.key]

            return (
              <article key={card.key} data-testid={`card-${card.key}`} className={cardClass(card.active)}>
                <Glyph aria-hidden="true" className={cardGlyphClass} />
                <h3 className={cardTitleClass}>{card.title}</h3>
                <div className={cardDividerClass} />
                <ul className="m-0 list-none p-0">
                  {card.rows.map((row) => {
                    const RowGlyph = ROW_ICONS[row.icon]

                    return (
                      <li key={row.text} className={cardRowClass}>
                        <RowGlyph aria-hidden="true" className={cardRowIconClass} />
                        <span>{row.text}</span>
                      </li>
                    )
                  })}
                </ul>
                <a href={`#${SECTION_IDS.contact}`} className={cardLinkClass}>
                  {CARD_LINK}
                </a>
                <div className={cardCtaRevealClass(card.active)}>
                  <ButtonLink href={`#${SECTION_IDS.rsvp}`} className={cardCtaClass}>
                    {CARD_CTA}
                  </ButtonLink>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
