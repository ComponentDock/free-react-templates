import { Search } from 'lucide-react'

interface NavbarProps {
  onSearchToggle: () => void
}

export function Navbar({ onSearchToggle }: NavbarProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <span className="text-xl font-bold text-brand">Queryvane</span>

        <nav className="flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={onSearchToggle}
            aria-label="Toggle search"
            className="text-gray-500 transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  )
}
