import { ButtonLink } from '@free-react-templates/ui'
import { GIFT_COPY, GIFT_CTA, GIFT_HEADING, GIFT_PHOTO, SECTION_IDS, photo } from '../lib/site'
import {
  giftBandClass,
  giftBodyClass,
  giftCopyClass,
  giftCtaClass,
  giftHeadingClass,
  giftOffsetClass,
  giftWashClass,
} from '../lib/styles'

/**
 * The best gift: a full-bleed photograph washed white from its lower edge, with the title, a line of
 * copy and the reply call to action offset one column from the left. The button uncovers a deeper
 * magenta from its baseline on hover and on keyboard focus.
 */
export function Gift() {
  return (
    <section
      id={SECTION_IDS.gift}
      className={giftBandClass}
      aria-label={GIFT_HEADING}
      style={{ backgroundImage: `url(${photo(GIFT_PHOTO, 1920, 1200)})` }}
    >
      <span className={giftWashClass} aria-hidden="true" />

      <div className={giftBodyClass}>
        <div className={giftOffsetClass}>
          <h2 className={giftHeadingClass}>{GIFT_HEADING}</h2>
          <p className={giftCopyClass}>{GIFT_COPY}</p>
          <ButtonLink href={`#${SECTION_IDS.guestBook}`} className={giftCtaClass}>
            <span className="relative z-[1]">{GIFT_CTA}</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
