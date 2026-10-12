import { CalendarHeart } from 'lucide-react'
import { DATE_NOTE, DATE_TEXT, SECTION_IDS } from '../lib/site'
import {
  containerClass,
  dateIconClass,
  dateNoteClass,
  dateRowClass,
  dateSectionClass,
  dateTextClass,
} from '../lib/styles'

/** The one-line band that carries the day: the date, the hour, and where to be before it. */
export function DateStrip() {
  return (
    <section id={SECTION_IDS.date} className={dateSectionClass} aria-label="The wedding day">
      <div className={containerClass}>
        <div className={dateRowClass}>
          <CalendarHeart aria-hidden="true" className={dateIconClass} />
          <h2 className={dateTextClass}>{DATE_TEXT}</h2>
          <p className={dateNoteClass}>{DATE_NOTE}</p>
        </div>
      </div>
    </section>
  )
}
