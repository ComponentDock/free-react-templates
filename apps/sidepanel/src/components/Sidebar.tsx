import { useState } from 'react'
import { Menu, ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'Services', href: '#services' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

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
        {/* Profile section */}
        <div className="flex flex-col items-center px-6 py-8">
          <img
            src="https://picsum.photos/seed/sidepanel-profile/150/150"
            alt="Profile photo"
            className="mb-4 h-24 w-24 rounded-full object-cover ring-2 ring-white/20"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-0" aria-label="Sidebar navigation">
          <ul className="list-none p-0 m-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center justify-between px-6 py-3 text-sm transition-colors',
                    'hover:bg-sidebar-hover',
                    item.active
                      ? 'border-l-4 border-accent bg-sidebar-hover font-semibold text-accent'
                      : 'border-l-4 border-transparent text-sidebar-text',
                  )}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault()
                      toggleExpand(item.label)
                    }
                  }}
                  aria-expanded={item.children ? expandedItems.has(item.label) : undefined}
                >
                  <span>{item.label}</span>
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
                  <ul className="list-none m-0 p-0 bg-black/20">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-10 py-2 text-xs text-sidebar-text/80 transition-colors hover:bg-sidebar-hover hover:text-accent"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4 text-xs text-sidebar-text/60">
          <p>Copyright &copy; 2024 All rights reserved</p>
          <p className="mt-1">
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

      {/* Mobile hamburger - fixed in top-left */}
      <button
        className="fixed left-4 top-4 z-50 rounded bg-accent p-2 text-white shadow-lg lg:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="sidebar-toggle"
      >
        <Menu className="h-5 w-5" />
      </button>
    </>
  )
}
