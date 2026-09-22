import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = ['Home', 'Rooms', 'Dining', 'Amenities', 'Blog', 'About', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-40 border-b border-gray-100 bg-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="font-heading text-2xl font-semibold uppercase text-brand-green">
          Regalia
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-[15px] ${
                  item === 'Home'
                    ? 'text-brand-green font-medium'
                    : 'text-gray-600 hover:text-brand-green'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-gray-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-[15px] text-gray-600 hover:text-brand-green"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
