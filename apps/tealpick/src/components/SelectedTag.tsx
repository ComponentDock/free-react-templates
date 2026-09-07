import { cn } from '@free-react-templates/ui'

export interface SelectedTagProps {
  label: string
  onRemove: () => void
}

export function SelectedTag({ label, onRemove }: SelectedTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-none px-2 py-0.5 text-xs font-medium text-white',
        'bg-tealpick-accent',
      )}
    >
      {label}
      <button
        type="button"
        aria-label={`Remove ${label}`}
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        className="ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
      >
        <svg viewBox="0 0 12 12" fill="none" className="h-2 w-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </span>
  )
}
