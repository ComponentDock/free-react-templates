import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-charcoal/90 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-bold tracking-wide">
          <span className="text-white">Meetup</span>
          <span className="text-brand">ly</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#pricing"
          className="hidden rounded-sm border border-brand bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 md:inline-block"
        >
          Buy Ticket
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            className="block w-full rounded-sm border border-brand bg-brand px-8 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
            onClick={() => setMobileOpen(false)}
          >
            Buy Ticket
          </a>
        </div>
      )}
    </nav>
  )
}
