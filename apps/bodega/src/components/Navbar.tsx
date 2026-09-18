import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'

export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#' },
    {
      label: 'Shop',
      href: '#shop',
      children: ['Product Detail', 'Shipping Cart', 'Checkout', 'Order Complete', 'Wishlist'],
    },
    { label: 'Blog', href: '#blog' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-heading tracking-wide">
          Bodega
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-heading"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest text-body">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setShopOpen(true)}
              onMouseLeave={() => link.children && setShopOpen(false)}
            >
              <a href={link.href} className="hover:text-heading transition-colors">
                {link.label}
              </a>
              {link.children && shopOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded py-2 min-w-[180px] z-50">
                  {link.children.map((child) => (
                    <li key={child}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-body hover:bg-light-grey hover:text-heading"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-heading transition-colors"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingCart size={18} />
              Cart [{cartCount}]
            </a>
          </li>
        </ul>

        {/* Mobile nav */}
        {open && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 space-y-3 text-sm uppercase tracking-widest text-body">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 hover:text-heading"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="flex items-center gap-1 py-2 hover:text-heading">
                <ShoppingCart size={18} />
                Cart [{cartCount}]
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
