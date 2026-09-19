import { useState } from 'react'
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown, User } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Categories', href: '#categories' },
  {
    label: 'Latest',
    href: '#latest',
    children: [
      { label: 'Product List', href: '#product-list' },
      { label: 'Product Details', href: '#product-details' },
    ],
  },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog-list' },
      { label: 'Blog Details', href: '#blog-details' },
    ],
  },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'Login', href: '#login' },
      { label: 'Cart', href: '#cart' },
      { label: 'Elements', href: '#elements' },
      { label: 'About', href: '#about' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <span className="font-[var(--font-heading)] text-2xl font-bold text-ink dark:text-white">
            Riviere
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
              </a>
              {link.children && openDropdown === link.label && (
                <ul className="absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2 text-sm text-mist transition-colors hover:bg-gray-50 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search products"
              className="w-48 rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <Search
              className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <a
            href="#wishlist"
            aria-label="Wishlist"
            className="text-ink transition-colors hover:text-brand dark:text-gray-200"
          >
            <Heart className="h-5 w-5" />
          </a>
          <a
            href="#cart"
            aria-label="Shopping cart"
            className="text-ink transition-colors hover:text-brand dark:text-gray-200"
          >
            <ShoppingCart className="h-5 w-5" />
          </a>
          <a
            href="#signin"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-brand bg-brand px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark hover:text-white dark:hover:bg-brand-dark"
          >
            <User className="h-3.5 w-3.5" aria-hidden="true" />
            Sign in
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ink lg:hidden dark:text-gray-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-ink hover:text-brand dark:text-gray-200 dark:hover:text-brand"
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul className="ml-4 mt-1 space-y-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block text-sm text-mist hover:text-brand dark:text-gray-400"
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
          <div className="mt-4 flex items-center gap-4">
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search products"
              className="flex-1 rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <a
              href="#signin"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-brand bg-brand px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
            >
              Sign in
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
