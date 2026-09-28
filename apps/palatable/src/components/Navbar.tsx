import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    {
      label: 'Pages',
      href: '#',
      children: ['Home', 'About Us', 'Blog Post', 'Recipe Post', 'Contact'],
    },
    { label: 'Mega Menu', href: '#', mega: true },
    { label: 'Recipes', href: '#' },
    { label: '4 Vegans', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <nav
      className="sticky top-0 z-40 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="#" className="text-2xl font-bold text-brand tracking-tight">
          Palatable
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a
                href={link.href}
                className="text-sm font-semibold text-ink hover:text-brand transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
              {link.children && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded py-2 min-w-[180px] hidden group-hover:block">
                  {link.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-sm text-link hover:text-brand hover:bg-gray-50"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button aria-label="Search" className="text-body hover:text-brand transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-sm font-semibold text-ink hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
