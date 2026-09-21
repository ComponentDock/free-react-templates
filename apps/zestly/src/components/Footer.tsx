const footerLinks = {
  'Top Products': ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  'Quick Links': ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  Features: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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

function DribbbleIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: DribbbleIcon, label: 'Dribbble', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-body text-lg font-bold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe */}
          <div>
            <h3 className="mb-4 font-body text-lg font-bold">Subscribe</h3>
            <p className="mb-4 font-body text-sm text-gray-400">
              You can trust us. We only send promo offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your mail"
                aria-label="Email for newsletter"
                className="flex-1 rounded-l bg-footer-alt px-4 py-2 font-body text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-r bg-gradient-to-r from-brand-pink to-brand-coral px-4 py-2 text-white transition-opacity hover:opacity-90"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="font-body text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-brand-pink"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
