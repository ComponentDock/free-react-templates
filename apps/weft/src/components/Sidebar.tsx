import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const FILTERS = ['All', 'Branding', 'Design', 'Photography', 'Architecture'] as const
type Filter = (typeof FILTERS)[number]

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

interface SidebarProps {
  activeFilter: Filter
  onFilterChange: (filter: Filter) => void
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 21c.5-1.5 1.5-4 2-6 .5-2-.5-3.5 1-5s4-1 4.5 1-.5 4-1 5.5 0 3.5 1 4.5" />
      <path d="M9.5 14.5 7 21" />
    </svg>
  )
}

export function Sidebar({ activeFilter, onFilterChange, isOpen, onToggle, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 lg:hidden"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6 text-accent" /> : <Menu className="h-6 w-6 text-accent" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 flex h-full w-[250px] flex-col bg-sidebar text-white transition-all duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-8">
          <a href="#home" className="text-2xl font-medium tracking-wide text-white">
            Weft
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-0" aria-label="Main navigation">
          <ul className="list-none p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-8 py-3 text-sm font-normal text-white/80 transition-colors hover:bg-accent hover:text-white"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Filter section */}
        <div className="border-t border-white/10 px-8 py-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
            Filter By:
          </p>
          <ul className="list-none p-0">
            {FILTERS.map((filter) => (
              <li key={filter}>
                <button
                  onClick={() => {
                    onFilterChange(filter)
                    onClose()
                  }}
                  className={cn(
                    'block w-full px-0 py-1.5 text-left text-sm text-white/70 transition-colors hover:text-white',
                    activeFilter === filter && 'bg-accent text-white',
                  )}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 py-4">
          <a
            href="#"
            aria-label="Instagram"
            className="text-accent transition-colors hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-accent transition-colors hover:text-white"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-accent transition-colors hover:text-white"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Pinterest"
            className="text-accent transition-colors hover:text-white"
          >
            <PinterestIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 px-8 py-4 text-center text-xs text-white/50">
          <p>
            © 2024 Weft. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-accent underline hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </aside>
    </>
  )
}
