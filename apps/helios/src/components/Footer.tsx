import { Mail, MapPin, Phone, SunMedium } from 'lucide-react'

const solutions = [
  'Residential Solar',
  'Commercial Solar',
  'Battery Storage',
  'EV Charging',
  'Savings Calculator',
  'Incentives & Rebates',
] as const

const resources = ['Blog', 'FAQ'] as const

const company = ['About', 'Products', 'Pricing', 'Contact'] as const

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8v3h2.5v7h3Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M17.7 3H21l-7.2 8.2L22.2 21h-6.6l-5.2-6.1L4.5 21H1.2l7.7-8.8L1.8 3h6.8l4.7 5.5L17.7 3Zm-1.2 16h1.8L7.1 4.9H5.2L16.5 19Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M6.5 8.8H3.6V21h2.9V8.8ZM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM21 14.3c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.8H11V21h2.9v-6.4c0-1.7.8-2.7 2.2-2.7 1.3 0 2 .9 2 2.7V21H21v-6.7Z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X', Icon: XIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'LinkedIn', Icon: LinkedInIcon },
] as const

interface LinkColumn {
  heading: string
  links: readonly string[]
}

const columns: LinkColumn[] = [
  { heading: 'Solutions', links: solutions },
  { heading: 'Resources', links: resources },
  { heading: 'Company', links: company },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Helios home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
                <SunMedium className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">Helios</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Clean, affordable solar energy for homes and businesses across the country. Power your
              life with the sun.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
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

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                890 Solar Way, Austin, TX 78701
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a href="tel:+15557632748" className="transition-colors hover:text-primary-400">
                  (555) 763-2748
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a
                  href="mailto:hello@heliosenergy.com"
                  className="transition-colors hover:text-primary-400"
                >
                  hello@heliosenergy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Helios. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
