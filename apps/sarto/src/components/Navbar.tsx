import { useState } from 'react'
import { Menu, X, Search, User, Heart, ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pages', href: '#pages' },
  { label: 'Contact', href: '#contact' },
]

const iconButtons = [
  { label: 'Search', Icon: Search },
  { label: 'Account', Icon: User },
  { label: 'Wishlist', Icon: Heart },
  { label: 'Cart', Icon: ShoppingCart },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          className="py-4 text-xl font-bold uppercase tracking-widest text-gray-900 font-accent"
        >
          Sarto
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="py-6 text-xs font-medium uppercase tracking-wide text-gray-900 transition-colors hover:text-brand-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop icons */}
        <div className="hidden items-center md:flex">
          {iconButtons.map(({ label, Icon }, i) => (
            <span key={label} className="flex items-center">
              {i > 0 && <span className="mx-2 h-10 w-px bg-gray-200" />}
              <button
                type="button"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-500"
              >
                <Icon className="h-5 w-5" />
              </button>
            </span>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-gray-900 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-gray-900 hover:bg-gray-100 hover:text-brand-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  )
}
