import { cn } from '@free-react-templates/ui'

interface ChatToggleButtonProps {
  onClick: () => void
  className?: string
}

export function ChatToggleButton({ onClick, className }: ChatToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-light',
        className,
      )}
      aria-label="Open contact form"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  )
}
