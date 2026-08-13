import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { office, quickLinks, socials } from '../data'

/** White three-column footer (reference `.site-footer`): About + social
 *  icons, Contact Info, Quick Links, and a centered copyright bar with the
 *  Component Dock credit. */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#eee] bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-[7rem] md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xs font-bold tracking-[0.1em] text-black uppercase">
            About Metalwork
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-6 flex gap-5">
            {socials.map(({ label, name }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="text-gray-600 transition-colors hover:text-primary-600"
              >
                <BrandIcon name={name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.1em] text-black uppercase">Contact Info</h3>
          <ul className="mt-6 space-y-4 text-sm text-gray-500">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <span>{office.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <a
                href={'tel:' + office.phone.replace(/[^\d+]/g, '')}
                className="border-b border-black/20 transition-colors hover:border-black hover:text-black"
              >
                {office.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <a
                href="mailto:info@yourdomain.com"
                className="border-b border-black/20 transition-colors hover:border-black hover:text-black"
              >
                {office.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.1em] text-black uppercase">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {quickLinks.map((label) => (
              <li key={label}>
                <a
                  href="#about"
                  className="border-b border-black/20 text-primary-600 transition-colors hover:border-black hover:text-black"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#eee]">
        <p className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-6 text-center text-sm text-gray-500 sm:flex-row">
          Copyright © 2026 All rights reserved
          <span className="flex items-center gap-1">
            | Made with{' '}
            <Heart className="h-3.5 w-3.5 fill-primary-600 text-primary-600" aria-hidden="true" />{' '}
            by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-primary-600 underline-offset-4 transition-colors hover:text-black hover:underline"
            >
              Component Dock
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
