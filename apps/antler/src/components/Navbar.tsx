import { useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, menuCloseLabel, menuOpenLabel, navLinks } from '../data'

/** Transparent-over-hero navbar on desktop (black wordmark, hairline link
    separators, active #588da8); solid black with white links and a "Menu"
    burger on mobile (reference: .ftco_navbar.ftco-navbar-light). */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black lg:bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6">
        <a
          href="#top"
          className="py-3 text-2xl font-bold text-white transition-colors hover:text-accent lg:text-ink"
        >
          {brandName}
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  aria-current={link === 'Home' ? 'page' : undefined}
                  className={cn(
                    'inline-block border-l border-black/10 px-4 py-3 text-[15px] font-medium text-black transition-colors hover:text-ink',
                    link === 'Home' && 'text-accent',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
          className="flex items-center gap-2 rounded p-2 text-sm uppercase tracking-wide text-white transition-colors hover:text-accent lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span>Menu</span>
        </button>
      </div>

      {menuOpen ? (
        <nav aria-label="Mobile" className="lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className="block border-t border-white/20 px-4 py-3 text-white transition-colors hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
