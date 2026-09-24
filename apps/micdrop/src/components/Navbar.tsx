import { Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = ['Episodes', 'About', 'Sponsors', 'Newsletter', 'Blog', 'Contact']

function MicIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z"
        fill="#dc2626"
      />
      <path
        d="M17 10V12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12V10H5V12C5 15.53 7.61 18.43 11 18.92V21H13V18.92C16.39 18.43 19 15.53 19 12V10H17Z"
        fill="#dc2626"
      />
    </svg>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-dark-bg/95 backdrop-blur"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-2" aria-label="MicDrop home">
          <MicIcon />
          <span className="text-xl font-bold text-white">MicDrop</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle dark mode"
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Moon size={20} />
          </button>
          <a
            href="#"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Listen Now
          </a>
          <button
            aria-label="Toggle mobile menu"
            className="text-gray-400 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-dark-bg px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
