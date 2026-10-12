import {
  ATTENDANTS,
  GROOMSMEN,
  JOURNEY_CARDS,
  JOURNEY_HEADING,
  JOURNEY_INTRO,
  photo,
  SECTION_IDS,
  type JourneyPerson,
} from '../lib/site'
import {
  avatarClass,
  circleRowClass,
  containerClass,
  cornerClass,
  journeyCardClass,
  journeyCardTitleClass,
  journeyCardsClass,
  personClass,
  personNameClass,
  personRoleClass,
  sectionClass,
} from '../lib/styles'
import { Ornament } from './Ornament'
import { SectionTitle } from './SectionTitle'

function Person({ name, role, photo: seed }: JourneyPerson) {
  return (
    <div className={personClass}>
      <img
        src={photo(seed, 400, 400)}
        alt={`${name}, ${role}`}
        className={avatarClass}
        loading="lazy"
      />
      <h4 className={personNameClass}>{name}</h4>
      <p className={personRoleClass}>{role}</p>
    </div>
  )
}

/**
 * The journey band: the two rows of circular portraits — the party on either side — wrapped around
 * the four written cards, each of which carries a flourish in one of its two lower corners.
 */
export function Journey() {
  return (
    <section id={SECTION_IDS.journey} className={sectionClass} aria-label="Our love journey">
      <div className={containerClass}>
        <SectionTitle heading={JOURNEY_HEADING} intro={JOURNEY_INTRO} />

        <div id={SECTION_IDS.attendants} className={circleRowClass}>
          {ATTENDANTS.map((person) => (
            <Person key={person.name} {...person} />
          ))}
        </div>

        <div className={journeyCardsClass}>
          {JOURNEY_CARDS.map((card) => (
            <article key={card.title} className={journeyCardClass}>
              <Ornament className={cornerClass(card.corner)} />
              <h4 className={journeyCardTitleClass}>{card.title}</h4>
              <p>{card.blurb}</p>
            </article>
          ))}
        </div>

        <div id={SECTION_IDS.groomsmen} className={circleRowClass}>
          {GROOMSMEN.map((person) => (
            <Person key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  )
}
