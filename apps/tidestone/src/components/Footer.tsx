import { Mail } from 'lucide-react'

const footerLinks = {
  'Top Products': ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  'Quick Links': ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
}

export function Footer() {
  return (
    <footer className="bg-footer text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-700 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {['Facebook', 'LinkedIn', 'Twitter', 'Google'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-sm text-gray-300 transition-colors hover:bg-brand hover:text-white"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tidestone. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-white"
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
