import { useState } from 'react'
import { Menu, X, Search, ShoppingCart, User, Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#featured' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const iconLinks = [
  { label: 'Search', href: '#', Icon: Search },
  { label: 'Cart', href: '#', Icon: ShoppingCart },
  { label: 'Account', href: '#', Icon: User },
  { label: 'Wishlist', href: '#', Icon: Heart },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-heading text-xl font-bold uppercase tracking-widest text-neutral-800"
        >
          Cartly
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium uppercase tracking-wide text-neutral-700 transition-colors hover:text-lime-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {/* Desktop icons */}
          <div className="hidden items-center gap-4 md:flex">
            {iconLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-neutral-600 transition-colors hover:text-lime-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-neutral-700 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
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
                className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-neutral-700 hover:bg-lime-50 hover:text-lime-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
