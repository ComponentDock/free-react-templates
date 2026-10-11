import type { ComponentType } from 'react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, TwitterIcon, YoutubeIcon, type BrandIconProps } from './BrandIcons'

interface Social {
  label: string
  href: string
  background: string
  Icon: ComponentType<BrandIconProps>
}

const SOCIALS: ReadonlyArray<Social> = [
  { label: 'Facebook', href: '#', background: 'bg-facebook', Icon: FacebookIcon },
  { label: 'Twitter', href: '#', background: 'bg-twitter', Icon: TwitterIcon },
  { label: 'YouTube', href: '#', background: 'bg-youtube', Icon: YoutubeIcon },
]

export interface SocialsProps {
  className?: string
}

export function Socials({ className }: SocialsProps) {
  return (
    <ul className={cn('flex flex-wrap items-center', className)}>
      {SOCIALS.map(({ label, href, background, Icon }) => (
        <li key={label} className="mr-[5px]">
          <a
            href={href}
            aria-label={label}
            className={cn(
              'flex size-9 items-center justify-center rounded-full text-white',
              'transition-all duration-[400ms] hover:bg-brand-hover',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-hover/40',
              background,
            )}
          >
            <Icon className="size-[22px]" />
          </a>
        </li>
      ))}
    </ul>
  )
}
