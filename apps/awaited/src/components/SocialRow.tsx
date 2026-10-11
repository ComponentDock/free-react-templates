import { cn } from '@free-react-templates/ui'
import { SOCIAL_LINKS, type SocialLink } from './SocialIcon'

export interface SocialRowProps {
  /** The marks to show — defaults to the three the design ships. */
  links?: readonly SocialLink[]
  className?: string
}

/** Three 36×36 white-outlined discs, transparent with white glyphs. */
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
            'mx-[3px] mb-[5px] flex size-9 items-center justify-center rounded-full',
            'border border-white bg-transparent text-white transition-all duration-[400ms]',
            'hover:bg-white hover:text-disc-hover focus-visible:outline-none',
          )}
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  )
}
