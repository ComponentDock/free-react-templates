import { useState } from 'react'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'Shop', 'Blog', 'Pages', 'Contact']
const shopDropdown = [
  'Shop Category',
  'Product Details',
  'Product Checkout',
  'Shopping Cart',
  'Confirmation',
]
const blogDropdown = ['Blog', 'Blog Details']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-heading">
          Catalogly
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <div
              key={link}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-medium text-heading transition-colors hover:text-brand',
                  link === 'Home' && 'text-brand',
                )}
              >
                {link}
                {(link === 'Shop' || link === 'Blog') && (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              {link === 'Shop' && openDropdown === 'Shop' && (
                <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded border border-border bg-white py-2 shadow-lg">
                  {shopDropdown.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-ink hover:bg-bg-light hover:text-brand"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
              {link === 'Blog' && openDropdown === 'Blog' && (
                <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded border border-border bg-white py-2 shadow-lg">
                  {blogDropdown.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-ink hover:bg-bg-light hover:text-brand"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-heading hover:text-brand transition-colors">
            <Search size={20} />
          </button>
          <button
            aria-label="Cart"
            className="relative text-heading hover:text-brand transition-colors"
          >
            <ShoppingCart size={20} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
              0
            </span>
          </button>
          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="text-heading hover:text-brand transition-colors md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={cn(
                'block py-2 text-sm font-medium text-heading hover:text-brand',
                link === 'Home' && 'text-brand',
              )}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
