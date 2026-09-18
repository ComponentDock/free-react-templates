import { MapPin } from 'lucide-react'
import { navLinks } from '../data'

export function Navbar() {
  return (
    <header id="home" className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 text-white">
          <span className="font-script text-3xl">Town</span>
          <span className="text-3xl font-bold">Hub</span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-5 py-2 text-[15px] font-medium text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Auth */}
        <div className="flex items-center gap-4">
          <a
            href="#listing"
            className="hidden rounded-full bg-brand px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-brand-dark sm:inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true">+</span> Add Listing
          </a>
          <a
            href="#page"
            className="hidden items-center gap-2 text-[14px] text-white/80 transition-colors hover:text-white sm:flex"
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Sign in or Register
          </a>
        </div>
      </div>
    </header>
  )
}
