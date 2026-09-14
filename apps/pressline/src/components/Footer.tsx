import { BookOpen } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Blog', href: '#blog' },
] as const

const serviceLinks = [
  { label: 'Starter Package', href: '#packages' },
  { label: 'Professional', href: '#packages' },
  { label: 'Enterprise', href: '#packages' },
  { label: 'Custom Solutions', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2 text-white">
            <BookOpen className="h-6 w-6 text-primary-300" aria-hidden="true" />
            <span className="font-display text-xl font-bold">Pressline</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            A curated publishing house dedicated to bringing extraordinary stories to readers around
            the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>123 Publishing Lane</li>
            <li>Bookville, BK 12345</li>
            <li>
              <a href="tel:+1234567890" className="transition-colors hover:text-primary-300">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a
                href="mailto:info@pressline.dev"
                className="transition-colors hover:text-primary-300"
              >
                info@pressline.dev
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} Pressline. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-300 transition-colors hover:text-primary-400"
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
