import { socialPaths, type SocialName } from '../data'

interface SocialIconProps {
  name: SocialName
  className?: string
}

/* Inline brand icon (simple-icons path data) — lucide-react removed brand
   icons, so the rail social stack renders these directly. */
export function SocialIcon({ name, className = 'h-5 w-5' }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={socialPaths[name]} />
    </svg>
  )
}
