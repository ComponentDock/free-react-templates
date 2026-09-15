import { useState } from 'react'

const navLinks = ['Home', 'About', 'Services', 'How It Works', 'Pricing Plans', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900 text-white" data-testid="navbar">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold">
          Virtual Assistant
        </a>
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm transition-colors hover:text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm transition-colors hover:text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
