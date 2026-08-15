import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-5 left-0 z-[3] w-full px-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1250px] items-center justify-between"
      >
        <a href="#" className="font-heading text-2xl font-semibold text-white uppercase">
          {brand.name}
          <span className="ml-2 text-sm font-normal text-brand normal-case">{brand.tagline}</span>
        </a>
        <ul className="hidden items-center lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'block px-4 py-5 text-xs font-semibold tracking-[1px] text-white uppercase transition-colors hover:text-brand',
                  i === 0 && 'text-brand',
                )}
                aria-current={i === 0 ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="flex items-center gap-2 p-2 text-xs font-semibold tracking-[1px] text-white uppercase lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
          Menu
        </button>
      </nav>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            role="presentation"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 z-50 h-full w-[300px] bg-black text-white lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-heading text-2xl font-semibold text-white uppercase">
                {brand.name}
              </span>
              <button
                type="button"
                className="p-2 text-white"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="px-6">
              {navLinks.map((link, i) => (
                <li key={link.label} className="border-b border-white/10">
                  <a
                    href={link.href}
                    className={cn('block py-3 text-white', i === 0 && 'text-brand')}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}
