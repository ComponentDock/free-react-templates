import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Destination', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#" className="text-xl font-bold text-white">
          Getaway<span className="ml-1 text-sm font-light text-sunset-400">Travel Agency</span>
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="rounded bg-sunset-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sunset-600"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="border-t border-gray-700 bg-gray-900 px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm font-medium text-gray-300 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="mt-2 block rounded bg-sunset-700 px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-sunset-600"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
