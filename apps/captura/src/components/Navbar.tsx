import { Camera } from 'lucide-react'

const navLinks = ['Home', 'About', 'Albums', 'Blog', 'Contact']

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-2 text-xl font-semibold text-heading">
          <Camera className="h-6 w-6 text-brand-400" />
          Captura
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-body transition-colors hover:text-brand-400"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-body transition-colors hover:text-brand-400"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-body transition-colors hover:text-brand-400"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-body transition-colors hover:text-brand-400"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
