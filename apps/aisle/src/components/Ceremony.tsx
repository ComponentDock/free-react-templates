import { CEREMONY_BODY, CEREMONY_CTA_HREF, CEREMONY_CTA_LABEL, CEREMONY_PHOTO, CEREMONY_TITLE, SECTION_IDS } from '../lib/site'
import { prefersReducedMotion } from '../lib/motion'
import {
  ceremonyBodyClass,
  ceremonyCtaClass,
  ceremonyFillClass,
  ceremonyScrimClass,
  ceremonySectionClass,
  containerClass,
} from '../lib/styles'
import { BandHeading } from './BandHeading'

/**
 * The design's second photograph band, this time as a call to action: the white script heading, a
 * white supporting line, and the small-caps link whose rose underline slides in from the left on
 * hover or focus — it simply sits under the label when the visitor has asked for less movement.
 */
export function Ceremony() {
  const animate = !prefersReducedMotion()

  return (
    <section
      id={SECTION_IDS.ceremony}
      className={ceremonySectionClass}
      style={{ backgroundImage: `url(${CEREMONY_PHOTO})` }}
    >
      <span className={ceremonyScrimClass} aria-hidden="true" />
      <div className={containerClass}>
        <BandHeading title={CEREMONY_TITLE} light />
        <p className={`${ceremonyBodyClass} text-center`}>{CEREMONY_BODY}</p>
        <p className="mt-[15px] text-center">
          <a href={CEREMONY_CTA_HREF} className={ceremonyCtaClass}>
            {CEREMONY_CTA_LABEL}
            <span className={ceremonyFillClass(animate)} aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  )
}
