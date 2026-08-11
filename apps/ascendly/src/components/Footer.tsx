import { BRAND, CONTACT_COLUMN, LINK_COLUMN, SOCIAL_LINKS } from '../data'
import { BrandIcon } from './BrandIcon'

/* footer — uppercase logo, a "Contact Us" column and TWO identical link
   columns (the original repeats this column — keep the duplication), a
   centered row of five brand social icons and the copyright bar. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <a
            href="#home-section"
            className="text-2xl font-black tracking-widest text-brand uppercase"
          >
            {BRAND.toUpperCase()}
          </a>

          <nav aria-label="Contact" className="text-center md:text-left">
            <h2 className="font-bold text-ink dark:text-white">{CONTACT_COLUMN.heading}</h2>
            <ul className="mt-4 space-y-2">
              {CONTACT_COLUMN.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {[0, 1].map((column) => (
            <nav
              key={column}
              aria-label={`Links ${column + 1}`}
              className="text-center md:text-left"
            >
              <ul className="space-y-2">
                {LINK_COLUMN.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-tint text-muted transition-colors hover:bg-brand hover:text-white"
            >
              <BrandIcon name={social.name} className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          © {year} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
