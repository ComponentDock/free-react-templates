import { ATTENDANTS, photo, SECTION_IDS } from '../lib/site'
import {
  attendantClass,
  attendantNameClass,
  attendantPhotoClass,
  attendantRoleClass,
  containerClass,
  peopleGridClass,
  sectionClass,
} from '../lib/styles'
import { SectionHeading } from './SectionHeading'

/** Family & friends: the eight attendants as circular portraits with their name and their side. */
export function FamilyFriends() {
  return (
    <section id={SECTION_IDS.people} className={sectionClass} aria-label="Bridesmaid and groomsmen">
      <div className={containerClass}>
        <SectionHeading subheading="Bridesmaid & Groomsmen" title="Family & Friends" />
        <ul className={peopleGridClass}>
          {ATTENDANTS.map((person) => (
            <li key={person.name} className={attendantClass}>
              <img className={attendantPhotoClass} src={photo(person.photo, 300, 300)} alt={person.alt} />
              <h3 className={attendantNameClass}>{person.name}</h3>
              <span className={attendantRoleClass}>{person.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
