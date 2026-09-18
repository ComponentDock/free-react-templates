import { Search } from 'lucide-react'

const navLinks = ['About Us', 'Services', 'Testimonials', 'Contact Us']

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-footer-bg py-16 text-sm text-muted">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* About + Nav + Social */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* About */}
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">About</h3>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rerum unde
                  possimus molestias dolorem fuga.
                </p>
              </div>

              {/* Navigations */}
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                  Navigations
                </h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-muted transition hover:text-white"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-muted transition hover:text-white"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-muted transition hover:text-white"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="text-muted transition hover:text-white"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="md:col-span-3">
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-l border border-muted/30 bg-transparent px-3 py-2 text-sm text-white placeholder-muted focus:outline-none"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="flex items-center rounded-r bg-primary-500 px-3 text-white transition hover:bg-primary-600"
                aria-label="Search"
              >
                <Search size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-red-400">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
