import { Menu } from 'lucide-react'

interface TopbarProps {
  onMenuClick: () => void
}

const TOPBAR_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex items-center border-b border-gray-200 bg-white px-6 py-4">
      <button
        className="mr-4 rounded p-1 text-accent transition-colors hover:bg-accent/10 lg:hidden"
        onClick={onMenuClick}
        aria-label="Open sidebar menu"
        data-testid="topbar-menu-btn"
      >
        <Menu className="h-6 w-6" />
      </button>

      <nav className="ml-auto hidden lg:block" aria-label="Top navigation">
        <ul className="flex list-none gap-6 p-0 m-0">
          {TOPBAR_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm transition-colors hover:text-accent ${
                  link.active ? 'font-bold text-heading-text' : 'text-body-text'
                }`}
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
