import { Mail, Phone, MapPin, Send } from 'lucide-react'

const usefulLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
]

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* Column 1: Logo + Contact */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-navy">Capitex</h3>
          <p className="mb-4 text-sm text-body">
            Providing reliable financial solutions for businesses and individuals since 2010.
          </p>
          <div className="flex flex-col gap-3 text-sm text-body">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" />
              <span>123 Finance Street, NY 10001</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" />
              <a href="mailto:info@capitex.com" className="hover:text-brand">
                info@capitex.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" />
              <a href="tel:+1234567890" className="hover:text-brand">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-navy">Useful Links</h4>
          <ul className="flex flex-col gap-2">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-body transition hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-navy">Newsletter</h4>
          <p className="mb-4 text-sm text-body">
            Subscribe to our newsletter for the latest updates and financial tips.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded border border-border px-4 py-2 text-sm text-body placeholder:text-placeholder focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-1 rounded bg-brand px-4 py-2 text-sm font-semibold text-navy transition hover:bg-brand-hover"
              aria-label="Subscribe"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-4 pt-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-body sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Capitex. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
