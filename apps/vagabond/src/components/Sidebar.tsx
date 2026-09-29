import { useState } from 'react'
import { Menu, Home, User, MapPin, FileText, Settings, Mail } from 'lucide-react'
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
  { label: 'Destination', href: '#destination', icon: <MapPin className="h-4 w-4" /> },
  { label: 'Blog', href: '#blog', icon: <FileText className="h-4 w-4" /> },
  { label: 'Services', href: '#services', icon: <Settings className="h-4 w-4" /> },
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
          'fixed left-0 top-0 z-40 flex h-full flex-col text-sidebar-text transition-transform duration-300',
          'w-[var(--width-sidebar)]',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/vagabond-landscape/600/1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="sidebar"
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(180deg, #9b59b6 0%, #c471ed 50%, #e84393 100%)',
          }}
        />

        {/* Content sits above gradient */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Brand header */}
          <div className="px-6 py-6">
            <span className="text-2xl font-bold tracking-tight text-sidebar-text">Travel</span>
            <p className="mt-1 text-sm text-sidebar-text/70">Travel Agency</p>
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
                        ? 'bg-sidebar-hover font-semibold text-sidebar-text'
                        : 'text-sidebar-text/80',
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
            <h2 className="mb-3 text-sm font-semibold text-sidebar-text">
              Subscribe for newsletter
            </h2>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Email address for newsletter"
                data-testid="newsletter-input"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded border border-white/40 bg-transparent px-3 py-2 text-sm text-sidebar-text transition-colors hover:bg-white/20"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="border-t border-white/20 px-6 py-4 text-xs text-sidebar-text/60">
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
        </div>
      </aside>

      {/* Mobile hamburger */}
      <button
        className="fixed left-4 top-4 z-50 rounded bg-[#9b59b6] p-2 text-white shadow-lg lg:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="sidebar-toggle"
      >
        <Menu className="h-5 w-5" />
      </button>
    </>
  )
}
