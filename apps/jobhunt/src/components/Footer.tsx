import { Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-bg-gray pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-brand-dark font-bold text-xl">JobHunt</span>
            </div>
            <p className="text-text-muted mb-6">
              The automated process starts as soon as your clothes go into the machine. The outcome
              is gleaming clothes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-muted hover:text-brand transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-brand transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-brand transition-colors"
                aria-label="Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="text-brand-dark font-bold text-lg mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-muted hover:text-brand transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-brand transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-brand transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-brand transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-brand-dark font-bold text-lg mb-6">Subscribe</h4>
            <p className="text-text-muted mb-4 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l border border-gray-300 text-sm focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="bg-brand text-white px-5 py-3 rounded-r hover:opacity-90 transition-opacity"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} JobHunt. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
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
