import { cn } from '@free-react-templates/ui'
import { BRAND, COMPONENT_DOCK, SOCIALS } from '../content'

/** Visible on first Tab, jumps the fixed-height hero. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-[4px] focus:bg-white focus:px-4 focus:py-2 focus:text-[16px] focus:font-black focus:text-brand"
    >
      Skip to content
    </a>
  )
}

/**
 * The five brand glyphs. Brand marks are inline SVG paths (the icon set ships
 * no brand icons), each labelled for screen readers and pointing at the
 * marketplace rather than at a dead `#`.
 */
export function SocialRail({
  className,
  size = 18,
}: {
  readonly className?: string
  readonly size?: number
}) {
  return (
    <ul className={cn('flex items-center gap-[26px] lg:gap-[42px]', className)}>
      {SOCIALS.map((social) => (
        <li key={social.label}>
          <a
            href={COMPONENT_DOCK}
            aria-label={`${BRAND} on ${social.label}`}
            rel="noopener noreferrer"
            target="_blank"
            className="block text-white transition-opacity hover:opacity-70"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: size, height: size }}
            >
              <path d={social.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
