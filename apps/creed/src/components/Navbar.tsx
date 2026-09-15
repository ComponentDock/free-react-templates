import { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = ['Home', 'Ministries', 'Sermons', 'Blog', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-dark-header text-sm text-gray-300">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-3">
          <div className="flex items-center gap-2">
            <span>Next Big Event:</span>
            <span className="font-semibold text-white">Church Camp — Dec 25</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="text-2xl font-bold text-primary-400">
            Creed
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button className="bg-primary-400 text-white hover:bg-primary-500">
              <Heart className="mr-2 h-4 w-4" />
              Send Donations
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-primary-400"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="mt-3 w-full bg-primary-400 text-white hover:bg-primary-500">
              <Heart className="mr-2 h-4 w-4" />
              Send Donations
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
