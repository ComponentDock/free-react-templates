import { socialLinks } from '../data'
import { cn } from '@free-react-templates/ui'

interface SocialIconsProps {
  /** Reveal on group-hover (desktop) instead of always visible (blog rows). */
  hoverReveal?: boolean
}

export function SocialIcons({ hoverReveal = false }: SocialIconsProps) {
  return (
    <div
      className={cn(
        'mt-4 flex gap-4 transition-opacity duration-300',
        hoverReveal ? 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100' : 'opacity-100',
      )}
    >
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href="#top"
          aria-label={social.label}
          className="text-black/40 transition-colors hover:text-brand"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
