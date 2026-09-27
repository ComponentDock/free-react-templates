import { Send } from 'lucide-react'

const FOOTER_LINKS = ['View Project', 'Contact Us', 'Testimonial', 'Properties', 'Support']

export function Footer() {
  return (
    <footer className="bg-navy-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white">About Us</h4>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Delivering exceptional real estate solutions with over a decade of experience in
              creating outstanding living spaces.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white">Contact Info</h4>
            <p className="mt-3 text-sm text-white/60">123 Real Estate Ave, Property District</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="tel:+888044338899"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Phone: +8880 44338899
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@residium.com"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Email: info@residium.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white">Important Links</h4>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white">Newsletter</h4>
            <p className="mt-3 text-sm text-white/60">
              Subscribe for updates on new properties and market insights.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-red-500 px-4 text-white transition hover:bg-red-600"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Residium. Made with{' '}
              <a
                href="https://www.componentdock.com/"
                className="underline transition hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Component Dock
              </a>
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Dribbble', 'Behance'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-white/40 transition hover:text-white"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
