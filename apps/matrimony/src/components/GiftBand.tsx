import { ButtonLink } from '@free-react-templates/ui'
import { GIFT_CTA, GIFT_SUBTEXT, GIFT_TITLE, SECTION_IDS } from '../lib/site'
import { containerClass, giftCtaClass, giftSectionClass, giftSubtextClass, giftTitleClass } from '../lib/styles'

/**
 * The full-bleed scarlet damask band with the design's 70px white heading, its subtitle and the white
 * pill that carries the visitor down to the reply card. The source's label is misspelled there; the
 * recreation ships the corrected sentence.
 */
export function GiftBand() {
  return (
    <section id={SECTION_IDS.gift} className={giftSectionClass} aria-label="Gift">
      <div className={containerClass}>
        <h2 className={giftTitleClass}>{GIFT_TITLE}</h2>
        <p className={giftSubtextClass}>{GIFT_SUBTEXT}</p>
        <ButtonLink href={`#${SECTION_IDS.rsvp}`} className={giftCtaClass}>
          {GIFT_CTA}
        </ButtonLink>
      </div>
    </section>
  )
}
