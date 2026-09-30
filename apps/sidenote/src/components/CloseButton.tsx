import { X, Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CloseButtonProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export function CloseButton({ isOpen, onToggle, className }: CloseButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'rounded-lg p-2 transition-colors',
        'text-ink hover:bg-black/5 lg:hidden',
        className,
      )}
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
    >
      {isOpen ? (
        <X className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}
