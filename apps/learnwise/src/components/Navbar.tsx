import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Instructors', href: '#tutors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-primary">
          Learnwise
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-semibold text-gray-800 hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button aria-label="Search" className="text-gray-400 hover:text-primary">
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#register"
            className="rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
          >
            Register
          </a>
          <a
            href="#login"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
          >
            Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-2 text-sm font-semibold text-gray-800 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex gap-2">
            <a
              href="#register"
              className="rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary"
            >
              Register
            </a>
            <a
              href="#login"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
