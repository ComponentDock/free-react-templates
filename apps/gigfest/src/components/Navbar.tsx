import { useState } from 'react'

const navLinks = ['Home', 'Performer', 'Pages', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="font-heading text-2xl font-bold uppercase text-white tracking-wider">
          GigFest
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-heading text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#buy-tickets"
          className="hidden rounded-none bg-brand px-8 py-3 font-heading text-sm uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-brand hover:ring-1 hover:ring-brand lg:inline-block"
        >
          Buy Tickets
        </a>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
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
      </div>

      {mobileOpen && (
        <nav className="bg-dark-bg/95 px-4 pb-4 lg:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 font-heading text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
          <a
            href="#buy-tickets"
            className="mt-2 inline-block rounded-none bg-brand px-8 py-3 font-heading text-sm uppercase tracking-widest text-white"
          >
            Buy Tickets
          </a>
        </nav>
      )}
    </header>
  )
}
