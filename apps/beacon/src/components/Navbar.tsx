import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white px-[10%] py-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold uppercase tracking-[6px] text-beacon-heading">Beacon</h3>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-beacon-heading transition-colors hover:text-beacon-accent"
            aria-label="Toggle search"
          >
            <Search size={18} />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-beacon-heading transition-colors hover:text-beacon-accent md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="mt-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-b border-beacon-heading/20 bg-transparent py-2 text-sm text-beacon-heading placeholder-beacon-body/50 focus:border-beacon-heading focus:outline-none"
            aria-label="Search"
          />
        </div>
      )}

      <nav
        className={`${mobileOpen ? 'mt-4 block' : 'hidden'} md:mt-0 md:block`}
        aria-label="Main navigation"
      >
        <ul className="flex flex-col gap-4 md:flex-row md:gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-wide text-beacon-heading transition-colors hover:text-beacon-accent"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
