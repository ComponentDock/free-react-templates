import { Mail, MapPin, Phone } from 'lucide-react'

const menuLinks = ['Shop', 'About', 'Journal', 'Contact Us'] as const
const helpLinks = [
  'Shipping Information',
  'Returns & Exchange',
  'Terms & Conditions',
  'Privacy Policy',
  'FAQs',
] as const

export function Footer() {
  return (
    <footer className="bg-cream py-14 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-bold uppercase tracking-wide text-ink dark:text-white">
            <span className="text-brand">C</span>outure
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            A fashion shop for everyone — trending looks, honest prices and premium packaging.
          </p>
        </div>

        <nav aria-label="Menu">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink dark:text-white">
            Menu
          </h3>
          <ul className="mt-4 space-y-2">
            {menuLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="text-sm text-mist transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Help">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink dark:text-white">
            Help
          </h3>
          <ul className="mt-4 space-y-2">
            {helpLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="text-sm text-mist transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink dark:text-white">
            Have a Questions?
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="mailto:info@yourdomain.com" className="hover:text-brand">
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-mist">
        Copyright © 2026 Couture. All rights reserved.
      </p>
    </footer>
  )
}
