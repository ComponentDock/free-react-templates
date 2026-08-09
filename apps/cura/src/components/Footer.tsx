import { Clock, Cross, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="Cura home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Cross className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold tracking-tight text-white">Cura</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Healthcare Center
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Compassionate, patient-centered healthcare delivered by board-certified physicians at
              state-of-the-art facilities — for over 25 years.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a href="tel:+15551234567" className="transition-colors hover:text-primary-400">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                123 Wellness Avenue, Springfield
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                Mon-Fri: 8:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Emergency Hotline
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Need urgent help outside office hours? Our emergency line is available 24/7.
            </p>
            <a
              href="tel:+15559110000"
              className="mt-4 inline-block rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-600"
            >
              (555) 911-0000
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row lg:px-8">
          <p>© 2026 Cura. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="transition-colors hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-primary-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
