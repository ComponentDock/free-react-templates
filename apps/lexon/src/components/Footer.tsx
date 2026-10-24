import { Globe, Mail, Share2 } from 'lucide-react'

const companyLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#consultation' },
]

const serviceLinks = [
  "O'Connor Group",
  'Our Business Model',
  'Our Lawyers Team',
  'Most Recent Cases',
  'Hot Lawyers News',
]

export function Footer() {
  return (
    <footer className="bg-header-bg text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Logo & description */}
        <div>
          <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
            Justlaw
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Dedicated legal professionals committed to fighting for justice with integrity and
            excellence. Trust our experienced team to protect your rights.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Website"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Share"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a href="#services" className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h3>
          <p className="mt-4 text-sm">For latest updates sign up here</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} All rights reserved. Made with{' '}
          <span className="text-primary-500">♥</span> — More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 transition-colors hover:text-primary-400"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
