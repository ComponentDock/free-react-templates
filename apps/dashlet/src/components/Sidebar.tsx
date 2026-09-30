import { cn } from '@free-react-templates/ui'

interface SidebarProps {
  activeNav: string
  onNavClick: (item: string) => void
  className?: string
}

const navItems = ['Home', 'Videos', 'Books', 'Store']

const featuredUsers = [
  { name: 'Matt', seed: 'matt-1' },
  { name: 'Spike', seed: 'spike-2' },
  { name: 'Jassy', seed: 'jassy-3' },
  { name: 'William', seed: 'william-4' },
  { name: 'Johan', seed: 'johan-5' },
  { name: 'Charise', seed: 'charise-6' },
  { name: 'James', seed: 'james-7' },
  { name: 'Chris', seed: 'chris-8' },
]

export default function Sidebar({ activeNav, onNavClick, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'w-60 bg-white flex-shrink-0 flex flex-col border-r border-gray-100',
        className,
      )}
    >
      {/* Logo */}
      <div className="px-6 pt-8 pb-6">
        <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xl">
          D
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-6 mb-8">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                data-active={item === activeNav ? 'true' : undefined}
                onClick={() => onNavClick(item)}
                className={cn(
                  'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  item === activeNav
                    ? 'text-brand border-l-3 border-brand bg-blue-50'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-50',
                )}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Featured Users */}
      <div className="px-6">
        <h3 className="text-xs font-bold text-text-secondary tracking-widest uppercase mb-4">
          Featured Users
        </h3>
        <ul className="space-y-3">
          {featuredUsers.map((user) => (
            <li key={user.name} className="flex items-center gap-3">
              <img
                src={`https://picsum.photos/seed/${user.seed}/40/40`}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-text-primary">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
