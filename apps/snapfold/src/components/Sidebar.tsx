import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface SidebarProps {
  onSearchOpen: () => void
}

const NAV_LINKS = ['Home', 'Gallery', 'Blog', 'Contact'] as const

const SOCIAL_LINKS = [
  { name: 'Behance', icon: 'B' },
  { name: 'Dribbble', icon: 'D' },
  { name: 'Twitter', icon: 'X' },
  { name: 'Facebook', icon: 'f' },
  { name: 'Pinterest', icon: 'P' },
] as const

export function Sidebar({ onSearchOpen }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-[9999] flex h-10 w-10 items-center justify-center bg-snap-primary text-white lg:hidden"
      >
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M0 1h20M0 7h20M0 13h20" />
        </svg>
      </button>

      {/* Search icon */}
      <button
        type="button"
        aria-label="Search"
        onClick={onSearchOpen}
        className="fixed right-16 top-4 z-[9999] flex h-10 w-10 items-center justify-center bg-snap-primary text-white lg:right-4"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-[9998] flex h-full w-[455px] flex-col bg-white transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Logo */}
        <div className="px-10 pt-10">
          <span className="text-2xl font-bold tracking-tight text-snap-primary">Snapfold</span>
        </div>

        {/* Close on mobile */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-snap-body lg:hidden"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation */}
        <nav className="mt-12 flex-1">
          <ul className="space-y-4 px-10">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={cn(
                    'block text-sm font-bold uppercase tracking-widest transition-colors hover:text-snap-primary',
                    i === 0 ? 'text-snap-primary' : 'text-snap-body',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="px-10 py-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-snap-accent">
            Find us on
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-snap-accent text-xs font-bold text-snap-primary transition-colors hover:bg-snap-primary hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 px-10 py-4">
          <p className="text-xs text-snap-body">
            &copy; {new Date().getFullYear()} Snapfold. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  )
}
