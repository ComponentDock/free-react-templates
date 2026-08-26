import { Send } from 'lucide-react'

const quickLinks = [
  { label: 'Work', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#' },
  { label: 'Tips & Tricks', href: '#news' },
]

const solutions = [
  { label: 'Air Freight', href: '#' },
  { label: 'Ocean Freight', href: '#' },
  { label: 'Large Projects', href: '#' },
]

const support = [
  { label: 'FAQ', href: '#' },
  { label: 'Submit Ticket', href: '#contact' },
  { label: 'Contact Us', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-coal pt-16 pb-8 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold uppercase text-white">
              Logistico<span className="text-brand">.</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner in global logistics and cargo transport. We deliver reliability,
              efficiency, and peace of mind.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold uppercase text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold uppercase text-white">Solution</h4>
            <ul className="space-y-2">
              {solutions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold uppercase text-white">Support</h4>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 border-t border-white/10 pt-8">
          <h4 className="mb-4 text-base font-bold uppercase text-white">Newsletter</h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2"
            aria-label="Newsletter subscription"
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
              className="flex-1 rounded border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Logistico. All rights reserved.</p>
          <p>
            Made with <span className="text-brand">&hearts;</span>{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline transition-colors hover:text-white"
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
