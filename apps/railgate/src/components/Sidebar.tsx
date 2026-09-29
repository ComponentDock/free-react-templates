import {
  Home,
  Download,
  Gift,
  Trophy,
  Settings,
  Headphones,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  icon: typeof Home
  active?: boolean
  badge?: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', icon: Home, active: true },
  { label: 'Download', icon: Download, badge: '5' },
  { label: 'Gift Code', icon: Gift },
  { label: 'Top Review', icon: Trophy },
  { label: 'Settings', icon: Settings },
  { label: 'Support', icon: Headphones },
  { label: 'Sign Out', icon: LogOut },
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
          'fixed left-0 top-0 z-40 flex h-full w-[300px] flex-col bg-sidebar-bg transition-all duration-300',
          'lg:relative',
          isOpen ? 'ml-0' : '-ml-[300px] lg:ml-0',
        )}
        data-testid="sidebar"
      >
        {/* Toggle button — positioned outside sidebar right edge */}
        <button
          className={cn(
            'absolute right-0 top-5 z-50 flex h-[30px] w-[30px] items-center justify-center bg-accent text-white transition-colors hover:bg-accent-hover',
            'lg:-right-[35px]',
          )}
          onClick={onToggle}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          data-testid="sidebar-toggle"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>

        {/* Profile section */}
        <div
          className="relative flex flex-col items-center py-8 text-center"
          data-testid="profile-section"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://picsum.photos/seed/railgate-bg/300/200)',
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Avatar */}
          <div className="relative z-10">
            <img
              src="https://picsum.photos/seed/railgate-avatar/100/100"
              alt="Profile photo"
              className="mx-auto h-[100px] w-[100px] rounded-full border-2 border-white object-cover"
              data-testid="profile-avatar"
            />
            <h3 className="mt-3 text-base font-normal text-white" data-testid="profile-name">
              Alex Morgan
            </h3>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1" aria-label="Sidebar navigation">
          <ul className="m-0 list-none p-0">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <a
                    href="#"
                    className={cn(
                      'flex items-center border-b px-[30px] py-[15px] text-[16px] transition-all duration-200',
                      'hover:bg-accent hover:text-sidebar-text-hover hover:border-accent',
                      item.active
                        ? 'border-transparent bg-transparent text-sidebar-text-hover'
                        : 'border-nav-border text-sidebar-text',
                    )}
                    onClick={(e) => e.preventDefault()}
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        className="ml-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-badge text-[10px] text-white"
                        data-testid="download-badge"
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}
