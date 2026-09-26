import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" data-testid="navbar">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-[var(--color-heading)]">
          Smithy
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={cn(
            'absolute left-0 right-0 top-full flex flex-col gap-4 bg-white px-6 py-4 shadow-md md:static md:flex-row md:items-center md:gap-8 md:shadow-none',
            !open && 'hidden md:flex',
          )}
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[var(--color-body)] transition-colors hover:text-[var(--color-purple)]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
