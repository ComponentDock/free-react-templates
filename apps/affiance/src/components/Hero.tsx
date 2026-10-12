import { cn } from '@free-react-templates/ui'
import { COUPLE, HERO_TAGLINE, photo, SECTION_IDS } from '../lib/site'
import {
  containerClass,
  heroBadgeClass,
  heroBadgeGlyphClass,
  heroBadgeRingClass,
  heroBandClass,
  heroClass,
  heroContentClass,
  heroNamesClass,
  heroPhotoClass,
  heroScrimClass,
  heroTaglineClass,
} from '../lib/styles'
import { RingsBadge } from './RingsBadge'

/**
 * The hero: the couple's photograph full-bleed under the design's dark scrim, with the 120px
 * brand-pink disc centred above the names, the names in the script face, and the white pill carrying
 * the letter-spaced tagline underneath.
 */
export function Hero() {
  return (
    <section id={SECTION_IDS.home} className={heroClass} aria-label="The wedding day">
      <div
        data-testid="hero-photo"
        className={heroPhotoClass}
        style={{ backgroundImage: `url(${photo('affiance-49', 1920, 1080)})` }}
      />
      <div className={heroScrimClass} aria-hidden="true" />
      <div className={cn(containerClass, heroContentClass)}>
        <div className={heroBandClass}>
          <div className={heroBadgeClass}>
            <span className={heroBadgeRingClass} aria-hidden="true" />
            <RingsBadge className={heroBadgeGlyphClass} />
          </div>
          <h1 className={heroNamesClass}>{COUPLE}</h1>
          <p className={heroTaglineClass}>{HERO_TAGLINE}</p>
        </div>
      </div>
    </section>
  )
}
