import { Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, FOOTER } from '../data/content'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons'

const SOCIALS = [
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

export function Footer() {
  return (
    <footer className="bg-ink px-6 pt-[8em] pb-[4em] text-white/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="footer-heading">
              {BRAND.name}
              <span className="text-coral">.</span>
            </h2>
            <p>{FOOTER.blurb}</p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, Icon }) => (
                <li key={label}>
                  <a href="#social" aria-label={label} className="social-circle">
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER.columns.map((column) => (
            <div key={column.title}>
              <h2 className="footer-heading">{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#footer" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="footer-heading">{FOOTER.contactTitle}</h2>
            <ul>
              <li className="flex gap-3 py-1">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                {FOOTER.address}
              </li>
              <li className="flex gap-3 py-1">
                <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                {FOOTER.phone}
              </li>
              <li className="flex gap-3 py-1">
                <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                {FOOTER.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p>
            {FOOTER.copyright} More templates at{' '}
            <a href="https://www.componentdock.com/" className="font-medium text-coral">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
