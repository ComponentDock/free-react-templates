import { useState } from 'react'
import { Menu, Home, User, Briefcase, Edit3, Image, Star, Mail } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  active?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: <Home className="h-4 w-4" />, active: true },
  { label: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
  { label: 'Works', href: '#works', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Blog', href: '#blog', icon: <Edit3 className="h-4 w-4" /> },
  { label: 'Gallery', href: '#gallery', icon: <Image className="h-4 w-4" /> },
  { label: 'Services', href: '#services', icon: <Star className="h-4 w-4" /> },
  { label: 'Contacts', href: '#contacts', icon: <Mail className="h-4 w-4" /> },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

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
          'fixed left-0 top-0 z-40 flex h-full w-64 flex-col bg-sidebar-bg text-sidebar-text transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        data-testid="sidebar"
      >
        {/* Brand header */}
        <div className="px-6 py-6">
          <span className="text-2xl font-bold tracking-tight text-sidebar-text">Sidelane</span>
          <p className="mt-1 text-sm text-sidebar-text/70">Portfolio Agency</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-0" aria-label="Sidebar navigation">
          <ul className="m-0 list-none p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-6 py-3 text-sm transition-colors',
                    'hover:bg-sidebar-hover',
                    item.active
                      ? 'border-l-4 border-accent bg-sidebar-hover font-semibold text-accent'
                      : 'border-l-4 border-transparent text-sidebar-text',
                  )}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter section */}
        <div className="px-6 py-4">
          <h2 className="mb-3 text-sm font-semibold text-sidebar-text">Subscribe for newsletter</h2>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded bg-white/20 px-3 py-2 text-sm text-sidebar-text placeholder-sidebar-text/50 outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Email address for newsletter"
              data-testid="newsletter-input"
            />
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4 text-xs text-sidebar-text/60">
          <p>Copyright &copy; 2024 All rights reserved</p>
          <p className="mt-1">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-sidebar-text underline hover:text-sidebar-text/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </aside>

      {/* Mobile hamburger - fixed in top-left */}
      <button
        className="fixed left-4 top-4 z-50 rounded bg-sidebar-bg p-2 text-white shadow-lg lg:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="sidebar-toggle"
      >
        <Menu className="h-5 w-5" />
      </button>
    </>
  )
}
