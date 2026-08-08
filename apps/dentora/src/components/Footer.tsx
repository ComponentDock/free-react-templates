import { Smile } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const columns: { title: string; links: string[] }[] = [
  {
    title: 'Services',
    links: ['General Dentistry', 'Cosmetic Dentistry', 'Dental Implants', 'Orthodontics'],
  },
  {
    title: 'Patient Info',
    links: ['Insurance', 'New Patients', 'Patient Forms', 'FAQ'],
  },
  {
    title: 'Clinic',
    links: ['About', 'Our Team', 'Blog', 'Contact'],
  },
  {
    title: 'Contact Us',
    links: ['789 Dental Way, San Francisco, CA 94102', '(555) 234-5678', 'hello@dentora.com'],
  },
]

const socials: { label: string; name: BrandName }[] = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'X', name: 'x' },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-extrabold text-white">
                <Smile className="h-4 w-4" aria-hidden="true" />
              </span>
              Dentora
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Exceptional dental care with a gentle touch. Modern technology meets compassionate
              treatment.
            </p>
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
            <nav key={column.title} aria-label={column.title}>
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
          <p>© 2026 Dentora. All rights reserved.</p>
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
