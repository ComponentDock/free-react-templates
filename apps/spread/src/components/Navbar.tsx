import { useState } from 'react'
import { Search } from 'lucide-react'

const navLinks = ['Home', 'Archive', 'Pages', 'Mega', 'Categories']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-nav-bg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-bold text-xl text-white">
          Spread
        </a>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          {navLinks.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={`hover:text-brand transition-colors ${i === 0 ? 'text-brand' : ''}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          aria-label="Search"
          className="text-gray-400 hover:text-brand transition-colors"
        >
          <Search className="w-5 h-5" />
        </a>
      </div>
      {mobileOpen && (
        <ul className="md:hidden bg-nav-bg border-t border-gray-700 px-4 pb-4">
          {navLinks.map((link, i) => (
            <li key={link} className="py-2 border-b border-gray-800 last:border-0">
              <a href="#" className={`text-sm ${i === 0 ? 'text-brand' : 'text-gray-300'}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
