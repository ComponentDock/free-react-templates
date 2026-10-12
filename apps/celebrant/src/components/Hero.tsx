import { HERO_LABEL, HERO_PHOTO, SECTION_IDS } from '../lib/site'
import { heroBandClass, heroContainerClass, heroPhotoClass, heroSectionClass } from '../lib/styles'

/**
 * The design's cover: a full-height photograph of the day, cleared by 120px under the header, with
 * the signature mint band starting a third of the way down and sliding out past its right edge.
 * There is no caption, no subtext and no button — the photograph carries the band on its own.
 */
export function Hero() {
  return (
    <section id={SECTION_IDS.home} aria-label={HERO_LABEL} className={heroSectionClass}>
      <div className={heroContainerClass}>
        <div data-testid="hero-band" aria-hidden="true" className={heroBandClass} />
        <div
          data-testid="hero-photo"
          aria-hidden="true"
          className={heroPhotoClass}
          style={{ backgroundImage: `url(${HERO_PHOTO})` }}
        />
      </div>
    </section>
  )
}
