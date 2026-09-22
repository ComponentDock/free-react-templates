import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About', 'Features', 'Doctors', 'Departments', 'Blog', 'Pages', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-[#333333]">
          <svg
            className="h-8 w-8 text-[#76b900]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          <span>MedLink</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex" role="menubar">
          {navLinks.map((link) => (
            <li key={link} role="none">
              <a
                href={`#${link.toLowerCase()}`}
                role="menuitem"
                className="text-sm font-medium text-[#333333] hover:text-[#76b900] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded text-[#333333] hover:bg-gray-100 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <ul
        id="mobile-menu"
        className={cn('space-y-2 px-4 pb-4 lg:hidden', isOpen ? 'block' : 'hidden')}
        role="menu"
      >
        {navLinks.map((link) => (
          <li key={link} role="none">
            <a
              href={`#${link.toLowerCase()}`}
              role="menuitem"
              className="block py-2 text-sm font-medium text-[#333333] hover:text-[#76b900] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
