import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[69%] px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-white font-semibold text-xl tracking-wide">
          Reimagine
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-white text-sm font-light hover:text-white/80 transition-colors"
          >
            Home
          </a>
          <a
            href="#generic"
            className="text-white text-sm font-light hover:text-white/80 transition-colors"
          >
            Generic
          </a>
          <a
            href="#elements"
            className="text-white text-sm font-light hover:text-white/80 transition-colors"
          >
            Elements
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-white p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[--color-brand] px-4 pb-4">
          <a href="#home" className="block py-2 text-white text-sm font-light">
            Home
          </a>
          <a href="#generic" className="block py-2 text-white text-sm font-light">
            Generic
          </a>
          <a href="#elements" className="block py-2 text-white text-sm font-light">
            Elements
          </a>
        </nav>
      )}
    </header>
  )
}
