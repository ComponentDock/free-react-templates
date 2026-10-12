import { ButtonLink } from '@free-react-templates/ui'
import { Ornament } from './ornament'
import { HERO_CTA, HERO_DATE, HERO_LEAD, HERO_NAMES, HERO_PHOTO, SEAT_TARGET } from '../lib/site'
import {
  brandButtonClass,
  containerClass,
  heroClass,
  heroDateClass,
  heroLeadClass,
  heroNamesClass,
  heroScrimClass,
  heroTextClass,
  ornamentClass,
  sectionAnchorStyle,
} from '../lib/styles'

/** The hero: the day's own date, the two names and the one gold button, over a full-bleed
 * photograph held back by the section's own scrim. */
export function Hero() {
  return (
    <section
      id="today"
      data-testid="hero"
      aria-labelledby="today-heading"
      className={heroClass}
      style={{ ...sectionAnchorStyle, backgroundImage: `url(${HERO_PHOTO})` }}
    >
      <div className={heroScrimClass} aria-hidden="true" data-testid="hero-scrim" />
      <div className={`${containerClass} relative`}>
        <div className={heroTextClass}>
          <p className={heroDateClass}>{HERO_DATE}</p>
          <h1 id="today-heading" className={heroNamesClass}>
            {HERO_NAMES}
          </h1>
          <Ornament className={ornamentClass} />
          <p className={heroLeadClass}>{HERO_LEAD}</p>
          <ButtonLink href={SEAT_TARGET} variant="primary" className={brandButtonClass}>
            {HERO_CTA}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
