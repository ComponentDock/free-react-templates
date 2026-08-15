import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-[#343a40] shadow-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4"
      >
        <a href="#home" className="text-2xl font-bold text-white">
          Prime<span className="text-brand">.</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-3 py-2 text-sm font-normal text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden rounded-full border border-white/70 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-[#343a40] lg:inline-block"
          >
            Get a Quote
          </a>
          <button
            type="button"
            className="p-2 text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            role="presentation"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 z-50 flex h-full w-[300px] flex-col bg-white shadow-xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <span className="text-2xl font-bold text-black">
                Prime<span className="text-brand">.</span>
              </span>
              <button
                type="button"
                className="p-2 text-black"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-6 py-2">
              {navLinks.map((link) => (
                <li key={link.label} className="border-b border-gray-100">
                  <a
                    href={link.href}
                    className="block py-3 text-black transition-colors hover:text-brand"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-100 p-6">
              <a
                href="#quote"
                className="block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
