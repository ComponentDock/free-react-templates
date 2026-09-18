import { Phone, MapPin, Mail } from 'lucide-react'

const serviceLinks = [
  'Dry Cleaning',
  'Wash & Fold',
  'Ironing Services',
  'Laundry Delivery',
  'Stain Removal',
] as const

const socials = [
  { label: 'Twitter', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + description */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-wide">
                Press<span className="text-brand">well</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <span className="text-xs font-bold">{s.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="transition-colors hover:text-white">
                    — {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                (90) 898 789-8957
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                presswell@laundry.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>789/A, Green road NYC-9089</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Presswell. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand underline transition-colors hover:text-brand-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
