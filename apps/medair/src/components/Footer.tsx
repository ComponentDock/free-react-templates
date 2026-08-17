import { Mail, MapPin, Phone } from 'lucide-react'
import { FOOTER } from '../data'
import { BRAND } from '../data'
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from './icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X', Icon: XIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
] as const

/** Footer — dark #1a1a1a columns (brand + socials, Services, Quick Links,
    Have a Questions?) with a #151515 copyright bar linking to Component
    Dock (mandatory). */
export function Footer() {
  return (
    <footer className="bg-footer text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl text-white">
            {BRAND}
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{FOOTER.blurb}</p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/5 text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER.services.map((service) => (
              <li key={service}>
                <a href="#services" className="transition-colors hover:text-brand">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER.quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Have a Questions?</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {FOOTER.contact.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="tel:+23923929210" className="transition-colors hover:text-brand">
                {FOOTER.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="mailto:hello@medair.example" className="transition-colors hover:text-brand">
                {FOOTER.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-footerbar">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm sm:flex-row sm:px-6">
          <p>{FOOTER.copyright}</p>
          <a
            href={FOOTER.dockLink.href}
            className="transition-colors hover:text-brand"
            target="_blank"
            rel="noreferrer"
          >
            {FOOTER.dockLink.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
