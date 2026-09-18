import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Directory', 'About', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-primary-500 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight">
          Scout
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`rounded-full px-4 py-1 transition-colors ${
                    link === 'Home'
                      ? 'bg-white text-primary-500'
                      : 'text-white hover:text-primary-100'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-primary-400 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="block rounded px-2 py-1 hover:bg-primary-400">
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
