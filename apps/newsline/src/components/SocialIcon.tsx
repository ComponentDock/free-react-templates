import { socialPaths, type SocialName } from '../data'

interface SocialIconProps {
  name: SocialName
  className?: string
}

/* Inline brand icon (simple-icons path data) — lucide-react removed brand
   icons, so the top-bar + footer social stacks render these directly. */
export function SocialIcon({ name, className = 'h-4 w-4' }: SocialIconProps) {
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
