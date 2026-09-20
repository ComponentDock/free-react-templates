import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['HOME', 'ABOUT', 'ARTISTS', 'BLOG', 'CONTACT']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        <a href="#" className="text-2xl font-extrabold text-white">
          EncoreMix
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-white/80 transition-colors hover:text-white">
            <Search size={20} />
          </button>
          <button
            aria-label="Toggle menu"
            className="text-white md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark">
          <button
            aria-label="Close menu"
            className="absolute top-4 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-lg font-medium text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
