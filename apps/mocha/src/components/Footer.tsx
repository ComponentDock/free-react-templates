import { Coffee } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const columns: { title: string; links: string[] }[] = [
  {
    title: 'Menu',
    links: ['Espresso Drinks', 'Pour Overs', 'Cold Drinks', 'Pastries'],
  },
  {
    title: 'Shop',
    links: ['Coffee Beans', 'Subscriptions', 'Merchandise', 'Gift Cards'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Locations', 'Careers', 'Contact'],
  },
]

const hours = ['Mon-Fri: 7am - 7pm', 'Sat-Sun: 8am - 6pm']
const contact = ['hello@mochacoffee.com', '(555) 234-5678']
const location = ['123 Roastery Lane', 'Portland, OR 97201']

const socials: { label: string; name: BrandName }[] = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  return (
    <footer className="bg-primary-900 pt-16 text-primary-200 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
                <Coffee className="h-4 w-4" aria-hidden="true" />
              </span>
              Mocha
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary-300">
              Artisan coffee roasters dedicated to sourcing, roasting, and serving the finest
              specialty coffees from around the world.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#menu" className="text-primary-300 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Hours</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {contact.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Flagship Location
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {location.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-primary-300">© 2026 Mocha. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#menu" className="text-primary-300 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#menu" className="text-primary-300 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#menu"
                aria-label={social.label}
                className="text-primary-300 transition-colors hover:text-white"
              >
                <BrandIcon name={social.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
