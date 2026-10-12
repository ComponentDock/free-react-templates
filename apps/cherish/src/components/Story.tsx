import { SocialGlyph } from './social-icons'
import { Ornament } from './ornament'
import { TitleBlock } from './title-block'
import {
  PARTNERS,
  PARTNER_SOCIALS,
  STORY_BODY,
  STORY_EYEBROW,
  STORY_HEADING,
  STORY_PORTRAIT,
  type PartnerModel,
} from '../lib/site'
import {
  containerClass,
  partnerBioClass,
  partnerCardClass,
  partnerNameClass,
  partnerSocialsClass,
  portraitCellClass,
  portraitClass,
  sectionAnchorStyle,
  sectionClass,
  socialGlyphClass,
  socialLinkClass,
  storyRowClass,
} from '../lib/styles'

/** One of the two, with the three links the design gives them. */
function PartnerCard({ partner }: { partner: PartnerModel }) {
  return (
    <div className={partnerCardClass} data-testid="partner">
      <h3 className={partnerNameClass}>{partner.name}</h3>
      <Ornament className="mx-auto mb-3 h-[14px] w-[92px] text-brand" />
      <p className={partnerBioClass}>{partner.bio}</p>
      <ul className={partnerSocialsClass} data-testid="partner-socials">
        {PARTNER_SOCIALS.map((social) => (
          <li key={social.kind}>
            <a href={social.href} aria-label={social.label} className={socialLinkClass}>
              <SocialGlyph kind={social.kind} className={socialGlyphClass} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** The save-the-date block: the title, then the two of them either side of the round portrait. */
export function Story() {
  return (
    <section
      id="tale"
      data-testid="tale"
      aria-labelledby="tale-heading"
      className={sectionClass}
      style={sectionAnchorStyle}
    >
      <div className={containerClass}>
        <TitleBlock
          eyebrow={STORY_EYEBROW}
          heading={STORY_HEADING}
          headingId="tale-heading"
          lead={STORY_BODY}
          className="max-w-[58ch]"
        />

        <div className={storyRowClass} data-testid="story-row">
          <PartnerCard partner={PARTNERS[0]} />

          <div className={portraitCellClass}>
            <img src={STORY_PORTRAIT} alt="The two of them, photographed together" className={portraitClass} loading="lazy" />
          </div>

          <PartnerCard partner={PARTNERS[1]} />
        </div>
      </div>
    </section>
  )
}
