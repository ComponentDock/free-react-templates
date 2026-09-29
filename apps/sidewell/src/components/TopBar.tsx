import { Menu } from 'lucide-react'

interface TopBarProps {
  onToggle: () => void
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export function TopBar({ onToggle }: TopBarProps) {
  return (
    <header
      className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 lg:px-12"
      data-testid="topbar"
    >
      {/* Mobile hamburger */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow lg:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="topbar-toggle"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Navigation links */}
      <nav className="ml-auto" aria-label="Top navigation">
        <ul className="m-0 flex list-none items-center gap-6 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-heading-text transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
