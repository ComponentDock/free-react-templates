import type { LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface MenuItemProps {
  icon: LucideIcon
  label: string
  onClick: () => void
  className?: string
}

export function MenuItem({ icon: Icon, label, onClick, className }: MenuItemProps) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-dark',
        'transition-colors duration-150 hover:bg-primary-50 hover:text-primary-700',
        'focus:bg-primary-50 focus:text-primary-700 focus:outline-none',
        className,
      )}
      data-testid={`menu-item-${label.toLowerCase()}`}
    >
      <Icon className="h-4 w-4 text-muted" />
      {label}
    </button>
  )
}
