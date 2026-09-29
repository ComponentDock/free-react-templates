import { Search } from 'lucide-react'

export interface NavbarProps {
  onToggleSearch: () => void
  searchOpen: boolean
}

export function Navbar({ onToggleSearch, searchOpen }: NavbarProps) {
  return (
    <nav
      className="relative z-2 border-b border-gray-300 bg-white shadow-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <h3 className="m-0 p-0 text-lg font-normal">
          <a href="#" className="text-brand no-underline hover:underline">
            Brand
          </a>
        </h3>
        <ul className="flex items-center gap-0 p-0" style={{ listStyle: 'none' }}>
          <li>
            <a
              href="#"
              className="inline-block px-5 py-6 text-sm text-gray-800 no-underline hover:text-brand"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-5 py-6 text-sm text-gray-800 no-underline hover:text-brand"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-5 py-6 text-sm text-gray-800 no-underline hover:text-brand"
            >
              Contact
            </a>
          </li>
          <li className="ml-6 flex items-center">
            <button
              type="button"
              onClick={onToggleSearch}
              aria-expanded={searchOpen}
              aria-label="Toggle search"
              className="cursor-pointer bg-transparent p-2 text-gray-800 hover:text-brand"
            >
              <Search size={20} strokeWidth={2} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
