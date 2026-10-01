import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Episodes', href: '#episodes' },
  { label: 'About', href: '#about' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:h-20 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-xl font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
            <svg viewBox="0 0 24 24" fill="white" aria-hidden="true" className="h-4 w-4">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Soundbite
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href="#episodes"
            className="rounded-full bg-primary-600 px-6 py-2.5 text-sm hover:bg-primary-500"
          >
            Listen Now
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-lg bg-gray-800 p-2.5 text-gray-400 hover:bg-gray-700 hover:text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-gray-800 bg-gray-950 px-4 py-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#episodes"
            className="mt-3 w-full rounded-full bg-primary-600 px-6 py-2.5 text-sm hover:bg-primary-500"
          >
            Listen Now
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
