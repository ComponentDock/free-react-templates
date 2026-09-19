import { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#about' },
  {
    label: 'Products',
    href: '#products',
    children: ['All Products', 'Single Product', 'Cart', 'Checkout'],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const cartItems = [
  { name: 'Bacardi 151', price: '$25.99', qty: 1 },
  { name: 'Jim Beam Kentucky Straight', price: '$30.89', qty: 2 },
  { name: 'Citadelle', price: '$22.50', qty: 1 },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-dark shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Cellarly
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 md:flex">
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
                    link.active ? 'text-brand' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </a>
                {link.children && openDropdown === link.label && (
                  <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md border border-gray-700 bg-gray-800 py-2 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
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

          <div className="relative">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative text-gray-300 transition-colors hover:text-white"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs text-white">
                {cartItems.length}
              </span>
            </button>
            {cartOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-md border border-gray-700 bg-gray-800 py-2 shadow-lg">
                {cartItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-3 px-4 py-2">
                    <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-700" />
                    <div>
                      <h4 className="text-sm font-medium text-white">{item.name}</h4>
                      <p className="text-xs text-gray-400">
                        {item.price} &middot; Qty: {item.qty}
                      </p>
                    </div>
                  </div>
                ))}
                <a
                  href="#"
                  className="block px-4 py-2 text-center text-sm text-brand hover:bg-gray-700"
                >
                  View All &rarr;
                </a>
              </div>
            )}
          </div>

          <button
            className="text-gray-300 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-700 bg-dark px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-gray-300 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
