import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['About', 'Blog', 'Contact']
const SHOP_SUB_LINKS = ['Vegetables', 'Fruits', 'Juices', 'Dried']

export function Navbar() {
  const [shopOpen, setShopOpen] = useState(false)

  return (
    <nav className="bg-ink text-white py-4 px-4" data-testid="navbar">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-brand font-serif">
          Greenplate
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-brand transition-colors">
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setShopOpen((o) => !o)}
              className="flex items-center gap-1 hover:text-brand transition-colors"
              aria-expanded={shopOpen}
              aria-label="Shop"
            >
              Shop
              <svg
                className={cn('w-3 h-3 transition-transform', shopOpen && 'rotate-180')}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {shopOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-ink shadow-lg rounded py-2 min-w-[160px] z-50">
                {SHOP_SUB_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-paper transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-brand transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#cart"
          className="relative hover:text-brand transition-colors"
          aria-label="Shopping cart"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-brand text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>
        </a>
      </div>
    </nav>
  )
}
