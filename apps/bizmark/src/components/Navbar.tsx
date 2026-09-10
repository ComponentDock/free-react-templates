import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = ['Home', 'About', 'Blog', 'Page', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-heading">
            Bizmark
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-medium text-body transition-colors hover:text-brand-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="text-heading md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="mt-4 flex flex-col gap-4 md:hidden">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block font-medium text-body transition-colors hover:text-brand-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
