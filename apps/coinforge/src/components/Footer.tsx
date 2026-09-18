import { Send } from 'lucide-react'

const navLinks = [
  { group: ['About', 'Token Sale', 'Roadmap', 'Contact'] },
  { group: ['White Paper', 'Team', 'App', 'FAQ'] },
]

export function Footer() {
  return (
    <footer className="bg-brand py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <a href="#home" className="text-2xl font-bold text-white">
            Coinforge
          </a>
          <p className="text-sm text-light/60">
            A secure, transparent platform for the next generation of blockchain investors and
            project founders.
          </p>
          <p className="text-xs text-light/40">
            More templates at{' '}
            <a href="https://www.componentdock.com/" className="underline hover:text-white">
              Component Dock
            </a>
          </p>
        </div>

        {navLinks.map((col, i) => (
          <div key={i}>
            <ul className="space-y-3">
              {col.group.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-light/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4">
          <p className="text-sm text-light/60">Subscribe to our Newsletter</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="flex-1 rounded-full bg-surface/60 px-4 py-2 text-sm text-white placeholder-light/40 outline-none focus:ring-2 focus:ring-coral"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-full bg-gradient-to-r from-gold to-coral px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
