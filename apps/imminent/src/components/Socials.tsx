import { cn } from '@free-react-templates/ui'
import { socialIcons } from './SocialIcon'

export interface SocialsProps {
  className?: string
}

/** Three round white discs holding grey brand glyphs, on one wrapping row. */
export function Socials({ className }: SocialsProps) {
  return (
    <div className={cn('flex flex-wrap my-[10px]', className)}>
      {socialIcons.map(({ label, Icon }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className={cn(
            'mr-[5px] my-[3px] flex h-[36px] w-[36px] items-center justify-center',
            'rounded-full bg-white text-social',
            'transition-all duration-[400ms] hover:bg-brand hover:text-white',
          )}
        >
          <Icon className="size-[18px]" />
        </a>
      ))}
    </div>
  )
}
