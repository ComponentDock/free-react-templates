import { Send, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="relative bg-gray-900 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              About Us
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Sundial helps you find the perfect property. We connect buyers with homes that match
              their lifestyle across top locations.
            </p>
            <p className="text-xl font-bold text-tan-500">
              Sun<span className="text-white">dial</span>
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 transition-colors hover:text-tan-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-3 text-sm text-gray-400">
              Stay updated with our latest listings and news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-l bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-tan-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-r bg-tan-500 px-4 text-white transition-colors hover:bg-tan-600"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-tan-500" />
                +1 555 123 4567
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-tan-500" />
                contact@sundale.com
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 text-tan-500" />
                123 Main Street, Suite 100, New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sundale. Made with{' '}
            <span className="text-tan-500">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
