import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About Us', 'Our Menu', 'Reserve A Table', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {/* Fixed header bar */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-white/95 px-4 py-3 backdrop-blur-sm transition-all">
        <div className="w-1/3" />
        <div className="w-1/3 text-center">
          <a
            href="#home"
            className="inline-block border-2 border-ink px-3 py-1 font-display text-3xl font-bold text-ink"
          >
            T
          </a>
        </div>
        <div className="w-1/3 text-right">
          <button
            onClick={handleToggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center text-ink"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Sidebar panel — conditionally rendered, not hidden via transform */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[100] bg-black/30"
            onClick={handleClose}
            aria-hidden="true"
          />
          <nav
            className="fixed right-0 top-0 z-[101] h-full w-72 bg-white shadow-lg"
            aria-label="Sidebar navigation"
          >
            <div className="mt-36 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleClose}
                  className="text-lg font-medium text-ink transition-colors hover:text-brand"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  )
}
