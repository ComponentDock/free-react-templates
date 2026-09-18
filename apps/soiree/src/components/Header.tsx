import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'Speakers', 'Events', 'News', 'Contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-[var(--color-heading)]">
          Soiree
        </a>

        <button
          className="md:hidden p-2 text-[var(--color-heading)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={cn(
            'md:flex md:items-center md:gap-6',
            menuOpen
              ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-md p-4'
              : 'hidden',
          )}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--color-body)] hover:text-[var(--color-brand)] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="p-2 text-[var(--color-body)] hover:text-[var(--color-brand)] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </nav>
      </div>
    </header>
  )
}
