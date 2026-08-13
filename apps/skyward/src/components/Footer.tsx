import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { navLinks, office, usefulLinks } from '../data'

const socials = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
] as const

/** Blue four-column footer: brand + socials, Useful Links, Navigational,
 *  Office, and a centered copyright bar with the Component Dock credit. */
export function Footer() {
  return (
    <footer id="contact" className="bg-primary-600 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="text-xl font-black tracking-wide text-white">
            Skyward
          </a>
          <p className="mt-6 text-sm leading-6 text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, name }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded bg-white/10 transition-colors hover:bg-accent-500"
              >
                <BrandIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Useful Links</h3>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {usefulLinks.map((label) => (
              <li key={label}>
                <a href="#hosting" className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium">Navigational</h3>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium">Office</h3>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <span>{office.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <a
                href={'tel:' + office.phone.replace(/[^\d+]/g, '')}
                className="transition-colors hover:text-white"
              >
                {office.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <a href="mailto:info@yourdomain.com" className="transition-colors hover:text-white">
                {office.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-6 text-center text-sm text-white/70 sm:flex-row">
          Copyright © 2026 All rights reserved
          <span className="flex items-center gap-1">
            | Made with{' '}
            <Heart className="h-3.5 w-3.5 fill-accent-500 text-accent-500" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white underline-offset-4 transition-colors hover:underline"
            >
              Component Dock
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
