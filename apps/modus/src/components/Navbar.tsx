import { Phone } from 'lucide-react'

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold uppercase tracking-[0.15em] text-white">
              Modus
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-display text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded border border-white/60 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +10 (87) 267 2467
          </a>

          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
