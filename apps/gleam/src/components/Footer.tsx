import { MapPin, Mail, Phone, Sparkles } from 'lucide-react'

const columns = [
  {
    heading: 'Services',
    links: ['Regular Cleaning', 'Deep Cleaning', 'Move-In/Out', 'Commercial'],
  },
  {
    heading: 'Resources',
    links: ['Cleaning Checklist', 'Service Areas', 'Quote Calculator', 'FAQ'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Contact', 'Careers'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Gleam home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">Gleam</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Professional cleaning services for homes and offices. Insured, bonded, and
              eco-friendly.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" aria-hidden="true" />
                456 Clean Street, Portland, OR 97201
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400" aria-hidden="true" />
                (555) 867-5309
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-400" aria-hidden="true" />
                hello@gleamclean.com
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Gleam. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Terms of Service
            </a>
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
