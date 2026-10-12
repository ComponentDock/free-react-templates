import { cn } from '@free-react-templates/ui'
import { SOCIAL_LINKS, type SocialLink } from './SocialIcon'

export interface SocialRowProps {
  /** The marks to show — defaults to the three the design ships. */
  links?: readonly SocialLink[]
  className?: string
}

/**
 * Three 36×36 circles centred on the bottom edge of the page: a 1px white
 * outline, a transparent fill and an 18px white glyph. Hovering inverts one to a
 * solid white disc with a `#555` glyph, so the outline reads as a fill.
 */
export function SocialRow({ links = SOCIAL_LINKS, className }: SocialRowProps) {
  return (
    <div
      data-testid="social-row"
      className={cn('flex flex-wrap items-center justify-center pb-[35px]', className)}
    >
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={cn(
            'mx-[3px] mb-[5px] flex size-9 items-center justify-center rounded-full border border-white',
            'bg-transparent text-social-glyph transition-all duration-[400ms]',
            'hover:bg-white hover:text-social-glyph-hover focus-visible:outline-none',
          )}
        >
          <Icon className="size-[18px]" />
        </a>
      ))}
    </div>
  )
}
