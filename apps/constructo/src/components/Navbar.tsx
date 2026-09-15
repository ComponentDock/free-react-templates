import { Search } from 'lucide-react'
import { useState } from 'react'

const links = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2 font-heading text-xl font-bold text-heading">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-accent text-brand">
            C
          </span>
          <span>Constructo</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-sans text-sm font-bold uppercase text-heading transition-colors hover:text-accent"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center bg-accent text-white transition-colors hover:bg-accent-dark"
            >
              <Search className="h-4 w-4" />
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="block h-0.5 w-6 bg-heading" />
          <span className="block h-0.5 w-6 bg-heading" />
          <span className="block h-0.5 w-6 bg-heading" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-sans text-sm font-bold uppercase text-heading hover:text-accent"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
