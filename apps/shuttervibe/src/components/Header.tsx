import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface HeaderProps {
  activePage: 'home' | 'photos'
  onNavigate: (page: 'home' | 'photos') => void
  menuOpen: boolean
  onToggleMenu: () => void
}

const navLinks = [
  { label: 'Home', page: 'home' as const },
  { label: 'Photos', page: 'photos' as const },
  { label: 'About Me', page: 'home' as const },
  { label: 'Contact', page: 'home' as const },
] as const

export function Header({ activePage, onNavigate, menuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header
      className="fixed top-0 right-0 z-50 flex h-[70px] w-full items-center bg-black px-6"
      data-testid="header-bar"
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          onNavigate('home')
        }}
        className="font-heading text-lg font-bold uppercase tracking-wide text-white"
      >
        Shuttervibe
      </a>

      <nav className="ml-auto hidden items-center gap-6 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate(link.page)
            }}
            className={cn(
              'text-[0.8rem] font-medium uppercase tracking-wider transition-colors',
              activePage === link.page && link.page === 'photos'
                ? 'text-brand'
                : 'text-white hover:text-brand',
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        onClick={onToggleMenu}
        className="ml-auto flex items-center gap-2 text-white lg:hidden"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="text-xs font-medium uppercase">Menu</span>
      </button>
    </header>
  )
}
