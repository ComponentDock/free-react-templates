import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'Features', 'Services', 'Pricing', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="border-b border-white/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#" className="text-2xl font-bold text-white">
            Hostpeak
          </a>

          <button
            className="flex flex-col gap-1 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-normal text-white transition-opacity hover:opacity-80"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="#chat" className="text-sm text-white">
                Live Chat
              </a>
              <a
                href="#login"
                className="rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-heading"
              >
                Login
              </a>
            </div>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-300 lg:hidden',
            isOpen ? 'max-h-96' : 'max-h-0',
          )}
        >
          <ul className="flex flex-col gap-2 px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="block py-2 text-sm text-white">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="#chat" className="block py-2 text-sm text-white">
                Live Chat
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="inline-block rounded-full border border-white px-6 py-2 text-sm text-white"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
