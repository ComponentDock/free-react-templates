import { cn } from '@free-react-templates/ui'
import { SOCIALS } from '../lib/site'
import { BrandGlyph } from './BrandGlyph'

export interface SocialLinksProps {
  stuck: boolean
  /** The off-canvas panel lays the same three links out inline, at ink. */
  variant?: 'row' | 'panel'
}

/**
 * Three icon-only destinations at the end of the row — or, in the off-canvas
 * panel, the same three links at inline width. The source ships its social
 * glyphs without a name; here every control is labelled with the site it opens.
 */
export function SocialLinks({ stuck, variant = 'row' }: SocialLinksProps) {
  const panel = variant === 'panel'

  return (
    <>
      {SOCIALS.map((social) => (
        <li key={social.label} className="inline-block">
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${social.label}, opens in a new tab`}
            className={cn(
              'inline-block px-[5px] transition-colors duration-300 focus-visible:outline-2',
              panel
                ? 'py-[10px] text-ink hover:text-brand focus-visible:outline-brand'
                : cn(
                    'text-[13px] focus-visible:outline-offset-2',
                    stuck
                      ? 'text-ink hover:text-brand focus-visible:outline-brand'
                      : 'text-white/70 hover:text-white focus-visible:outline-white',
                  ),
            )}
          >
            <BrandGlyph name={social.label} className="inline-block h-[16px] w-[16px]" />
          </a>
        </li>
      ))}
    </>
  )
}
