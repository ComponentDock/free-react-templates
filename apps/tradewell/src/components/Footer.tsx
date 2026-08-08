import { CandlestickChart, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './social-icons'

const columns = [
  {
    title: 'Products',
    links: ['Stocks', 'ETFs', 'Crypto', 'Options', 'Retirement'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact', 'Legal'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Help Center', 'API Docs', 'Security', 'Status'],
  },
] as const

const socials = [
  { label: 'Tradewell on X', icon: XIcon },
  { label: 'Tradewell on LinkedIn', icon: LinkedinIcon },
  { label: 'Tradewell on Facebook', icon: FacebookIcon },
  { label: 'Tradewell on Instagram', icon: InstagramIcon },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 pt-16 text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <CandlestickChart className="h-5 w-5" aria-hidden="true" />
              </span>
              Tradewell
            </a>
            <p className="mt-4 max-w-sm text-sm">
              The modern investment platform for stocks, ETFs, crypto, and options. Start with as
              little as $1 and build your wealth commission-free.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-400" aria-hidden="true" />
                <a
                  href="tel:+155****2834"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  (555) 492-2834
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" aria-hidden="true" />
                <a
                  href="mailto:hello@tradewell.com"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  hello@tradewell.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" aria-hidden="true" />
                <span>500 Wall Street, New York, NY 10005</span>
              </li>
            </ul>

            <nav aria-label="Social links" className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-800 dark:text-gray-400"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm transition-colors hover:text-gray-900 dark:hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-200 pt-8 pb-8 dark:border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm">© 2026 Tradewell. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#home"
                className="text-sm transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#home"
                className="text-sm transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#home"
                className="text-sm transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                Disclosures
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
