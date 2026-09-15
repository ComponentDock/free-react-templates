import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-primary-400">
          GiveHope
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href="#causes"
          className="hidden rounded-full border-2 border-primary-400 bg-transparent px-6 py-2 text-sm font-semibold text-primary-400 transition-colors hover:bg-primary-400 hover:text-white lg:inline-flex"
        >
          Learn More
        </ButtonLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 items-center justify-center rounded text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-navy px-4 pb-4 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#causes"
            onClick={() => setOpen(false)}
            className="mt-3 block w-full rounded-full border-2 border-primary-400 bg-transparent px-6 py-2 text-center text-sm font-semibold text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
          >
            Learn More
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
