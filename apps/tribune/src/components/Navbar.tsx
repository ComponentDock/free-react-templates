import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Speakers', 'Schedule', 'Blog', 'Contact']

interface NavbarProps {
  brand?: string
}

export function Navbar({ brand = 'Tribune' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-dark-bg text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="text-xl font-bold text-white">
          {brand}.
        </a>
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={cn('md:flex md:items-center', mobileOpen ? 'block' : 'hidden')}>
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
              >
                Buy ticket
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
