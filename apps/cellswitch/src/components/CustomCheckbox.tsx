import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface CustomCheckboxProps {
  checked: boolean
  onChange: () => void
  disabled?: boolean
  label: string
}

export function CustomCheckbox({
  checked,
  onChange,
  disabled = false,
  label,
}: CustomCheckboxProps) {
  return (
    <label className="group relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        aria-label={label}
        className="peer absolute h-0 w-0 opacity-0"
      />
      <span
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded border-2 transition-colors',
          disabled
            ? checked
              ? 'border-accent/20 bg-accent/20'
              : 'border-checkbox-border bg-[#e6e6e6] opacity-60'
            : checked
              ? 'border-accent bg-accent'
              : 'border-checkbox-border bg-transparent',
          !disabled && 'group-hover:border-accent',
          !disabled && 'peer-focus-visible:border-accent',
        )}
      >
        {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden="true" />}
      </span>
    </label>
  )
}
