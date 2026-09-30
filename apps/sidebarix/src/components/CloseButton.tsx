import { cn } from '@free-react-templates/ui'

interface CloseButtonProps {
  onClick?: () => void
  className?: string
}

export function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-8 w-8 items-center justify-center rounded text-muted transition-colors hover:text-ink',
        className,
      )}
      aria-label="Close"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}
