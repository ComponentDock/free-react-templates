import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const NAV_LINKS = ['home', 'about us', 'offers', 'news', 'contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2 text-trek-dark font-display text-xl font-bold"
        >
          <span className="bg-gradient-to-r from-trek-orange to-trek-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
            T
          </span>
          trekcraft
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-trek-text text-sm font-semibold uppercase tracking-wide hover:text-trek-orange transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
            className="p-2 hover:text-trek-orange transition-colors"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 hover:text-trek-orange transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t px-4 py-3">
          <input
            type="search"
            placeholder="Search destinations..."
            className="w-full max-w-md mx-auto block px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-trek-orange"
          />
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block text-trek-text text-sm font-semibold uppercase tracking-wide hover:text-trek-orange transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
