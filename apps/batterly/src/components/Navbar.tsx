import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Product', href: '#product' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-heading text-xl font-bold text-brand">
          Batterly
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold tracking-wide text-gray-700 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+10567453095" className="text-sm font-medium text-gray-600">
            +10 (56) 745 3095
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-brand px-5 py-2 font-heading text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Order Online
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-gray-700 md:hidden"
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
        <ul className="space-y-1 border-t px-4 pb-4 pt-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-brand/5 hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+10567453095"
              className="block rounded px-2 py-2 text-sm font-medium text-gray-600"
            >
              +10 (56) 745 3095
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
