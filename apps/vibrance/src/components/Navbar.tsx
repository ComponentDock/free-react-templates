import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-white">
          Vibrance
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-brand-pink"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden">
          <ul className="flex flex-col gap-4 bg-black/80 px-6 py-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-brand-pink"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
