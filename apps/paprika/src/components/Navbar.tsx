import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Menu', 'Gallery', 'Events', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-[family-name:var(--font-cursive)] text-[#b10400] text-2xl">
          Paprika
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#333] text-sm font-semibold uppercase hover:text-[#b10400] transition-colors"
            >
              {link}
            </a>
          ))}
          <button
            aria-label="Shopping cart"
            className="text-[#333] hover:text-[#b10400] transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-[#333]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-4 py-3 text-[#333] text-sm font-semibold uppercase hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
