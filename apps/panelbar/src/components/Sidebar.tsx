import { Menu, Home, LayoutDashboard, Users, CreditCard, Settings, Info } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  href: string
  icon: typeof Home
  active?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Homepage', href: '#home', icon: Home, active: true },
  { label: 'Dashboard', href: '#dashboard', icon: LayoutDashboard },
  { label: 'Friends', href: '#friends', icon: Users },
  { label: 'Subscription', href: '#subscription', icon: CreditCard },
  { label: 'Settings', href: '#settings', icon: Settings },
  { label: 'Information', href: '#information', icon: Info },
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
          'fixed left-0 top-0 z-40 flex h-full w-[250px] flex-col bg-sidebar-bg text-sidebar-text transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        data-testid="sidebar"
      >
        {/* Brand bar */}
        <div className="bg-brand px-6 py-3">
          <a href="#home" className="text-lg font-bold text-sidebar-text">
            Panelbar
          </a>
        </div>

        {/* Toggle button (absolute positioned inside sidebar) */}
        <button
          className="absolute right-0 top-[52px] z-50 flex h-10 w-10 -translate-y-0 translate-x-full items-center justify-center bg-transparent text-heading-text transition-colors hover:bg-brand hover:text-white lg:hidden"
          onClick={onToggle}
          aria-label="Toggle sidebar"
          data-testid="sidebar-toggle"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Navigation */}
        <nav className="flex-1 px-0" aria-label="Sidebar navigation">
          <ul className="m-0 list-none p-0">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 border-b border-white/10 px-7 py-4 text-sm transition-colors',
                      'hover:bg-brand hover:text-sidebar-active',
                      item.active ? 'bg-transparent text-sidebar-active' : 'text-sidebar-link',
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      {/* Desktop hamburger */}
      <button
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center bg-transparent text-heading-text lg:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="desktop-toggle"
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  )
}
