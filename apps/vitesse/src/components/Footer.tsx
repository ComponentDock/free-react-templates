import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { FOOTER_BLURB, FOOTER_COLUMNS, UTILITY } from '../data/content'
import { FacebookIcon, LinkedinIcon, TruckMark, TwitterIcon } from './icons'

const SOCIALS = [
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'Website', href: 'https://example.com', Icon: Globe },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-footer px-6 pb-12 pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-divider pb-12">
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            We Understand The Importance of Every Delivery!
          </h2>
          <p className="mt-4 flex items-center gap-3 text-lg text-footertext">
            <Phone aria-hidden="true" className="h-5 w-5 text-accent" />
            {UTILITY.phone}
          </p>
        </div>

        <div className="grid gap-12 pt-16 md:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="font-sans text-lg font-medium uppercase tracking-widest text-white">
                {column.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-footertext transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <a href="#top" className="flex items-center gap-3">
              <TruckMark className="h-8 w-8 text-accent" />
              <span className="font-display text-3xl font-semibold uppercase tracking-wide text-white">
                Vitesse
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-footertext">{FOOTER_BLURB}</p>
            <ul className="mt-6 space-y-3 text-sm text-footertext">
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="h-4 w-4 text-accent" />
                {UTILITY.email}
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
                1200 Example Harbor Road, Newark, NJ 07114
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-white/15 text-footertext transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-footertext">
          <p>
            Copyright © 2026 All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-accent hover:text-primary"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
