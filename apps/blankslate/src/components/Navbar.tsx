import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header role="banner" className="sticky top-0 z-50 bg-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-xl font-bold text-white">
          BlankSlate
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-[30px] bg-brand px-6 py-2 text-sm font-semibold text-dark transition-colors hover:bg-brand-dark lg:inline-block"
        >
          Get in Touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-dark px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-white/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 block rounded-[30px] bg-brand px-6 py-2 text-center text-sm font-semibold text-dark"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  )
}
