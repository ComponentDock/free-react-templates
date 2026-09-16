import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Practice Areas', 'Cases', 'Attorneys', 'Blog', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-bg-dark sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white text-xl font-bold tracking-tight">
            Chambers
          </a>
          <button
            className="sm:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul
            className={cn(
              'sm:flex sm:items-center sm:gap-6',
              isOpen ? 'block' : 'hidden',
              'absolute sm:relative top-16 sm:top-0 left-0 right-0 bg-bg-dark sm:bg-transparent z-40',
              'sm:flex-row flex-col sm:py-0 py-4 px-4 sm:px-0',
            )}
          >
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block py-2 sm:py-0 text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
