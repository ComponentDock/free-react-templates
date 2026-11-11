import { CONTACT, HOURS_TITLE_ID, HOURS, MENU_ID, WINE_ID, PRIVATE_ID, GIFT_ID, CARD_TITLE } from '../data/site'
import { MapPin } from 'lucide-react'

/**
 * The card: a square, 340 px, hairline-framed panel over the photograph. It has
 * no radius and no shadow — it reads as glass because of the 72 % wash plus the
 * 12 px backdrop blur, and adding either would break the look faster than a
 * colour change would.
 *
 * The four in-page destinations the bar and the CTAs point at hang off this
 * panel's parts, so no anchor has to invent a page that does not exist.
 */
export function HoursCard() {
  return (
    <aside className="tt-hours" id={MENU_ID} aria-labelledby={HOURS_TITLE_ID}>
      <h2 className="tt-hours-title" id={HOURS_TITLE_ID}>
        {CARD_TITLE}
      </h2>

      <dl className="tt-table" id={WINE_ID}>
        {HOURS.map((row) => (
          <div key={row.days}>
            <dt>{row.days}</dt>
            <dd>{row.hours}</dd>
          </div>
        ))}
      </dl>

      <p className="tt-address" id={PRIVATE_ID}>
        <MapPin size={16} aria-hidden="true" />
        <span>{CONTACT.address}</span>
      </p>

      <p className="tt-note" id={GIFT_ID}>
        {CONTACT.note}
      </p>
    </aside>
  )
}
