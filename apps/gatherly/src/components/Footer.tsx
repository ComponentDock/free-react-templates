import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, footer } from '../data'
import { socialLinks } from './social-icons'

/** Dark charcoal (#232931) footer with four widget columns — brand + about,
 *  section links, "Have a Questions?" contact details and social icons —
 *  plus a bottom copyright bar crediting Component Dock (source
 *  footer.ftco-footer). */
export function Footer() {
  return (
    <footer data-testid="footer" className="bg-footer py-16 text-white/70 md:py-[5em]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home-section" className="text-2xl font-black tracking-tight text-white">
            {brand.name}
            <span className="text-accent">.</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">{footer.blurb}</p>
        </div>

        <nav aria-label="Links">
          <h3 className="text-lg font-bold text-white">{footer.linksTitle}</h3>
          <ul className="mt-6 space-y-3">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-lg font-bold text-white">{footer.questionTitle}</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{footer.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{footer.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{footer.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Follow Us</h3>
          <ul className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1240px] px-4">
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | Made with ♥ by {brand.name}{' '}
            · More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-accent transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
