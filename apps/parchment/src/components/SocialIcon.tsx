import { socialIcons, type SocialName } from '../data'

interface SocialIconProps {
  name: SocialName
  className?: string
}

/* Inline brand icon — lucide-react removed brand icons, so the social
   stacks render simple-icons / Font Awesome path data directly. */
export function SocialIcon({ name, className = 'h-5 w-5' }: SocialIconProps) {
  const icon = socialIcons[name]
  return (
    <svg
      viewBox={icon.viewBox}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  )
}
