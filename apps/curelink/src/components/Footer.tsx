import { Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Blog', href: '#blog' },
] as const

const departments = [
  'Cardiology',
  'Neurology',
  'Diagnostic',
  'Dental',
  'Ophthalmology',
  'Emergency',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-purple-500 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* About */}
        <div>
          <a href="#home" className="text-2xl font-bold text-white">
            Curelink
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Healing Touch Hospital is established to offer people with good health care services. We
            have a team of expert doctors who are always ready to serve you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-white/80 transition-colors hover:text-teal-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Departments</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {departments.map((dept) => (
              <li key={dept}>
                <a
                  href="#departments"
                  className="text-white/80 transition-colors hover:text-teal-300"
                >
                  {dept}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              <span className="text-white/80">123 Medical Center Dr, Health City</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              <a
                href="tel:+15551234567"
                className="text-white/80 transition-colors hover:text-teal-300"
              >
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              <a
                href="mailto:info@curelink.com"
                className="text-white/80 transition-colors hover:text-teal-300"
              >
                info@curelink.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} Curelink. All rights reserved. Built by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-teal-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
