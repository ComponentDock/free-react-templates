import { Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
]

const navLinks = ['Home', 'Explore', 'Pages', 'Blog', 'Contact']

export function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & info */}
          <div>
            <span className="mb-4 block text-2xl font-bold">Roster</span>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              Your go-to directory for discovering the best local businesses, restaurants, and
              services in your city.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" />
                <span>123 Directory Ave, City Center</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" />
                <span>hello@roster.com</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-300 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-300">
              Subscribe to get updates on new listings and local events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sm text-gray-300 transition-colors hover:text-brand"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Roster. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brand transition-colors hover:text-brand-hover"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
