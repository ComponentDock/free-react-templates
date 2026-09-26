import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Services', 'Work', 'Blog', 'Contact'] as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Fixed top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#"
          className="text-2xl font-bold text-ink transition-colors hover:text-primary-400"
        >
          P.
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:text-primary-400"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex items-center justify-center bg-nav-blue/90 transition-all duration-500',
          isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0',
        )}
      >
        <nav className="text-center">
          <ul className="space-y-6">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-3xl font-light text-white transition-colors hover:text-primary-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
