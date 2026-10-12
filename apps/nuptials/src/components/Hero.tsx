import { ButtonLink, cn } from '@free-react-templates/ui'
import { COUPLE, HERO_CTA, HERO_EYEBROW, HERO_PHOTO, HERO_TAGLINE, SECTION_IDS } from '../lib/site'
import {
  heroCaptionClass,
  heroClass,
  heroCtaClass,
  heroEyebrowClass,
  heroPhotoClass,
  heroScrimClass,
  heroTitleClass,
  heroWashClass,
} from '../lib/styles'

/**
 * The opening frame: the couple's photograph filling the viewport, under the design's cool wash and
 * its violet gradient, with the two names set centred in white and the page's one call to action
 * sitting beneath them.
 */
export function Hero() {
  return (
    <section id={SECTION_IDS.home} className={heroClass} aria-label="The wedding of Elias and Wren">
      <div
        className={heroPhotoClass}
        style={{ backgroundImage: `url(${HERO_PHOTO})` }}
        aria-hidden="true"
      />
      <span className={heroScrimClass} aria-hidden="true" />
      <span className={heroWashClass} aria-hidden="true" />

      <div className={heroCaptionClass}>
        <p className={heroEyebrowClass}>{HERO_EYEBROW}</p>
        <h1 className={heroTitleClass}>
          {COUPLE} {HERO_TAGLINE}
        </h1>
        <ButtonLink
          href={`#${SECTION_IDS.reservation}`}
          className={cn(heroCtaClass, 'brand-gradient hover:brand-gradient')}
        >
          {HERO_CTA}
        </ButtonLink>
      </div>
    </section>
  )
}
