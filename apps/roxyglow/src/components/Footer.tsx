function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const usefulLinks = ['Sitemaps', 'Categories', 'Archives', 'Advertise', 'Ad Choice']
const privacyLinks = ['Privacy Policy', 'Terms of Use', 'Help Center', 'Newsletters', 'Feedback']

export function Footer() {
  return (
    <footer id="footer" className="bg-dark-bg pt-16 pb-6 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">RoxyGlow</h6>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Experience luxury hospitality where every detail is crafted for your comfort. From
              elegant rooms to world-class dining, discover a stay beyond expectation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/50 transition-colors hover:text-brand"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/50 transition-colors hover:text-brand"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/50 transition-colors hover:text-brand"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">Useful Links</h6>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">Privacy</h6>
            <ul className="space-y-2">
              {privacyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Questions */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">Have a Questions</h6>
            <ul className="space-y-3 text-sm text-white/70">
              <li>123 Luxury Avenue, Resort City, RC 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>info@roxyglow.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-white/50">
            &copy; {new Date().getFullYear()} More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline transition-colors hover:text-brand"
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
