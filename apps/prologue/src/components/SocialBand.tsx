import { cn } from '@free-react-templates/ui'
import { SOCIAL_BRANDS, SocialLink, type SocialBrand } from './SocialLink'

export interface SocialBandProps {
  /** The marks to ring — defaults to the three the design ships. */
  brands?: readonly SocialBrand[]
  className?: string
}

/**
 * The panel's bottom edge: an upper-case caption followed by the three ringed
 * social marks, aligned on their centres and wrapping if the panel narrows.
 */
export function SocialBand({ brands = SOCIAL_BRANDS, className }: SocialBandProps) {
  return (
    <div data-testid="social-band" className={cn('flex flex-wrap items-center', className)}>
      <span
        data-testid="social-caption"
        className="pr-[40px] font-sans text-[16px] leading-[1.2] text-subline uppercase"
      >
        Keep in touch
      </span>

      {brands.map(({ label, href, Icon }) => (
        <SocialLink key={label} label={label} href={href} Icon={Icon} />
      ))}
    </div>
  )
}
