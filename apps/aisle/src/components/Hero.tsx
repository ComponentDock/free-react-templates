import { Gem, Heart } from 'lucide-react'
import { HERO_DATE, HERO_INVITE, HERO_LABEL, HERO_NAMES, HERO_PHOTO, HERO_PHOTO_ALT, HERO_SCRIPT, SECTION_IDS } from '../lib/site'
import {
  heroCaptionClass,
  heroDateClass,
  heroGlyphClass,
  heroHeartClass,
  heroInviteClass,
  heroNamesClass,
  heroPhotoClass,
  heroScrimClass,
  heroScriptClass,
  heroSectionClass,
} from '../lib/styles'

/**
 * The design's full-viewport cover: the photograph fills the first screen, a `rgba(0,0,0,.3)` scrim
 * sits over it, the bar floats over the top, and the caption is centred in the middle — the tie
 * glyph, the tracked date, the script line and the two names at 80px with the rose heart between
 * them. The photograph is the app's own placeholder and carries its own description.
 */
export function Hero() {
  return (
    <section
      id={SECTION_IDS.home}
      className={heroSectionClass}
      aria-label={HERO_LABEL}
      role="region"
    >
      <img className={heroPhotoClass} src={HERO_PHOTO} alt={HERO_PHOTO_ALT} />
      <span className={heroScrimClass} aria-hidden="true" />

      <div className={heroCaptionClass}>
        <Gem className={heroGlyphClass} aria-hidden="true" />
        <p className={heroDateClass}>{HERO_DATE}</p>
        <p className={heroScriptClass}>{HERO_SCRIPT}</p>
        <h1 className={heroNamesClass}>
          {HERO_NAMES[0]}
          <Heart className={heroHeartClass} aria-hidden="true" />
          {HERO_NAMES[1]}
        </h1>
        <p className={heroInviteClass}>{HERO_INVITE}</p>
      </div>
    </section>
  )
}
