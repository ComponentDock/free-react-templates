import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const quickLinks = [
  'Sell online',
  'Features',
  'Shopping cart',
  'Store builder',
  'Mobile commerce',
  'Dropshipping',
  'Website development',
  'Point of sale',
  'Hardware',
  'Software',
] as const

const socials = ['facebook', 'twitter', 'instagram'] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16 text-gray-600 transition-colors dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-ink dark:text-white">
              Promo
            </h3>
            <a href="#shop" className="mt-4 block">
              <img
                src="https://picsum.photos/seed/bazaar-promo/600/400"
                alt="Summer shirts promo"
                loading="lazy"
                className="w-full rounded object-cover"
              />
              <h4 className="mt-3 font-sans text-lg font-light text-ink dark:text-white">
                Finding Your Perfect Shirts This Summer
              </h4>
            </a>
            <p className="mt-2 text-sm text-mist">Promo from July 15 — 25, 2019</p>
          </div>

          <nav aria-label="Quick Links">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-ink dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#shop" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-ink dark:text-white">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +2 392 3929 210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                hello@bazaar.example
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#home"
                  aria-label={`Bazaar on ${social}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-fog text-ink transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-gray-300"
                >
                  <BrandIcon name={social} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-mist dark:border-gray-800">
          © 2026 Bazaar — All rights reserved
        </div>
      </div>
    </footer>
  )
}
