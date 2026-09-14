import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  {
    label: 'Shop',
    href: '#shop',
    children: [
      { label: 'Product Detail', href: '#' },
      { label: 'Shipping Cart', href: '#' },
      { label: 'Checkout', href: '#' },
    ],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="font-display text-2xl font-bold text-ink">
          Bazaar
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-body transition-colors hover:text-brand"
              >
                {link.label}
              </a>
              {link.children && (
                <ul className="invisible absolute left-0 top-full z-10 mt-1 min-w-[180px] rounded border border-gray-200 bg-white py-2 shadow-lg group-hover:visible">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2 text-sm text-body transition-colors hover:bg-slate hover:text-brand"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a
              href="#cart"
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-body transition-colors hover:text-brand"
            >
              <ShoppingCart size={16} aria-hidden="true" />
              Cart [0]
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-sm font-medium uppercase tracking-wide text-body transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cart"
              className="flex items-center gap-1 py-2 text-sm font-medium uppercase tracking-wide text-body transition-colors hover:text-brand"
            >
              <ShoppingCart size={16} aria-hidden="true" />
              Cart [0]
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
