import { useState } from 'react'
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#products' },
  {
    label: 'Pages',
    href: '#',
    children: ['About Us', 'Shop Details', 'Shopping Cart', 'Check Out'],
  },
  { label: 'Blog', href: '#latest' },
  { label: 'Contacts', href: '#footer' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-ink text-white text-xs uppercase tracking-widest">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
          <p className="m-0 hidden sm:block">Free shipping, 30-day return or refund guarantee.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Sign in
            </a>
            <a href="#" className="hover:text-white">
              FAQs
            </a>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-xs uppercase tracking-widest text-white"
              >
                Usd <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-rule bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-ink">
            SilkThread
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-ink hover:text-brand"
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-3 w-3" />}
                </a>
                {link.children && (
                  <ul className="absolute left-0 z-30 mt-2 hidden w-48 rounded bg-white py-2 shadow-lg group-hover:block">
                    {link.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-body hover:bg-cream hover:text-ink"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button type="button" aria-label="Search" className="text-ink hover:text-brand">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Wishlist" className="text-ink hover:text-brand">
              <Heart className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Cart" className="relative text-ink hover:text-brand">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                0
              </span>
            </button>
            <button
              type="button"
              aria-label="Open menu"
              className="text-ink md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile offcanvas */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 flex h-full w-72 flex-col bg-white p-6">
            <button
              type="button"
              aria-label="Close menu"
              className="mb-6 self-end text-ink"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wider text-ink"
                    onClick={() => {
                      if (link.children) setPagesOpen(!pagesOpen)
                      else setMobileOpen(false)
                    }}
                  >
                    {link.label}
                  </a>
                  {link.children && pagesOpen && (
                    <ul className="mt-2 flex flex-col gap-2 pl-4">
                      {link.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#"
                            className="text-sm text-body"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            <p className="mt-auto text-xs text-body">
              Free shipping, 30-day return or refund guarantee.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
