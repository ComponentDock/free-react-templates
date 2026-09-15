import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'Shop', 'About', 'Blog', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-dark py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-2xl font-bold text-white">
          Warehaus
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-gray-300 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Shopping cart"
            className="relative text-gray-300 transition-colors hover:text-white"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              3
            </span>
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-gray-300 hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 space-y-2 px-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm text-gray-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
