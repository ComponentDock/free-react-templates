import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#', active: true },
  {
    label: 'Tours',
    href: '#tours',
    children: [
      { label: 'Destination', href: '#' },
      { label: 'Cruises', href: '#' },
      { label: 'Hotels', href: '#' },
      { label: 'Booking', href: '#' },
    ],
  },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 w-full">
      <div className="flex items-center justify-between px-6 py-8 md:px-10 lg:px-16">
        <a href="#" className="text-2xl font-semibold uppercase text-white">
          Voyager
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="group relative">
              <a
                href={link.href}
                className={`px-3 py-2 text-[15px] transition-colors ${
                  link.active ? 'text-primary-500' : 'text-white/70 hover:text-primary-500'
                }`}
              >
                {link.label}
              </a>
              {link.children && (
                <ul className="absolute left-0 top-full z-50 mt-1 hidden w-36 rounded border border-gray-800 bg-black p-4 shadow-xl group-hover:block">
                  {link.children.map((child) => (
                    <li key={child.label} className="mb-2 last:mb-0">
                      <a
                        href={child.href}
                        className="block text-[13px] text-gray-400 transition-colors hover:text-white"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="space-y-2 border-t border-gray-800 bg-black px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-white/70 hover:text-primary-500"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
