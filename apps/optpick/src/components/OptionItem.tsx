import { cn } from '@free-react-templates/ui'

export interface OptionItemProps {
  label: string
  checked: boolean
  disabled?: boolean
  onClick: () => void
}

export function OptionItem({ label, checked, disabled, onClick }: OptionItemProps) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={checked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors',
        'border-b border-optpick-border last:border-b-0',
        'hover:bg-optpick-hover focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-optpick-checkmark',
        checked && 'bg-optpick-checkmark-bg',
        disabled && 'cursor-not-allowed opacity-50 hover:bg-transparent',
      )}
    >
      <span
        aria-hidden
        className={cn(
          'flex h-4 w-4 shrink-0 items-center justify-center rounded border',
          checked
            ? 'border-optpick-checkmark bg-optpick-checkmark'
            : 'border-optpick-border bg-white',
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 12 12"
            fill="none"
            className="h-3 w-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-optpick-text">{label}</span>
    </button>
  )
}
