import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Music', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-void/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide text-ink">
          Vinylspin
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium uppercase tracking-wider text-subtle transition-colors hover:text-primary-400"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Auth links */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm text-subtle transition-colors hover:text-ink">
            Login
          </a>
          <a href="#" className="text-sm text-subtle transition-colors hover:text-ink">
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-ink md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-surface bg-void px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-medium uppercase tracking-wider text-subtle transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 border-t border-surface pt-4">
            <a href="#" className="text-sm text-subtle hover:text-ink">
              Login
            </a>
            <a href="#" className="text-sm text-subtle hover:text-ink">
              Register
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
