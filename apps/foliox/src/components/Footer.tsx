import { ArrowRight } from 'lucide-react'

const FOOTER_NAV_1 = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Team', href: '#' },
]

const FOOTER_NAV_2 = [
  { label: 'Clients', href: '#clients' },
  { label: 'Method', href: '#method' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo */}
          <div>
            <span className="text-2xl font-bold">Foliox</span>
          </div>

          {/* Nav 1 */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {FOOTER_NAV_1.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav 2 */}
          <nav aria-label="Footer secondary navigation">
            <ul className="space-y-2">
              {FOOTER_NAV_2.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Subscribe */}
          <div>
            <p className="mb-3 text-sm font-medium">Subscribe</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-l-sm bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-r-sm bg-primary px-3 text-white transition-colors hover:bg-primary-dark"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Made with{' '}
            <span className="text-primary" aria-label="love">
              ♥
            </span>{' '}
            by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
