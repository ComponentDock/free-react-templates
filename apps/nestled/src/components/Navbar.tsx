import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Buy', 'Rent', 'About', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-heading">
          Nestled<span className="text-brand">.</span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="px-4 py-2 text-sm font-semibold text-heading hover:text-brand transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="px-5 py-2 text-sm font-semibold text-heading border border-gray-200 rounded-full hover:bg-brand hover:text-white hover:border-brand transition-colors"
          >
            Sign up
          </a>
          <a
            href="#"
            className="px-5 py-2 text-sm font-semibold text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
          >
            Login
          </a>
        </div>
        <button
          className="lg:hidden text-heading text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-semibold text-heading hover:text-brand"
            >
              {l}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="px-5 py-2 text-sm font-semibold text-heading border border-gray-200 rounded-full hover:bg-brand hover:text-white hover:border-brand transition-colors"
            >
              Sign up
            </a>
            <a
              href="#"
              className="px-5 py-2 text-sm font-semibold text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
