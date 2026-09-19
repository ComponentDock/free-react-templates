import { useState } from 'react'
import { Search, ShoppingCart, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const shopItems = [
  'Shop Category',
  'Product Details',
  'Product Checkout',
  'Confirmation',
  'Shopping Cart',
]

const navLinks = ['Home', 'Shop', 'Blog', 'Pages', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="/" className="font-heading text-2xl font-bold text-body">
          Fragrance
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link} className="relative">
              {link === 'Shop' ? (
                <div
                  className="flex cursor-pointer items-center gap-1 font-heading text-sm font-medium uppercase text-body hover:text-brand"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  {link}
                  <ChevronDown className="h-3 w-3" />
                  {shopOpen && (
                    <ul className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border bg-white py-2 shadow-lg">
                      {shopItems.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-muted hover:bg-light-bg hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href="#"
                  className="font-heading text-sm font-medium uppercase text-body hover:text-brand"
                >
                  {link}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-body hover:text-brand">
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Shopping cart with 3 items"
            className="relative text-body hover:text-brand"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs text-white">
              3
            </span>
          </button>
          <a
            href="#"
            className="hidden rounded-full bg-brand px-6 py-2 font-heading text-sm font-medium text-white hover:bg-transparent hover:text-brand hover:ring-2 hover:ring-brand lg:inline-block"
          >
            Buy Now
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="text-body lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={cn(
                'block py-2 font-heading text-sm font-medium uppercase text-body hover:text-brand',
              )}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 inline-block rounded-full bg-brand px-6 py-2 font-heading text-sm font-medium text-white"
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  )
}
