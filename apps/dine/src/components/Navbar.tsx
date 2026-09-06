import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const serviceItems = ['Catering', 'Private Events', 'Reservations']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold uppercase tracking-widest">
          Dine
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}

          {/* Services dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
            >
              Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full z-10 mt-2 w-48 rounded bg-gray-800 py-2 shadow-lg">
                {serviceItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      <nav id="mobile-menu" aria-label="Mobile" className={open ? 'block md:hidden' : 'hidden'}>
        <ul className="space-y-1 px-4 pb-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
