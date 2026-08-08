import { Cloud, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const columns: { title: string; links: string[] }[] = [
  {
    title: 'Products',
    links: ['Hosting', 'Databases', 'Edge Functions', 'Object Storage'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'API Reference', 'CLI', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
]

const socials: { label: string; name: BrandName }[] = [
  { label: 'GitHub', name: 'github' },
  { label: 'Twitter', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-extrabold text-white">
                <Cloud className="h-4 w-4" aria-hidden="true" />
              </span>
              Stratos
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Deploy anything, scale everything. Stratos is the developer-first cloud platform for
              modern applications.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="tel:(555) 456-7890"
                className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                (555) 456-7890
              </a>
              <a
                href="mailto:hello@stratos.dev"
                className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                hello@stratos.dev
              </a>
              <p className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                800 NW 6th Ave, Portland, OR 97209
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Stratos. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-primary-400">
              Terms of Service
            </a>
            <a href="#home" className="transition-colors hover:text-primary-400">
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
