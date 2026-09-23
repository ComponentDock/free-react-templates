import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Features', 'Pricing', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute top-0 z-10 w-full" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-white">
          Swiftly
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-brand hover:bg-brand md:inline-block"
        >
          Get Started
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#1a1a2e] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-white hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-3 block rounded-full border border-white/20 px-5 py-2 text-center text-sm font-medium text-white hover:border-brand hover:bg-brand"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
