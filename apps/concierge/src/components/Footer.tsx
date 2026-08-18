import { FOOTER } from '../data'
import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  XIcon,
} from './icons'

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'X', Icon: XIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Pinterest', Icon: PinterestIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
] as const

/** Footer — light #f8f9fa with three link widgets, a contact column
    (address, phones, email) with the Connect socials inside it, and a
    copyright bar linking to Component Dock (mandatory). */
export function Footer() {
  return (
    <footer className="bg-light">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER.widgets.map((widget) => (
            <div key={widget.title} className="widget">
              <h2 className="text-lg font-semibold text-ink">{widget.title}</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {widget.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-black/50 transition-colors hover:text-ink hover:underline hover:decoration-brand hover:underline-offset-4"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="widget">
            <h2 className="text-lg font-semibold text-ink">{FOOTER.contact.title}</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-black/50">
              {FOOTER.contact.address}
            </address>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={'tel:' + phone.replace(/[^\d+]/g, '')}
                    className="text-black/50 transition-colors hover:text-ink"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${FOOTER.contact.email}`}
                  className="text-black/50 transition-colors hover:text-ink"
                >
                  {FOOTER.contact.email}
                </a>
              </li>
            </ul>

            <h2 className="mt-8 text-lg font-semibold text-ink">{FOOTER.connectTitle}</h2>
            <ul className="mt-4 flex gap-2">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand text-ink transition-colors hover:bg-brand-hover"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-black/50 sm:flex-row sm:px-6">
          <p>{FOOTER.copyright}</p>
          <a
            href={FOOTER.dockLink.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            {FOOTER.dockLink.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
