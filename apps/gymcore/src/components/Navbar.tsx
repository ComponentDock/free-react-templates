import { Dumbbell, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const links = ['Home', 'About', 'Classes', 'Blog', 'Gallery', 'Contacts']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-ink">
          <Dumbbell className="h-7 w-7 text-brand" />
          Gymcore
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="rounded-full px-6 py-2 text-sm">
            Sign Up Today
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="mt-3 w-full rounded-full py-2 text-sm">
            Sign Up Today
          </Button>
        </nav>
      )}
    </header>
  )
}
