import { cn } from '@free-react-templates/ui'

export interface OptionItemProps {
  label: string
  checked: boolean
  disabled?: boolean
  focused?: boolean
  onClick: () => void
}

export function OptionItem({ label, checked, disabled, focused, onClick }: OptionItemProps) {
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
        'border-b border-tealpick-border last:border-b-0',
        'hover:bg-tealpick-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-tealpick-accent',
        checked && 'bg-tealpick-option-selected',
        focused && 'bg-tealpick-accent text-white',
        disabled && 'cursor-not-allowed opacity-50 hover:bg-transparent hover:text-tealpick-text',
      )}
    >
      <span className="text-tealpick-text">{label}</span>
    </button>
  )
}
