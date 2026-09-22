const NAV_LINKS = [
  'About',
  'Our Rooms',
  'Book A Room',
  'Blog',
  'Privacy & Policy',
  'Contact',
] as const

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
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

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24 18.635 24 24 18.633 24 12.013 24 5.393 18.635.026 12.017.026V0z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + description */}
          <div>
            <a href="#" className="font-heading text-2xl font-bold text-white">
              Sunlodge
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Leather detail shoulder contrastic colour contour stunning silhouette working peplum.
              Statement buttons cover-up tweaks patch.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 transition-colors hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/60 transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-white/60 transition-colors hover:text-white"
              >
                <PinterestIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Address</h4>
            <p className="text-sm text-white/60">76/A, Green Lane, Dhanmondi, NYC</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="tel:+1877383940"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  +1 (87) 738-3940
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@sunlodge.com"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  contact@sunlodge.com
                </a>
              </li>
            </ul>
          </div>

          {/* Component Dock link */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              More Templates
            </h4>
            <p className="text-sm text-white/60">
              Discover more free React templates at{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand transition-colors hover:text-brand-hover"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&hearts;</span> at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-hover"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
