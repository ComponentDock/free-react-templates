import { useState } from 'react'
import { ShoppingBag, Search, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#', active: true },
  {
    label: 'Shop',
    href: '#',
    children: [
      'Shop Category',
      'Product Details',
      'Product Checkout',
      'Shopping Cart',
      'Confirmation',
    ],
  },
  {
    label: 'Blog',
    href: '#',
    children: ['Blog', 'Blog Details'],
  },
  {
    label: 'Pages',
    href: '#',
    children: ['Login', 'Tracking', 'Elements'],
  },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight text-heading dark:text-white">
          Mercato
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  link.active ? 'text-brand' : 'text-heading dark:text-gray-200'
                }`}
              >
                {link.label}
                {link.children && <span className="ml-1 text-xs">▾</span>}
              </a>
              {link.children && openDropdown === link.label && (
                <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md border border-border bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {link.children.map((child) => (
                    <li key={child}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-bg-light hover:text-brand dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Shopping bag"
            className="text-heading transition-colors hover:text-brand dark:text-gray-200"
          >
            <ShoppingBag size={20} />
          </button>
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-heading transition-colors hover:text-brand dark:text-gray-200"
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="border-t border-border bg-bg-light dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3">
            <input
              type="text"
              placeholder="Search Here"
              className="flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm text-heading outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              aria-label="Search"
            />
            <button
              aria-label="Submit search"
              className="rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
