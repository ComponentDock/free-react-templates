import { Search, Home, Film, BookOpen, ShoppingBag, PieChart, Settings } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SidebarProps {
  activeNav: string
  onNavClick: (item: string) => void
  className?: string
}

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Videos', icon: Film },
  { label: 'Books', icon: BookOpen },
  { label: 'Store', icon: ShoppingBag },
  { label: 'Analytics', icon: PieChart },
  { label: 'Settings', icon: Settings },
]

export default function Sidebar({ activeNav, onNavClick, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'w-60 bg-white flex-shrink-0 flex flex-col border-r border-gray-100 h-full',
        className,
      )}
    >
      {/* Logo */}
      <div className="px-6 pt-8 pb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
          C
        </div>
        <span className="text-lg font-semibold text-text-primary">SidePane</span>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-6" aria-label="Sidebar navigation">
        <ul className="space-y-1">
          {navItems.map(({ label, icon: Icon }) => (
            <li key={label}>
              <button
                type="button"
                data-active={label === activeNav ? 'true' : undefined}
                onClick={() => onNavClick(label)}
                className={cn(
                  'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-3',
                  label === activeNav
                    ? 'text-brand border-l-3 border-brand bg-blue-50'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-50',
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
