import { Mail, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CONTACT, SOCIALS } from '../lib/site'
import { containerClass } from '../lib/styles'
import { SocialIcon } from './SocialIcon'

/**
 * The utility bar above the nav row: the mail and phone targets on the left, four
 * social glyphs on the right, and the page's only divider — a 1px white hairline
 * at 40% — closing it. Everything is white because the whole header sits on the
 * photograph.
 *
 * The two text labels drop below 768px while both glyphs and all four socials
 * stay, which is the source's own two-breakpoint shape: the labels are a wider
 * convenience, the glyphs are the bar. Every target is real — `mailto:`, `tel:`
 * and outbound socials — so the bar carries no dead link.
 */
export function TopBar() {
  return (
    <div data-testid="top-bar" className="border-b border-hairline">
      <div className={cn(containerClass, 'flex items-center justify-between py-4 text-[0.8rem]')}>
        <div className="flex items-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className="mr-6 flex items-center text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail aria-hidden="true" size={14} className="shrink-0" />
            <span className="ml-2 hidden md:inline-block">{CONTACT.email}</span>
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Phone aria-hidden="true" size={14} className="shrink-0" />
            <span className="ml-2 hidden md:inline-block">{CONTACT.phoneLabel}</span>
          </a>
        </div>
        <ul data-testid="top-bar-socials" className="m-0 flex list-none items-center p-0">
          {SOCIALS.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="block p-2 text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <SocialIcon name={social.name} width={14} height={14} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
