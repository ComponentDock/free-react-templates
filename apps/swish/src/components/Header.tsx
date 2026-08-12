import { useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, pagesDropdown, phone } from '../data'

function BasketballMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2.5v19M2.5 12h19M5.3 5.3a9.5 9.5 0 0 0 0 13.4M18.7 5.3a9.5 9.5 0 0 1 0 13.4"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white shadow-sm">
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          <p className="flex items-center gap-2 text-sm text-ink">
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            {phone}
          </p>
          <a
            href="#register"
            className="border border-gray-300 px-4 py-1.5 text-xs font-medium tracking-widest text-ink uppercase transition-colors hover:border-brand hover:text-brand"
          >
            Register
          </a>
        </div>
      </div>

      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        aria-label="Main"
      >
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-ink">
          <BasketballMark className="h-8 w-8 text-brand" />
          Swish
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="p-1 text-ink md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <ul
          className={cn(
            'absolute top-full right-0 left-0 flex-col bg-white px-4 pb-4 shadow-lg md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0 md:shadow-none',
            menuOpen ? 'flex' : 'hidden md:flex',
          )}
        >
          {navLinks.map((link) =>
            link === 'Pages' ? (
              <li key={link} className="relative">
                <button
                  type="button"
                  onClick={() => setPagesOpen((open) => !open)}
                  aria-expanded={pagesOpen}
                  className="flex w-full items-center gap-1 px-3 py-2 text-xs font-medium tracking-widest text-ink uppercase transition-colors hover:text-brand md:w-auto"
                >
                  Pages
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 transition-transform', pagesOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {pagesOpen && (
                  <ul className="flex-col gap-1 pl-4 md:absolute md:top-full md:left-0 md:w-44 md:bg-white md:p-2 md:shadow-lg">
                    {pagesDropdown.map((item) => (
                      <li key={item}>
                        <a
                          href="#pages"
                          className="block px-3 py-2 text-xs font-medium tracking-widest text-ink uppercase transition-colors hover:text-brand"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-3 py-2 text-xs font-medium tracking-widest text-ink uppercase transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>
    </header>
  )
}
