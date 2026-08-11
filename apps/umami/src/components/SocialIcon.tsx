import { socialIcons, type SocialName } from '../data'

interface SocialIconProps {
  name: SocialName
  className?: string
}

/* Inline SVG brand icon (lucide-react removed brand icons). */
export function SocialIcon({ name, className }: SocialIconProps) {
  const icon = socialIcons[name]
  return (
    <svg viewBox={icon.viewBox} aria-hidden="true" fill="currentColor" className={className}>
      <path d={icon.path} />
    </svg>
  )
}
