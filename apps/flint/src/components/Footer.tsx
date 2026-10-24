import { contact, footerColumns, socials } from '../data'
import { SocialIcon } from './SocialIcons'

/* Pale-grey footer band: about + socials, two link columns, contact details,
   and the Component Dock credit line. */
export function Footer() {
  return (
    <footer id="contact" className="bg-band py-20 text-sm text-footer-text">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-10">
              <h3 className="mb-6 font-display text-base font-bold text-ink">
                About Flint<span className="text-brand">.</span>
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
            <div>
              <h3 className="mb-6 font-display text-base font-bold text-ink">Connect</h3>
              <ul className="flex flex-wrap items-center gap-4">
                {socials.map((name) => (
                  <li key={name}>
                    <a
                      href="#contact"
                      aria-label={name}
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-footer-link text-white transition-colors hover:bg-brand-light"
                    >
                      <SocialIcon name={name} className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3 className="mb-6 font-display text-base font-bold text-ink">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link}`}>
                    <a
                      href="#contact"
                      className="text-footer-link transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-display text-base font-bold text-ink">Contact</h3>
            <address className="not-italic">{contact.address}</address>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-footer-link transition-colors hover:text-brand"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-footer-link transition-colors hover:text-brand"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p>
            &copy; {new Date().getFullYear()} Flint. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-brand-light"
            >
              Component Dock
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
