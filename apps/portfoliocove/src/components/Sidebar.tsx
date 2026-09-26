import { useState } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * Fixed left sidebar with brand logo and hamburger menu.
 * Toggles a vertical navigation panel on mobile.
 */
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside
      role="complementary"
      className="fixed left-0 top-0 z-40 flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-white pt-8"
    >
      {/* Brand logo */}
      <span className="text-2xl font-bold tracking-tight text-gray-900">Plinth.</span>

      {/* Hamburger toggle */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="mt-8 p-2 text-gray-600 transition-colors hover:text-gray-900"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation panel */}
      {isOpen && (
        <nav className="mt-6 flex flex-col items-center gap-4 text-sm text-gray-500">
          <a href="/" className="transition-colors hover:text-gray-900">
            Home
          </a>
          <a href="#portfolio" className="transition-colors hover:text-gray-900">
            Portfolio
          </a>
          <a href="#about" className="transition-colors hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-gray-900">
            Contact
          </a>
        </nav>
      )}
    </aside>
  )
}
