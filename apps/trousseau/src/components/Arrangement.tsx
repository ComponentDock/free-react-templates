import { ARRANGEMENT, ARRANGEMENT_HEADING, ARRANGEMENT_INTRO, photo, SECTION_IDS } from '../lib/site'
import {
  arrangementBodyClass,
  arrangementCardClass,
  arrangementGridClass,
  arrangementPhotoClass,
  arrangementTitleClass,
  containerClass,
  dateBlockClass,
  dateLineClass,
  dateTermClass,
  sectionClass,
} from '../lib/styles'
import { cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

/**
 * The running order of the day: four white cards, each a photograph over a title, a line of copy and
 * the date, time and address it happens at.
 */
export function Arrangement() {
  return (
    <section id={SECTION_IDS.accomodation} className={sectionClass} aria-label="Arrangement in progress">
      <div className={containerClass}>
        <SectionTitle heading={ARRANGEMENT_HEADING} intro={ARRANGEMENT_INTRO} />

        <div className={arrangementGridClass}>
          {ARRANGEMENT.map((item) => (
            <article key={item.title} className={arrangementCardClass}>
              <img
                src={photo(item.photo, 640, 420)}
                alt={item.alt}
                className={arrangementPhotoClass}
                loading="lazy"
              />
              <div className={arrangementBodyClass}>
                <h4 className={arrangementTitleClass}>{item.title}</h4>
                <p>{item.blurb}</p>
                <dl className={dateBlockClass}>
                  <dt className={cn(dateLineClass, dateTermClass)}>Date</dt>
                  <dd className={dateLineClass}>{item.date}</dd>
                  <dt className={cn(dateLineClass, dateTermClass)}>Time</dt>
                  <dd className={dateLineClass}>{item.time}</dd>
                  <dt className={cn(dateLineClass, dateTermClass)}>Address</dt>
                  <dd className={dateLineClass}>{item.address}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
