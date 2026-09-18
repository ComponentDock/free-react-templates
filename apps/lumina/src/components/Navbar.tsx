import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#" className="text-xl font-semibold text-ink dark:text-white">
          Lumina
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          <a href="#hero" className="text-sm font-medium text-mist transition hover:text-brand">
            Home
          </a>
          <a href="#history" className="text-sm font-medium text-mist transition hover:text-brand">
            About
          </a>
          <a href="#services" className="text-sm font-medium text-mist transition hover:text-brand">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium text-mist transition hover:text-brand">
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6 text-ink" /> : <Menu className="h-6 w-6 text-ink" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-4 bg-white px-4 pb-4 dark:bg-gray-950 md:hidden">
          <a
            href="#hero"
            className="text-sm font-medium text-mist transition hover:text-brand"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#history"
            className="text-sm font-medium text-mist transition hover:text-brand"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-mist transition hover:text-brand"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-mist transition hover:text-brand"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
