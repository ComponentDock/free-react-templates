import { Send } from 'lucide-react'

interface FooterProps {
  className?: string
}

const featureLinks = [
  { label: 'Gear Reviews', href: '#services' },
  { label: 'Spot Guides', href: '#services' },
  { label: 'Coaching', href: '#team' },
  { label: 'Community', href: '#blog' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-surface pt-16 pb-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <a
              href="#"
              className="font-oswald text-2xl font-bold uppercase tracking-wider text-brand mb-4 block"
            >
              Cruiser
            </a>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Pushing skateboarding culture forward through education, community, and style since
              2015.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Features
            </h4>
            <ul className="space-y-2">
              {featureLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Newsletter
            </h4>
            <p className="text-muted text-sm mb-4">
              Subscribe for the latest skate news and event updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l bg-surface-light px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded-r bg-brand px-4 text-white hover:bg-brand-light transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Cruiser. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-light transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
