import { MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Listings', href: '#listings', hasDropdown: true },
  { label: 'Pages', href: '#pages', hasDropdown: true },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog', hasDropdown: true },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-dark-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-brand" />
          <span className="text-xl font-bold text-white">Dirly</span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-brand"
            >
              {link.label}
              {link.hasDropdown && (
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Sign In button */}
        <a
          href="#signin"
          className="rounded bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Sign In
        </a>
      </div>
    </header>
  )
}
