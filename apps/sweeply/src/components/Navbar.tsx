import { useState } from 'react'

const navLinks = ['Home', 'About', 'Pricing', 'Services', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-dark text-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-wide text-white hover:text-accent transition-colors"
        >
          <span className="fa fa-broom mr-1" aria-hidden="true" />
          Sweeply
        </a>
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="fa fa-bars" />
        </button>
        <div className={`hidden sm:flex items-center gap-6`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-accent text-dark px-5 py-2 rounded-md text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            Request A Quote
          </a>
        </div>
      </div>
      {open && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              {link}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-accent text-dark px-5 py-2 rounded-md text-sm font-semibold text-center hover:bg-accent-dark"
          >
            Request A Quote
          </a>
        </div>
      )}
    </nav>
  )
}
