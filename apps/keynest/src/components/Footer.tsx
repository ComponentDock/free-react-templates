import { Send } from 'lucide-react'

const ABOUT_LINKS = ['Why choose us', 'Review', 'Customers', 'Blog', 'Carrier']
const SERVICE_LINKS = ['Why choose us', 'Review', 'Customers', 'Blog', 'Carrier']

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div>
            <a href="/" className="mb-6 inline-block text-2xl font-bold">
              Key<span className="text-primary">nest</span>
            </a>
            <p className="mb-6 text-sm text-gray-400">
              Productboard is the product management system that helps teams create great products.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">About</h4>
            <ul className="space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter to get updates about our services.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-l bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-r bg-primary px-5 text-white transition-colors hover:bg-primary-dark"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-gray-400 lg:px-8">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <span className="text-primary">Keynest</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
