import { useState } from 'react'
import { X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Story', href: '#story' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'More', href: '#more' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top menu bar */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1170px] px-8 py-10 text-center">
          <a
            href="#home"
            className="inline-block text-3xl font-bold uppercase tracking-widest text-charcoal"
          >
            Reprise
          </a>
        </div>
      </div>

      {/* Hamburger toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-6 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm bg-white md:hidden"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-charcoal" />
        ) : (
          <>
            <span className="block h-0.5 w-6 bg-toggle-inactive" />
            <span className="block h-0.5 w-6 bg-toggle-inactive" />
            <span className="block h-0.5 w-6 bg-toggle-inactive" />
          </>
        )}
      </button>

      {/* Desktop nav */}
      <nav className="hidden bg-white py-4 md:block" aria-label="Main navigation">
        <ul className="mx-auto flex max-w-[1170px] justify-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-heading text-sm uppercase tracking-widest text-muted transition-colors hover:text-rose-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center border-[30px] border-menu-border bg-white"
          role="dialog"
          aria-label="Navigation menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-3xl uppercase tracking-widest text-charcoal transition-colors hover:text-rose-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
