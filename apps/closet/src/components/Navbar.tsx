import { useState } from 'react'
import { Menu, X, Search, User, ShoppingCart, Phone } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 text-ink">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="text-xl font-bold">Closet</span>
          </a>
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

        {/* Search bar — desktop */}
        <div className="hidden md:block">
          <div className="flex items-center rounded-full border border-gray-300 px-4 py-2">
            <input
              type="text"
              placeholder="Search Item"
              className="w-48 bg-transparent text-sm text-body outline-none placeholder:text-mist"
              aria-label="Search items"
            />
            <Search size={16} className="ml-2 text-mist" aria-hidden="true" />
          </div>
        </div>

        {/* Right icons — desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="relative text-body transition-colors hover:text-brand"
            aria-label="User account"
          >
            <User size={20} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              1
            </span>
          </a>
          <a
            href="#"
            className="text-body transition-colors hover:text-brand"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} />
          </a>
          <div className="flex items-center gap-2 text-sm text-body">
            <Phone size={16} aria-hidden="true" />
            <span>+1 912-252-7350</span>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <div className="mb-3 flex items-center rounded-full border border-gray-300 px-4 py-2">
            <input
              type="text"
              placeholder="Search Item"
              className="w-full bg-transparent text-sm text-body outline-none placeholder:text-mist"
              aria-label="Search items"
            />
            <Search size={16} className="ml-2 text-mist" aria-hidden="true" />
          </div>
          <div className="flex items-center justify-around py-2">
            <a
              href="#"
              className="text-body transition-colors hover:text-brand"
              aria-label="User account"
            >
              <User size={20} />
            </a>
            <a
              href="#"
              className="text-body transition-colors hover:text-brand"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
            </a>
            <div className="flex items-center gap-1 text-sm text-body">
              <Phone size={14} aria-hidden="true" />
              <span>+1 912-252-7350</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
