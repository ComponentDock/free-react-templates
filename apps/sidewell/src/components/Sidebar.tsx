import { Menu, Home, User, BookOpen, Briefcase, Mail } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  active?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: <Home className="h-5 w-5" />, active: true },
  { label: 'About', href: '#about', icon: <User className="h-5 w-5" /> },
  { label: 'Blog', href: '#blog', icon: <BookOpen className="h-5 w-5" /> },
  { label: 'Services', href: '#services', icon: <Briefcase className="h-5 w-5" /> },
  { label: 'Contacts', href: '#contacts', icon: <Mail className="h-5 w-5" /> },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onToggle}
          data-testid="sidebar-overlay"
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-0 z-40 flex h-full w-[270px] flex-col bg-sidebar-bg text-sidebar-text transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        data-testid="sidebar"
      >
        {/* Logo */}
        <div className="px-6 py-8">
          <a href="#home" className="text-3xl font-bold tracking-wide text-sidebar-text">
            M.
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-0" aria-label="Sidebar navigation">
          <ul className="m-0 list-none p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-4 px-6 py-3 text-sm transition-colors',
                    'hover:bg-sidebar-hover',
                    item.active ? 'bg-sidebar-hover font-semibold' : 'text-sidebar-text',
                  )}
                >
                  <span className="text-sidebar-text/80">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="border-t border-white/20 px-6 py-4 text-[10px] leading-relaxed text-sidebar-text/70">
          <p>
            Copyright &copy; 2024 All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline hover:text-sidebar-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </aside>

      {/* Mobile hamburger */}
      <button
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg lg:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="sidebar-toggle"
      >
        <Menu className="h-5 w-5" />
      </button>
    </>
  )
}
