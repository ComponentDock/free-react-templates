import { useState } from 'react'
import {
  Menu,
  Home,
  Info,
  Briefcase,
  FolderOpen,
  PenTool,
  Mail,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  href: string
  icon: typeof Home
  active?: boolean
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: Home, active: true },
  { label: 'About', href: '#about', icon: Info },
  {
    label: 'Services',
    href: '#services',
    icon: Briefcase,
    children: [
      { label: 'Web Design', href: '#web-design' },
      { label: 'Development', href: '#development' },
    ],
  },
  { label: 'Portfolio', href: '#portfolio', icon: FolderOpen },
  { label: 'Blog', href: '#blog', icon: PenTool },
  { label: 'Contact', href: '#contact', icon: Mail },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [email, setEmail] = useState('')

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setEmail('')
    }
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
          'fixed left-0 top-0 z-40 flex h-full w-[260px] flex-col bg-sidebar-bg text-sidebar-text transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        data-testid="sidebar"
      >
        {/* Logo */}
        <div className="px-6 py-7">
          <a href="#home" className="text-2xl font-bold tracking-wide text-sidebar-text">
            Flank
          </a>
        </div>

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
                      'flex items-center justify-between px-6 py-2.5 text-sm transition-colors',
                      'hover:bg-sidebar-hover',
                      item.active ? 'bg-sidebar-active font-semibold' : 'text-sidebar-text',
                    )}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault()
                        toggleExpand(item.label)
                      }
                    }}
                    aria-expanded={item.children ? expandedItems.has(item.label) : undefined}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </span>
                    {item.children && (
                      <span className="text-xs">
                        {expandedItems.has(item.label) ? (
                          <ChevronDown className="h-3 w-3" />
                        ) : (
                          <ChevronRight className="h-3 w-3" />
                        )}
                      </span>
                    )}
                  </a>
                  {item.children && expandedItems.has(item.label) && (
                    <ul className="m-0 list-none bg-black/20 p-0">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block pl-16 pr-6 py-2 text-xs text-sidebar-text/80 transition-colors hover:bg-sidebar-hover hover:text-sidebar-text"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="border-t border-white/20 px-6 py-4">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-sidebar-text">
            Stay Updated
          </h3>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="rounded bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="rounded bg-accent px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 px-6 py-4 text-[11px] leading-relaxed text-sidebar-text/70">
          <p>&copy; 2024 Flank. All rights reserved.</p>
          <p className="mt-1">
            Made with{' '}
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
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-bg text-white shadow-lg lg:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="sidebar-toggle"
      >
        <Menu className="h-5 w-5" />
      </button>
    </>
  )
}
