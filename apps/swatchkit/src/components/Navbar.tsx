import { useState } from 'react'
import { CloudDownload, Grid3x3, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const componentLinks = ['Buttons', 'Cards', 'Forms', 'Modals'] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={cn('fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm', 'transition-colors')}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-2xl font-bold text-white">
          Swatchkit
        </a>

        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 text-sm text-white transition-colors hover:text-brand"
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              <Grid3x3 className="h-4 w-4" aria-hidden="true" />
              Components
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', menuOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {menuOpen && (
              <ul className="absolute right-0 top-full mt-2 w-40 rounded-lg bg-gray-900 py-2 shadow-lg">
                {componentLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#download"
            className={cn(
              'inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white',
              'transition-colors hover:bg-brand-dark',
            )}
          >
            <CloudDownload className="h-4 w-4" aria-hidden="true" />
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}
