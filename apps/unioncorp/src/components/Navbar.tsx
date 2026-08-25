import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  className?: string
}

const navLinks = ['Home', 'About', 'Services', 'Work', 'Pricing', 'Blog', 'Contact']

export function Navbar({ className }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={cn('bg-white shadow-sm sticky top-0 z-40', className)}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col leading-tight text-ink">
          <span className="text-xl font-bold">Unioncorp.</span>
          <span className="text-xs text-smoke">Finance & Consultation</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-ink hover:text-primary-400 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-primary-400 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-medium text-ink hover:text-primary-400"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block rounded-lg bg-primary-400 px-5 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
