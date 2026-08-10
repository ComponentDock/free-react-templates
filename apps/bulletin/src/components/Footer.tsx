import { Heart } from 'lucide-react'
import { brandEnd, brandStart, copyrightText, footerNavLinks, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** White footer: centered two-tone logo over a 2px hairline, footer nav
    links, social icons and a pale copyright bar (reference: .footer-area). */
export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 text-center">
        <a href="#top" className="inline-block text-2xl font-extrabold tracking-wide uppercase">
          <span className="text-accent">{brandStart}</span>
          <span className="text-ink">{brandEnd}</span>
        </a>
      </div>

      <div className="border-t-2 border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 md:flex-row">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {footerNavLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="text-sm font-medium text-inklight transition-colors hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex items-center gap-x-5 text-inklight">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#social"
                  aria-label={social.label}
                  className="transition-colors hover:text-accent"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-pale">
          Copyright © 2026 {copyrightText}{' '}
          <Heart className="inline h-3 w-3 text-accent" aria-hidden="true" />
        </p>
      </div>
    </footer>
  )
}
