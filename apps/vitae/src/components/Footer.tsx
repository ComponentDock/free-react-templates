import { brand, footer } from '../data'
import { socialLinks } from './social-icons'

/** Light #f8f9fa footer: address column, three mini link lists (Services,
 *  Resources, Links), a "Follow Me" column with five PLAIN social icons,
 *  and a centered copyright strip re-branded to Vitae. */
export function Footer() {
  return (
    <footer data-testid="footer" className="bg-light text-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-[2.5em] md:grid-cols-2 md:py-[7em] lg:grid-cols-4">
        <div>
          <h4 className="mb-8 text-lg text-ink">{footer.addressTitle}</h4>
          <p className="text-muted">{footer.address}</p>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.heading} aria-label={`Footer ${column.heading}`}>
            <h4 className="mb-8 text-lg text-ink">{column.heading}</h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h4 className="mb-8 text-lg text-ink">{footer.follow}</h4>
          <ul className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-muted transition-colors hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-muted">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with
            ♥ by {brand.name} · More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-ink underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
