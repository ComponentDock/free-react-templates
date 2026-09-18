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

const quickLinks = ['About Us', 'Services', 'Testimonials', 'Contact Us']
const products = ['Listings', 'Reviews', 'Categories', 'Maps']
const features = ['Search', 'Bookmarks', 'Notifications', 'Analytics']

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-footer-text">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Products</h4>
            <ul className="space-y-2 text-sm text-footer-text">
              {products.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Features</h4>
            <ul className="space-y-2 text-sm text-footer-text">
              {features.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us + Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
            <div className="mb-6 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-footer-text transition-colors hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-footer-text transition-colors hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-footer-text transition-colors hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
            <h4 className="mb-3 text-lg font-bold">Subscribe Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded-l border border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-500"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-r bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-footer-text">
          <p>
            &copy; {new Date().getFullYear()} Spotlight. Made with{' '}
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
