import { Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-heading text-2xl font-bold uppercase tracking-wider text-white"
            >
              Sprintly
            </a>
            <p className="mt-3 text-sm">
              Your premier destination for fitness and wellness. Transform your body and mind with
              our expert guidance.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-500" /> 123 Fitness Ave, New York
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-500" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-500" /> info@sprintly.com
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Mon — Fri: 6:00 AM — 10:00 PM</li>
              <li>Saturday: 8:00 AM — 8:00 PM</li>
              <li>Sunday: 9:00 AM — 5:00 PM</li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <ul className="flex gap-3">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-700 text-dark-200 transition-colors hover:bg-brand-500 hover:text-white"
                  >
                    {label[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-dark-700 pt-6 text-center text-xs text-dark-400">
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-400"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
