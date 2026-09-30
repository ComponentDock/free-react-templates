import { Menu, X } from 'lucide-react'

export interface SidebarToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export function SidebarToggle({ isOpen, onToggle }: SidebarToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      className="fixed left-80 top-4 z-40 flex h-10 w-10 items-center justify-center rounded bg-white shadow-md transition-all duration-300 md:left-4"
      style={{ marginLeft: isOpen ? '0' : undefined }}
    >
      {isOpen ? (
        <X size={20} className="text-gray-900" />
      ) : (
        <Menu size={20} className="text-gray-900" />
      )}
    </button>
  )
}
