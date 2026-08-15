import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white">
          Convoke
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-8 text-base font-semibold capitalize text-white transition-colors hover:text-white/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="inline-flex items-center justify-center border-2 border-white bg-transparent px-10 py-3 text-base font-medium capitalize text-white transition-colors hover:bg-white hover:text-black"
          >
            Buy Ticket
          </a>
        </nav>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className={cn('border-t border-white/20 bg-white/95 px-4 pb-6 pt-2 lg:hidden')}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-heading"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center border-2 border-heading bg-transparent px-10 py-3 text-base font-medium capitalize text-heading transition-colors hover:bg-heading hover:text-white"
          >
            Buy Ticket
          </a>
        </nav>
      )}
    </header>
  )
}
