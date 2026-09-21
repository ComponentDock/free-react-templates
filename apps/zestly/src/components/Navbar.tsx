import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="font-display text-3xl text-brand-pink">
          Zestly
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="font-body text-sm font-medium text-body hover:text-brand-pink">
            Home
          </a>
          <a
            href="#recipes"
            className="font-body text-sm font-medium text-body hover:text-brand-pink"
          >
            Recipes
          </a>
          <a
            href="#videos"
            className="font-body text-sm font-medium text-body hover:text-brand-pink"
          >
            Videos
          </a>
          <a
            href="#dishes"
            className="font-body text-sm font-medium text-body hover:text-brand-pink"
          >
            Dishes
          </a>
          <a
            href="#feedback"
            className="font-body text-sm font-medium text-body hover:text-brand-pink"
          >
            Feedback
          </a>
          <a
            href="#contact"
            className="font-body text-sm font-medium text-body hover:text-brand-pink"
          >
            Contact
          </a>
        </nav>

        {/* Search + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-secondary hover:text-brand-pink"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="text-secondary hover:text-brand-pink md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <a href="#home" className="block py-2 font-body text-sm text-body hover:text-brand-pink">
            Home
          </a>
          <a
            href="#recipes"
            className="block py-2 font-body text-sm text-body hover:text-brand-pink"
          >
            Recipes
          </a>
          <a
            href="#videos"
            className="block py-2 font-body text-sm text-body hover:text-brand-pink"
          >
            Videos
          </a>
          <a
            href="#dishes"
            className="block py-2 font-body text-sm text-body hover:text-brand-pink"
          >
            Dishes
          </a>
          <a
            href="#feedback"
            className="block py-2 font-body text-sm text-body hover:text-brand-pink"
          >
            Feedback
          </a>
          <a
            href="#contact"
            className="block py-2 font-body text-sm text-body hover:text-brand-pink"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
