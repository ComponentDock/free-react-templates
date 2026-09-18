import { useState } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Store', href: '#products' },
  {
    label: 'Products',
    href: '#products',
    children: [
      { label: 'Supplements', href: '#products' },
      { label: 'Vitamins', href: '#products' },
      { label: 'Diet & Nutrition', href: '#products' },
      { label: 'Tea & Coffee', href: '#products' },
    ],
  },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" data-testid="navbar">
      {/* Search bar */}
      {searchOpen && (
        <div className="border-b border-gray-100 bg-white py-3" data-testid="search-bar">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Search keyword and hit enter..."
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-ink outline-none focus:border-brand"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="ml-4 text-mist hover:text-ink"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl font-black uppercase tracking-[0.2em] text-ink">
            <span className="text-brand">Remedy</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.label} className="group relative">
                  <a
                    href={link.href}
                    className="inline-block px-4 py-2 text-sm font-semibold text-ink hover:text-brand"
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <ul className="invisible absolute left-0 top-full z-10 mt-1 border-t-2 border-brand bg-white py-2 shadow-md group-hover:visible">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block whitespace-nowrap px-6 py-2 text-sm text-ink hover:bg-gray-50 hover:text-brand"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex h-10 w-10 items-center justify-center text-ink hover:text-brand"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a
              href="#products"
              className="relative flex h-10 w-10 items-center justify-center text-ink hover:text-brand"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                2
              </span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-2 flex h-10 w-10 items-center justify-center text-ink hover:text-brand lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="mt-4 border-t border-gray-100 pt-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm font-semibold text-ink hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
