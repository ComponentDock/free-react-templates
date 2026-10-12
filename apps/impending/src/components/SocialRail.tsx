import { cn } from '@free-react-templates/ui'
import { SOCIAL_LINKS, type SocialLink } from './SocialIcon'

export interface SocialRailProps {
  /** The marks to show — defaults to the three the design ships. */
  links?: readonly SocialLink[]
  className?: string
}

/**
 * Three bare 36×36 boxes stacked down the LEFT edge and dropped 470px from the
 * top of the row. They carry no border and no radius — the square look in the
 * design comes from the glyphs themselves. At ≤992px the rail becomes a centred
 * horizontal row below the copy.
 */
export function SocialRail({ links = SOCIAL_LINKS, className }: SocialRailProps) {
  return (
    <div
      data-testid="social-rail"
      className={cn(
        'flex flex-col flex-wrap pt-[470px]',
        'max-[992px]:flex-row max-[992px]:justify-center max-[992px]:pt-[100px] max-[992px]:pb-[30px]',
        className,
      )}
    >
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={cn(
            'mx-[3px] mb-[5px] flex size-9 items-center justify-center',
            'bg-transparent text-white transition-all duration-[400ms] hover:text-white/20',
            'focus-visible:outline-none',
          )}
        >
          <Icon className="size-[28px]" />
        </a>
      ))}
    </div>
  )
}
