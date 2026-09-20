import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Courses', 'About', 'Events', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-heading text-2xl font-extrabold uppercase text-heading">
          Cog<span className="text-primary-500">nita</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-xs font-bold uppercase text-gray-500 transition-colors hover:text-primary-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#join"
          className="hidden rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary-600 hover:shadow-lg md:inline-block"
        >
          Join Now
        </a>

        {/* Mobile toggle */}
        <button
          className="text-heading md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-bold uppercase text-gray-500 hover:text-primary-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#join"
            className="mt-3 block rounded-full bg-primary-500 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-primary-600"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  )
}
