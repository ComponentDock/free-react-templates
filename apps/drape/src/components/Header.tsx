import { useState } from 'react'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Shop', 'Product', 'Blog', 'About', 'Contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-warm-200">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4">
        <button
          type="button"
          className="lg:hidden p-1"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <a href="#" className="text-xl font-bold tracking-tight">
          Drape<span className="text-terra-400">.</span>
        </a>

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-terra-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" className="p-1" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <a href="#" className="p-1" aria-label="Account">
            <User className="h-5 w-5" />
          </a>
          <a href="#" className="p-1" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-warm-200 bg-white" aria-label="Mobile">
          <ul className="flex flex-col px-5 py-4 gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="block py-1 hover:text-terra-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
