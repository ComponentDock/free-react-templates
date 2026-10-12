import { cn } from '@free-react-templates/ui'
import { PARTNERS, PARTNERS_HEADING, SECTION_IDS, type Partner } from '../lib/site'
import { prefersReducedMotion } from '../lib/motion'
import {
  containerClass,
  partnerGlyphClass,
  partnerMarkClass,
  partnerNameClass,
  partnersBandClass,
  partnersRowClass,
  partnersTrackClass,
} from '../lib/styles'
import { PartnerMark } from './PartnerMark'
import { SectionTitle } from './SectionTitle'

/** One row of marks. The second copy exists only to make the drift seamless, so it is hidden. */
function MarkRow({ partners, hidden }: { partners: Partner[]; hidden: boolean }) {
  return (
    <ul
      className="m-0 flex list-none p-0"
      data-testid="partners-row"
      aria-hidden={hidden ? 'true' : undefined}
    >
      {partners.map((partner) => (
        <li key={partner.name} className={partnerMarkClass} data-testid="partner-mark">
          <PartnerMark shape={partner.shape} className={partnerGlyphClass} />
          <span className={partnerNameClass}>{partner.name}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Our lovely partners: five marks drifting slowly past, five across. The row holds still while the
 * pointer is over it, and with motion unwanted it simply stands.
 */
export function Partners() {
  const canAnimate = !prefersReducedMotion()

  return (
    <section id={SECTION_IDS.partners} className={partnersBandClass} aria-label={PARTNERS_HEADING}>
      <div className={containerClass}>
        <SectionTitle heading={PARTNERS_HEADING} />
      </div>

      <div className={partnersRowClass}>
        <div className={cn(partnersTrackClass, canAnimate && 'partners-track')}>
          <MarkRow partners={PARTNERS} hidden={false} />
          <MarkRow partners={PARTNERS} hidden />
        </div>
      </div>
    </section>
  )
}
