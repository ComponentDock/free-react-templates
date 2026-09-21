import { MapPin, Phone, Mail, Check } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const services = [
  'Spinal Manipulation',
  'Electrotherapy',
  'Manual Lymphatic',
  'Medical Acupuncture',
  'Therapeutic Exercise',
  'Joint Mobilization',
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold uppercase tracking-[0.2em]">
              AlignWell<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Dedicated chiropractic care and wellness treatments to help you live a pain-free,
              active life.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={s.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">
              Contact Information
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, CA, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a href="tel:+123923929210" className="hover:text-white">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a href="mailto:info@alignwell.com" className="hover:text-white">
                  info@alignwell.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="rounded-2xl bg-brand p-6">
            <h3 className="text-lg font-bold text-white">Business Hours</h3>
            <div className="mt-4 space-y-3 text-sm text-blue-100">
              <div>
                <p className="font-semibold text-white">Opening Days:</p>
                <p className="ml-3">Monday – Friday: 9am to 8pm</p>
                <p className="ml-3">Saturday: 9am to 5pm</p>
              </div>
              <div>
                <p className="font-semibold text-white">Vacations:</p>
                <p className="ml-3">All Sunday Days</p>
                <p className="ml-3">All Official Holidays</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} AlignWell. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
