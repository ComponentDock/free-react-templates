import { useState } from 'react'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'

const navLinks = ['Home', 'Category', 'Men', 'Women', 'Latest']
const pageLinks = ['Category', 'Single', 'Cart', 'Checkout', 'Confirmation', 'Login', 'Tracking']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold text-heading">
          Shop<span className="text-brand">craft</span>
        </a>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-heading hover:text-brand"
            >
              {link}
            </a>
          ))}
          <div className="relative">
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-heading hover:text-brand"
              aria-expanded={pagesOpen}
            >
              Pages
            </button>
            {pagesOpen && (
              <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded border border-gray-200 bg-white shadow-lg">
                {pageLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-heading hover:bg-gray-100"
                  >
                    {link}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button aria-label="Search">
            <Search className="h-5 w-5 text-heading" />
          </button>
          <button aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-heading" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200 px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm text-heading hover:text-brand"
            >
              {link}
            </a>
          ))}
          <a href="#pages" className="block py-2 text-sm text-heading hover:text-brand">
            Pages
          </a>
        </div>
      )}
    </nav>
  )
}
