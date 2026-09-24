import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const MENU_ITEMS = [
  { label: 'Home', active: true },
  { label: 'Politics' },
  { label: 'Breaking News' },
  { label: 'Business' },
  { label: 'Technology' },
  { label: 'Health' },
  { label: 'Travel' },
  { label: 'Sports' },
  { label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-dark-bg" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/" className="text-lg font-bold text-white">
          BroadSheet
        </a>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="hidden gap-1 md:flex">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  item.active
                    ? 'border-b-2 border-brand text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="border-t border-gray-600 px-4 pb-4 md:hidden">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`block py-2 text-sm ${
                  item.active ? 'font-bold text-brand' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
