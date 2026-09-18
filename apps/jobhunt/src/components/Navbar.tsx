import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="bg-bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-brand-dark font-bold text-xl">JobHunt</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#"
                className="text-brand-dark font-bold uppercase text-sm hover:text-brand transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-brand-dark font-bold uppercase text-sm hover:text-brand transition-colors"
              >
                Browse Job
              </a>
              <a
                href="#"
                className="text-brand-dark font-bold uppercase text-sm hover:text-brand transition-colors"
              >
                Page
              </a>
              <a
                href="#"
                className="text-brand-dark font-bold uppercase text-sm hover:text-brand transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-brand-dark font-bold uppercase text-sm hover:text-brand transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-brand-green text-white px-5 py-3 rounded text-sm font-bold uppercase hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                Post A Job
              </a>
              <a
                href="#"
                className="border-2 border-brand text-brand px-8 py-3 rounded text-sm font-bold uppercase hover:bg-brand hover:text-white transition-colors"
              >
                Log In
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-brand-dark"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-brand-dark font-bold uppercase text-sm">
                  Home
                </a>
                <a href="#" className="text-brand-dark font-bold uppercase text-sm">
                  Browse Job
                </a>
                <a href="#" className="text-brand-dark font-bold uppercase text-sm">
                  Page
                </a>
                <a href="#" className="text-brand-dark font-bold uppercase text-sm">
                  Blog
                </a>
                <a href="#" className="text-brand-dark font-bold uppercase text-sm">
                  Contact
                </a>
                <div className="flex gap-4 mt-2">
                  <a
                    href="#"
                    className="bg-brand-green text-white px-5 py-3 rounded text-sm font-bold uppercase"
                  >
                    Post A Job
                  </a>
                  <a
                    href="#"
                    className="border-2 border-brand text-brand px-8 py-3 rounded text-sm font-bold uppercase"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
