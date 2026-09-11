import { Send } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#services' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About Agency</h3>
            <p className="text-sm leading-relaxed">
              ByteCraft is a digital agency dedicated to crafting exceptional digital experiences.
              We blend creativity with technology to build products that drive results.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Navigation Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href} className="text-sm transition hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-full bg-brand p-2 text-dark transition hover:bg-brand-dark"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ByteCraft. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="text-gray-500 transition hover:text-brand">
              <BrandIcon name="facebook" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 transition hover:text-brand">
              <BrandIcon name="twitter" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 transition hover:text-brand">
              <BrandIcon name="linkedin" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 py-3 text-center">
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 transition hover:text-brand"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
