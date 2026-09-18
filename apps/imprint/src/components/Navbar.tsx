import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="font-display text-2xl font-bold tracking-wider text-gold-400 uppercase"
          >
            Imprint
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {['About', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="border-t border-white/10 pb-4 pt-2 md:hidden">
            {['About', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
