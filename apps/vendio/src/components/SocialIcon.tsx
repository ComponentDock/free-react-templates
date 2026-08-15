import type { SocialLink } from '../data'
import { cn } from '@free-react-templates/ui'

interface SocialIconProps {
  link: SocialLink
  className?: string
}

export function SocialIcon({ link, className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn('h-[17px] w-[17px]', className)}
    >
      <path d={link.path} />
    </svg>
  )
}
