import { useState } from 'react'
import { Home, Search, Bell, Send, BarChart3, LogOut, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  active?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Feed', href: '#feed', icon: Home, active: true },
  { label: 'Explore', href: '#explore', icon: Search },
  { label: 'Notifications', href: '#notifications', icon: Bell },
  { label: 'Direct', href: '#direct', icon: Send },
  { label: 'Stats', href: '#stats', icon: BarChart3 },
  { label: 'Sign out', href: '#signout', icon: LogOut },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Feed')

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

      {/* Mobile close button */}
      {isOpen && (
        <button
          className="fixed left-4 top-4 z-50 rounded-lg bg-white p-2 shadow-lg lg:hidden"
          onClick={onToggle}
          aria-label="Close sidebar"
          data-testid="sidebar-close"
        >
          <X className="h-5 w-5 text-body-text" />
        </button>
      )}

      {/* Mobile hamburger */}
      <button
        className="fixed left-4 top-4 z-50 rounded-lg bg-white p-2 shadow-lg lg:hidden"
        onClick={onToggle}
        aria-label="Open sidebar"
        data-testid="sidebar-toggle"
      >
        <Menu className="h-5 w-5 text-body-text" />
      </button>

      <aside
        className={cn(
          'fixed left-0 top-0 z-40 flex h-full w-72 flex-col bg-sidebar-bg text-sidebar-text transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        data-testid="sidebar"
      >
        {/* Profile section */}
        <div className="flex flex-col items-center px-6 pb-4 pt-10">
          <img
            src="https://picsum.photos/seed/sidebarvault-profile/150/150"
            alt="Profile photo"
            className="mb-4 h-24 w-24 rounded-full object-cover"
          />
          <h2 className="text-lg font-semibold text-heading-text">Alex Morgan</h2>
          <p className="text-sm text-secondary-text">San Francisco, CA</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 border-b border-border px-6 py-4">
          <div className="text-center">
            <div className="text-lg font-bold text-heading-text">892</div>
            <div className="text-xs text-secondary-text">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-heading-text">22.5k</div>
            <div className="text-xs text-secondary-text">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-heading-text">150</div>
            <div className="text-xs text-secondary-text">Following</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-0 py-2" aria-label="Sidebar navigation">
          <ul className="list-none p-0 m-0">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.label
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-6 py-3 text-sm transition-colors',
                      'hover:bg-sidebar-hover',
                      isActive
                        ? 'border-l-4 border-accent bg-sidebar-hover font-semibold text-accent'
                        : 'border-l-4 border-transparent text-sidebar-text',
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveItem(item.label)
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-6 py-4 text-xs text-secondary-text">
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-accent underline hover:text-accent-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </aside>
    </>
  )
}
