import { useState } from 'react'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Promotion', href: '#promotion' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm" aria-label="Main">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold tracking-tight text-gray-900">
          shop<span className="text-coral-500">lane</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex" role="menubar">
          {links.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                className="text-sm font-medium capitalize text-gray-800 transition-colors hover:text-coral-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" className="text-gray-600 hover:text-coral-500">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Account" className="text-gray-600 hover:text-coral-500">
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative text-gray-600 hover:text-coral-500"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-coral-500 text-[10px] font-bold text-white">
              2
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-gray-600 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <ul
        id="mobile-nav"
        className={cn('space-y-1 border-t px-4 pb-4 pt-2 md:hidden', open ? 'block' : 'hidden')}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded px-2 py-2 text-sm font-medium capitalize text-gray-800 hover:bg-gray-100 hover:text-coral-500"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
