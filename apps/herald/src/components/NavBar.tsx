import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { closeMenuLabel, dropdownPages, navItems, openMenuLabel } from '../data'

/** Navy nav bar: ten dropdown items, white underline hover, mobile hamburger. */
export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav aria-label="Main" className="bg-nav">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
        <button
          type="button"
          aria-label={menuOpen ? closeMenuLabel : openMenuLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-[60px] w-12 items-center justify-center text-white lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <ul className="hidden items-center lg:flex">
          {navItems.map((item) => (
            <li key={item} className="group relative">
              <a
                href="#"
                className="relative flex items-center gap-1 px-3 py-[21px] text-xs font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 group-hover:after:scale-x-100"
              >
                {item}
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <div className="invisible absolute top-full left-0 z-30 min-w-[180px] bg-nav opacity-0 shadow-[0_3px_10px_rgba(0,0,0,0.3)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {dropdownPages.map((page) => (
                  <a
                    key={page}
                    href="#"
                    className="block border-t border-primary px-5 py-4 text-xs text-white transition-all hover:translate-x-1 hover:bg-primary"
                  >
                    {page}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden w-12 lg:block" />
      </div>

      {menuOpen && (
        <div className="border-t border-primary/40 bg-nav shadow-[0_4px_20px_-10px_rgba(0,0,0,0.4)] lg:hidden">
          <ul className="max-h-[70vh] overflow-y-auto px-4 py-2">
            {navItems.map((item) => (
              <li key={item} className="border-b border-primary/30">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-xs font-semibold text-white"
                >
                  {item}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <ul className="pb-3 pl-4">
                  {dropdownPages.map((page) => (
                    <li key={page}>
                      <a
                        href="#"
                        onClick={() => setMenuOpen(false)}
                        className="block py-1.5 text-xs text-white/80 hover:text-white"
                      >
                        {page}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
