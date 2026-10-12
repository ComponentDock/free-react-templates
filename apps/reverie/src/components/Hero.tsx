import { Flower2 } from 'lucide-react'
import { HERO_EYEBROW, HERO_LEAD, HERO_PHOTO, HERO_TITLE, SECTION_IDS } from '../lib/site'
import {
  heroClass,
  heroEyebrowClass,
  heroLeadClass,
  heroMarkClass,
  heroPhotoClass,
  heroScrimClass,
  heroTextClass,
  heroTitleClass,
} from '../lib/styles'

/**
 * The cover: a full-bleed photograph whose bottom edge curves away, a soft scrim so the white type
 * holds over any frame, and the design's three registers — the ornament, the welcome line and the
 * serif headline. No button lives here, matching the reference.
 */
export function Hero() {
  return (
    <section id={SECTION_IDS.home} className={heroClass}>
      <img
        className={heroPhotoClass}
        src={HERO_PHOTO}
        alt=""
        width={1920}
        height={1080}
        aria-hidden="true"
      />
      <span className={heroScrimClass} aria-hidden="true" />

      <div className={heroTextClass}>
        <Flower2 className={heroMarkClass} aria-hidden="true" />
        <h5 className={heroEyebrowClass}>{HERO_EYEBROW}</h5>
        <h1 className={heroTitleClass}>{HERO_TITLE}</h1>
        <p className={heroLeadClass}>{HERO_LEAD}</p>
      </div>
    </section>
  )
}
