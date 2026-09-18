function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 12 7.53v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const FEATURE_LINKS = ['About Us', 'Services', 'Testimonials', 'Contact Us']

export function Footer() {
  return (
    <footer className="bg-footer-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-9">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-footer-heading">
                  About Us
                </h3>
                <p className="text-sm leading-relaxed text-footer-text">
                  We are a creative agency dedicated to building exceptional digital experiences.
                  Our team combines creativity with technology to deliver results that matter.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-footer-heading">
                  Features
                </h3>
                <ul className="space-y-2">
                  {FEATURE_LINKS.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-footer-text hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-footer-heading">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a href="#" aria-label="Facebook" className="text-footer-text hover:text-white">
                    <FacebookIcon />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-footer-text hover:text-white">
                    <TwitterIcon />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-footer-text hover:text-white">
                    <InstagramIcon />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-footer-text hover:text-white">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-footer-heading">
              Subscribe Newsletter
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                aria-label="Enter Email"
                className="flex-1 rounded-l border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-footer-text">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-red-400">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
