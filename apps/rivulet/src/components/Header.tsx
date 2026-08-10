import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, siteName } from '../data'
import { DropletLogo } from './DropletLogo'

/** Fixed header: droplet logo left, hamburger toggle right, full-screen menu. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5">
        <a href="#" aria-label={`${siteName} home`} className="transition-opacity hover:opacity-80">
          <DropletLogo />
        </a>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-accent"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Menu"
          className="fixed inset-0 top-0 z-[-1] flex flex-col items-center justify-center gap-2 bg-navy"
        >
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-xl font-bold uppercase tracking-wider text-white transition-colors hover:text-accent"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
