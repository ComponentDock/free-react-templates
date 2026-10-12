import { cn } from '@free-react-templates/ui'
import { SOCIAL_LINKS, type SocialLink } from './SocialIcon'

export interface SocialRowProps {
  /** The marks to show — defaults to the three the design ships. */
  links?: readonly SocialLink[]
  className?: string
}

/**
 * Three 36×36 circles on the bottom bar's left edge: translucent 10%-white
 * rings around muted 18px glyphs, each with 3px of breathing room, and each
 * filling white with a near-black glyph on hover.
 */
export function SocialRow({ links = SOCIAL_LINKS, className }: SocialRowProps) {
  return (
    <div
      data-testid="social-row"
      className={cn('my-[10px] flex flex-wrap items-center', className)}
    >
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          data-testid={`social-${label.toLowerCase()}`}
          className={cn(
            'm-[3px] flex size-9 items-center justify-center rounded-full',
            'border border-white/10 bg-transparent text-muted',
            'transition-all duration-[400ms] hover:bg-white hover:text-hover-ink',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
          )}
        >
          <Icon className="size-[18px]" />
        </a>
      ))}
    </div>
  )
}
