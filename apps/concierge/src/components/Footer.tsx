import { contactDetails, footerLinkGroups, socials } from '../data'
import { socialIcons } from './icons'

/**
 * Light footer (reference: .site-footer) with three link widgets, a contact
 * column, a Connect row of teal social circles, and a copyright bar that
 * links to Component Dock (replaces the source's attribution line).
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label="Footer" className="bg-light-bg pb-10 pt-[70px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="lg:col-span-3">
              <h3 className="mb-5 text-base font-bold text-ink">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm text-black/50 transition-colors hover:text-ink hover:underline hover:decoration-brand hover:underline-offset-4"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-ink">Contact</h3>
            <ul className="space-y-2 text-sm text-black/50">
              <li>{contactDetails.address}</li>
              {contactDetails.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                    className="transition-colors hover:text-ink"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {contactDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6">
          <h3 className="mb-4 text-base font-bold text-ink">Connect</h3>
          <ul className="flex gap-3">
            {socials.map((name) => {
              const Icon = socialIcons[name]
              return (
                <li key={name}>
                  <a
                    href="#"
                    aria-label={name}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand text-black transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
          <p className="mt-6 text-sm text-black/50">
            © {year} Concierge — All rights reserved · More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
