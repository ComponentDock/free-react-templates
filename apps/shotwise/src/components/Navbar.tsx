import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            Shotwise
          </a>
          <nav className="hidden items-center gap-8 md:flex" data-testid="desktop-nav">
            <a
              href="#home"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Contact
            </a>
          </nav>
          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <nav className="pb-4 md:hidden" data-testid="mobile-nav">
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm font-medium text-white/90">
                Home
              </a>
              <a href="#about" className="text-sm font-medium text-white/90">
                About
              </a>
              <a href="#services" className="text-sm font-medium text-white/90">
                Services
              </a>
              <a href="#contact" className="text-sm font-medium text-white/90">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
