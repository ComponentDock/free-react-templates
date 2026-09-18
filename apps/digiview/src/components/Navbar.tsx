import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'Services', 'Projects', 'About', 'Testimony', 'Blog', 'Contact']

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={cn('fixed top-0 z-50 w-full bg-darker text-white', className)}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#" className="text-2xl font-bold tracking-tight">
          Digi<span className="text-brand">View</span>
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-sm font-medium text-gray-300 transition-colors hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
