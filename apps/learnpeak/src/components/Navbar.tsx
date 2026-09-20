import { Search, Menu } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = ['Home', 'About Us', 'Courses', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-dark text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-baseline gap-1 text-2xl font-bold tracking-tight">
          <span className="text-brand">●</span>
          <span>learn</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium uppercase tracking-wider hover:text-brand transition-colors"
            >
              {link}
            </a>
          ))}
          <button aria-label="Search" className="hover:text-brand transition-colors">
            <Search size={18} />
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden hover:text-brand transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-alt px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-sm font-medium uppercase tracking-wider hover:text-brand transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
