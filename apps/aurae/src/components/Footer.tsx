import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Classes', 'Trainers', 'Events', 'Pricing'] as const

const aboutLinks = ['Our Vision', 'Our Mission', 'Membership', 'Blog', 'Careers'] as const

export function Footer() {
  return (
    <footer className="bg-ink-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold tracking-wide">
              Aurae<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more
              with our dedicated wellness community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-brand">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-display text-lg font-bold text-brand">About Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Time + Contact */}
          <div>
            <h3 className="font-display text-lg font-bold text-brand">Open Time</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Mon — Fri: 6:30am — 7:45pm
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Sat — Sun: 8:00am — 5:00pm
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@aurae.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>123 Wellness Lane, Yoga City</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with Component Dock link */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        <p>
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Aurae Yoga Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
