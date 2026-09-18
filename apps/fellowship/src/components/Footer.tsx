function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
  { Icon: InstagramIcon, label: 'Instagram' },
] as const

const QUICK_LINKS_COLS = [
  {
    title: 'About Us',
    links: ['About Us', 'Our Services', 'Our Ministries', 'Contact Us', 'Events'],
  },
  {
    title: 'Our Church',
    links: ['Sermons', 'Events', 'Community', 'Staff', 'Blog'],
  },
  {
    title: 'Help',
    links: ['Prayer Request', 'Volunteer', 'Donate', 'FAQ'],
  },
]

const FOOTER_EVENTS = [
  { date: 'August 15, 2018', author: 'admin', comments: '2' },
  { date: 'August 14, 2018', author: 'admin', comments: '0' },
  { date: 'August 12, 2018', author: 'admin', comments: '5' },
]

export function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links: 3 sub-columns */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-heading text-lg text-white">Church Quick Links</h3>
            <div className="grid grid-cols-3 gap-4">
              {QUICK_LINKS_COLS.map((col) => (
                <nav key={col.title} aria-label={col.title}>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-text-muted transition-colors hover:text-brand"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h3 className="mb-6 font-heading text-lg text-white">Events</h3>
            <ul className="space-y-4">
              {FOOTER_EVENTS.map((event) => (
                <li key={event.date} className="text-sm text-text-muted">
                  <a href="#" className="transition-colors hover:text-brand">
                    August
                  </a>
                  <span className="ml-2 text-xs">
                    {event.date} · {event.author} · {event.comments} Comments
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-heading text-lg text-white">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-text-muted">Address:</span>
                <span className="text-white">34 Street Name, City Name Here, United States</span>
              </li>
              <li>
                <span className="block text-text-muted">Telephone:</span>
                <span className="text-white">+1 242 4942 290</span>
              </li>
              <li>
                <span className="block text-text-muted">Email:</span>
                <span className="text-white">info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">&copy; 2018 Fellowship. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="text-white/50 transition-colors hover:text-brand"
              >
                <social.Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            Made with <span className="text-brand">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-opacity hover:opacity-80"
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
