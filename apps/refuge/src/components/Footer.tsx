import { Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Insurance', 'Blog', 'Contact', 'Privacy']
const insuranceLinks = [
  'Home Insurance',
  'Auto Insurance',
  'Travel Insurance',
  'Business Insurance',
]

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  )
}

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold uppercase">About</h3>
            <p className="mb-4 text-sm text-gray-400">
              We are dedicated to providing comprehensive insurance solutions for individuals and
              businesses. Trust, transparency, and exceptional service are at the core of everything
              we do.
            </p>
            <a
              href="#"
              className="inline-block rounded bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Read More
            </a>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold uppercase">Quick Menu</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold uppercase">Insurance</h3>
            <ul className="space-y-2">
              {insuranceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold uppercase">Social</h3>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@refuge.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 123 Insurance Ave
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Refuge. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline transition hover:text-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
