import {
  COUPLE_FIRST,
  COUPLE_SECOND,
  HERO_EYEBROW,
  HERO_PHOTO,
  HERO_TAGLINE,
  SECTION_IDS,
} from '../lib/site'
import {
  containerClass,
  heroCaptionClass,
  heroClass,
  heroEyebrowClass,
  heroEyebrowMarkClass,
  heroLaurelClass,
  heroNamesClass,
  heroPhotoClass,
  heroScrimClass,
  heroTaglineClass,
} from '../lib/styles'
import { Flourish } from './Flourish'

/**
 * The page's opening band: a full-bleed photograph of the couple under the design's very light
 * `rgba(0,0,0,0.1)` wash, with the caption left-aligned in the first two thirds of the container — the
 * date in tracked-out uppercase, the names in 99px Playfair Display with the laurel between them, and
 * the line beneath. The design runs two identical slides through a carousel; one static slide shows
 * the same first paint without a carousel bundle.
 */
export function Hero() {
  return (
    <section id={SECTION_IDS.home} className={heroClass} aria-label="The couple">
      <div
        data-testid="hero-photo"
        className={heroPhotoClass}
        style={{ backgroundImage: `url(${HERO_PHOTO})` }}
      />
      <span className={heroScrimClass} aria-hidden="true" />
      <div className={containerClass}>
        <div className={heroCaptionClass}>
          <p className={heroEyebrowClass}>
            <Flourish variant="eyebrow" className={heroEyebrowMarkClass} />
            {HERO_EYEBROW}
          </p>
          <h1 className={heroNamesClass}>
            {COUPLE_FIRST} <Flourish variant="laurel" className={heroLaurelClass} /> {COUPLE_SECOND}
          </h1>
          <p className={heroTaglineClass}>{HERO_TAGLINE}</p>
        </div>
      </div>
    </section>
  )
}
