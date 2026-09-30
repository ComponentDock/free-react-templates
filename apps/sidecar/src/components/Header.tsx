import { ShoppingBag } from 'lucide-react'

interface HeaderProps {
  itemCount: number
  total: number
  onToggleSidebar: () => void
}

export function Header({ itemCount, total, onToggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-end px-6 py-4">
      <button
        onClick={onToggleSidebar}
        className="flex items-center gap-2 text-sm text-text-primary hover:text-brand transition-colors"
        aria-label="Open shopping bag"
      >
        <ShoppingBag className="h-4 w-4" />
        <span>
          ${total.toFixed(0)} / {itemCount} items
        </span>
      </button>
    </header>
  )
}
