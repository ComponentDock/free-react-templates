import { cn } from '@free-react-templates/ui'
import { socialIcons } from './SocialIcon'

export interface SocialsProps {
  className?: string
}

/** Three square white-outlined social buttons, transparent with white glyphs. */
export function Socials({ className }: SocialsProps) {
  return (
    <div className={cn('flex flex-wrap my-[10px]', className)}>
      {socialIcons.map(({ label, Icon }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className={cn(
            'mr-[6px] flex h-[36px] w-[36px] items-center justify-center',
            'rounded-social border-2 border-white bg-transparent text-white',
            'transition-all duration-[400ms] hover:bg-brand',
          )}
        >
          <Icon className="h-[22px] w-[22px]" />
        </a>
      ))}
    </div>
  )
}
