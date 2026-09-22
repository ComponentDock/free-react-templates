import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_ITEMS = ['Home', 'Rooms', 'Dining & Bar', 'Amenities', 'Blog', 'About', 'Contact']

const ROOM_DROPDOWN = ['Suite', 'Double Room', 'Family Room', 'Classic Room']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [roomsOpen, setRoomsOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-40 border-b border-gray-100 bg-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="font-heading text-2xl font-semibold uppercase text-black">
          LuxStay
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-3 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="relative">
              {item === 'Rooms' ? (
                <div
                  className="flex cursor-pointer items-center gap-1 px-3 py-2 text-[15px] text-gray-700 hover:text-brand-blue"
                  onMouseEnter={() => setRoomsOpen(true)}
                  onMouseLeave={() => setRoomsOpen(false)}
                >
                  {item}
                  <ChevronDown size={14} />
                  {roomsOpen && (
                    <ul className="absolute left-0 top-full z-50 min-w-[180px] bg-black py-2 text-sm text-gray-300 shadow-lg">
                      {ROOM_DROPDOWN.map((room) => (
                        <li key={room}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-800 hover:text-white"
                          >
                            {room}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block px-3 py-2 text-[15px] ${
                    item === 'Home' ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'
                  }`}
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-2 text-[15px] text-gray-700 hover:text-brand-blue"
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
