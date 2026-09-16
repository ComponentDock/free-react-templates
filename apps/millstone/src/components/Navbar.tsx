import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Industries', 'Works', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="font-heading text-2xl font-bold text-primary-400 tracking-tight">
          Millstone<span className="text-navy">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm font-medium text-heading hover:text-primary-400 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-primary-400 text-white px-6 py-2.5 rounded font-heading text-sm font-semibold uppercase tracking-wide hover:bg-primary-500 transition-colors"
        >
          Get A Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <ul className="flex flex-col px-4 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm font-medium text-heading hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex bg-primary-400 text-white px-6 py-2.5 rounded font-heading text-sm font-semibold uppercase"
              >
                Get A Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
