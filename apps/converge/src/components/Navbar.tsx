import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Schedule', 'News', 'Contact']

export interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 bg-navy text-white', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          converge<span className="text-primary-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Login
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Register
          </a>
          <a
            href="#tickets"
            className="rounded bg-primary-400 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Get Tickets
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-medium text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#tickets"
            className="mt-4 block rounded bg-primary-400 px-4 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get Tickets
          </a>
        </nav>
      )}
    </header>
  )
}
