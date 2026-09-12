import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-2 text-navy-900 font-heading text-xl font-bold"
        >
          <GraduationCap className="h-7 w-7 text-coral-500" />
          Learnhub
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading text-sm font-medium text-navy-800 transition hover:text-coral-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#courses"
          className="hidden rounded-full bg-gradient-to-r from-coral-500 to-gold-400 px-6 py-2.5 font-heading text-sm font-semibold text-white shadow transition hover:shadow-lg lg:inline-block"
        >
          Login
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block font-heading text-sm font-medium text-navy-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#courses"
            className="mt-3 inline-block rounded-full bg-gradient-to-r from-coral-500 to-gold-400 px-6 py-2 font-heading text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </header>
  )
}
