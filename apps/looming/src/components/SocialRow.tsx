import { cn } from '@free-react-templates/ui'
import { SOCIAL_LINKS, type SocialLink } from './SocialIcon'

export interface SocialRowProps {
  /** The marks to show — defaults to the three the design ships. */
  links?: readonly SocialLink[]
  className?: string
}

/**
 * Three filled 36×36 grey circles, left aligned on the panel's bottom edge (the
 * row deliberately has no centring): a 22px white glyph sits in each, the fill
 * darkening to near-black on hover.
 */
export function SocialRow({ links = SOCIAL_LINKS, className }: SocialRowProps) {
  return (
    <div data-testid="social-row" className={cn('flex flex-wrap', className)}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={cn(
            'mr-[15px] mb-[10px] flex size-9 items-center justify-center rounded-full',
            'bg-social text-white transition-all duration-[400ms] hover:bg-social-hover hover:text-white',
            'focus-visible:outline-none',
          )}
        >
          <Icon className="size-[22px]" />
        </a>
      ))}
    </div>
  )
}
