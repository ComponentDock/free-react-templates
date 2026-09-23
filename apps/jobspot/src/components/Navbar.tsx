import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Home', 'Find Jobs', 'Candidates', 'Blog', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="text-2xl font-bold">
          JobSpot<span className="text-brand-green">.</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-green"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="rounded bg-brand-green px-4 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-green-500"
          >
            Post a Job
          </a>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-700 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-green"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 rounded bg-brand-green px-4 py-2 text-center text-sm font-bold uppercase text-white transition-colors hover:bg-green-500"
            >
              Post a Job
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
