import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = ['Home', 'Shop', 'Pages', 'About', 'Contacts']

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-surface-dark text-white text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <a href="#signin" className="hover:text-brand-500 transition-colors">
              Sign in
            </a>
            <a href="#faqs" className="hover:text-brand-500 transition-colors">
              FAQs
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Free shipping, 30-day return or refund guarantee.</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold tracking-tight text-surface-dark">
            Threadline
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-brand-500 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hover:text-brand-500 transition-colors">
              <Search size={20} />
            </button>
            <a
              href="#cart"
              aria-label="Shopping cart"
              className="hover:text-brand-500 transition-colors relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </a>
            {/* Mobile menu toggle */}
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden hover:text-brand-500 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <ul className="flex flex-col p-4 gap-4 text-sm font-semibold uppercase">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 hover:text-brand-500 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
