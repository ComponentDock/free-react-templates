import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Services', 'Work', 'About']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="relative z-10 border-b border-gray-100" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-heading">
          Sketch
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#get-started"
          className="hidden rounded-full border border-gray-200 px-6 py-2 text-sm font-medium text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white md:inline-block"
        >
          Get Started
        </a>

        <button
          type="button"
          className="text-gray-900 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-gray-900 hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-started"
            className="mt-3 block rounded-full border border-gray-200 px-6 py-2 text-center text-sm font-medium text-brand"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
