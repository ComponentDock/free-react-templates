import { MapPin, Phone, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    svg: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'Twitter',
    href: '#',
    svg: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    name: 'Instagram',
    href: '#',
    svg: 'M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.5-6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z',
  },
] as const

export function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        {/* About */}
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-primary-400">
            Feastly
          </a>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Bringing the finest culinary experiences to your table. Fresh ingredients, bold flavors,
            and unforgettable dining moments.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
            Contact Us
          </h5>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>1234 Culinary Ave, San Francisco, CA 94102</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+18001234567" className="transition-colors hover:text-primary-400">
                (800) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:info@feastly.com"
                className="transition-colors hover:text-primary-400"
              >
                info@feastly.com
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
            Opening Hours
          </h5>
          <div className="space-y-2 text-sm text-gray-400">
            <p>Monday ..................... Closed</p>
            <p>Tue–Fri ............... 10 am – 12 pm</p>
            <p>Sat–Sun ............. 8 am – 11 pm</p>
            <p>Holidays ............. 10 am – 12 pm</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-footer-dark py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-gray-400 sm:flex-row md:px-6">
          <span>
            © {new Date().getFullYear()} Feastly. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 underline transition-colors hover:text-primary-300"
            >
              Component Dock
            </a>
          </span>
          <ul className="flex gap-4">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-label={link.name}
                  className="transition-colors hover:text-primary-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={link.svg} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
