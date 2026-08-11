import { socialLinks } from '../data'
import { cn } from '@free-react-templates/ui'

interface SocialIconsProps {
  /** Brand names to render, in display order (subset of `socialLinks`). */
  names: readonly string[]
  className?: string
}

export function SocialIcons({ names, className }: SocialIconsProps) {
  const links = socialLinks.filter((social) => names.includes(social.name))
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {links.map((social) => (
        <a
          key={social.name}
          href="#"
          aria-label={social.label}
          className="transition-opacity hover:opacity-70"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
