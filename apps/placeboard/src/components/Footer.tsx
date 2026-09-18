import { MapPin, Phone, Mail } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Destination', href: '#destinations' },
  { label: 'Contact', href: '#contact' },
]

const blogEntries = [
  { title: '10 Hidden Gems in Europe', date: 'Mar 15, 2026' },
  { title: 'Budget Travel Tips for Asia', date: 'Mar 10, 2026' },
  { title: 'Best Beaches in the Caribbean', date: 'Mar 5, 2026' },
]

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4
              className="mb-4 text-lg font-bold text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              About
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-body">
              Placeboard helps you discover and plan your next adventure with curated travel
              destinations and guides.
            </p>
            <ul className="space-y-2 text-sm text-body">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                123 Travel Lane, Wanderlust City
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                info@placeboard.com
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4
              className="mb-4 text-lg font-bold text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-body transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Blog */}
          <div>
            <h4
              className="mb-4 text-lg font-bold text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Latest Blog
            </h4>
            <ul className="space-y-3">
              {blogEntries.map((entry) => (
                <li key={entry.title}>
                  <a
                    href="#blog"
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {entry.title}
                  </a>
                  <p className="text-xs text-gray-400">{entry.date}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="mb-4 text-lg font-bold text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-body transition-colors hover:text-primary"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-body transition-colors hover:text-primary"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-body transition-colors hover:text-primary"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-body">
          <p>
            &copy; {new Date().getFullYear()} Placeboard. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:text-primary-hover"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
