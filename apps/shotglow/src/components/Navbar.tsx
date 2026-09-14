import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header id="home" className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-heading text-2xl font-bold uppercase tracking-wider text-slate-900"
        >
          Shotglow
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-heading text-sm font-medium uppercase tracking-wider text-slate-900 transition-colors hover:text-gray-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Shopping bag"
            className="text-slate-900 transition-colors hover:text-gray-400"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="text-slate-900 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <ul className={cn('space-y-2 px-4 pb-4 lg:hidden', isOpen ? 'block' : 'hidden')}>
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="block py-2 font-heading text-sm font-medium uppercase tracking-wider text-slate-900 transition-colors hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
