import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { Card } from '@free-react-templates/ui'
import { INFO_CARDS, SECTION_IDS, type InfoCard, type RowIcon } from '../lib/site'
import {
  containerClass,
  infoCardBodyClass,
  infoCardClass,
  infoCardTitleClass,
  infoGridClass,
  infoRowClass,
  infoRowIconClass,
  infoRowLabelClass,
  infoRowTextClass,
  infoRowsClass,
  infoSectionClass,
} from '../lib/styles'

/** Each meta line's own glyph, read off the design's row icons. */
const ROW_GLYPHS: Record<RowIcon, typeof CalendarDays> = {
  date: CalendarDays,
  time: Clock,
  address: MapPin,
}

function InfoPlate({ card }: { card: InfoCard }) {
  return (
    <Card data-testid="info-card" className={infoCardClass}>
      {card.rows.length === 0 ? (
        <h2 className={infoCardTitleClass}>{card.title}</h2>
      ) : (
        <h3 className={infoCardTitleClass}>{card.title}</h3>
      )}

      <p className={infoCardBodyClass}>{card.body}</p>

      {card.rows.length > 0 ? (
        <dl className={infoRowsClass}>
          {card.rows.map((row) => {
            const Glyph = ROW_GLYPHS[row.icon]

            return (
              <div key={row.label} className={infoRowClass}>
                <Glyph aria-hidden="true" className={infoRowIconClass} />
                <dt className={infoRowLabelClass}>{row.label}</dt>
                <dd className={infoRowTextClass}>{row.text}</dd>
              </div>
            )
          })}
        </dl>
      ) : null}
    </Card>
  )
}

/**
 * The design's three white plates on the pale lilac band: the information plate that carries the
 * band's own heading and note, then the ceremony and the party, each with its date, time and address
 * laid out as a definition list.
 */
export function InfoCards() {
  return (
    <section id={SECTION_IDS.info} className={infoSectionClass} aria-label="Wedding information">
      <div className={containerClass}>
        <div className={infoGridClass}>
          {INFO_CARDS.map((card) => (
            <InfoPlate key={card.key} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
