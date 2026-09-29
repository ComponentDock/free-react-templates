import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  icon: LucideIcon
  label: string
}

export interface SidebarNavProps {
  items: NavItem[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  return (
    <nav aria-label="Sidebar navigation" className="mb-8">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={`#${item.label.toLowerCase()}`}
              className="flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
