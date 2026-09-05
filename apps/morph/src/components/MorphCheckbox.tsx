import { useState, useId } from 'react'
import { cn } from '@free-react-templates/ui'

interface MorphCheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function MorphCheckbox({
  label,
  defaultChecked = false,
  disabled = false,
}: MorphCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex items-center gap-3 select-none',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
      )}
    >
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={() => setChecked((c) => !c)}
        aria-label={label}
      />
      <span
        className={cn(
          'relative flex h-6 w-6 shrink-0 items-center justify-center border-2',
          'transition-all duration-300 ease-in-out',
          checked ? 'border-brand-teal bg-brand-teal' : 'border-unchecked-border bg-unchecked-bg',
          disabled && 'pointer-events-none',
        )}
        style={{
          borderRadius: checked ? '4px' : '2px',
          animation: checked
            ? 'morph-to-checked 300ms ease-in-out forwards'
            : 'morph-to-unchecked 300ms ease-in-out forwards',
        }}
      >
        <svg
          className={cn('h-4 w-4 text-white', checked ? 'opacity-100' : 'opacity-0')}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: checked ? 0 : 24,
            animation: checked
              ? 'tick-draw 300ms ease-in-out 100ms forwards'
              : 'tick-erase 200ms ease-in-out forwards',
          }}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="text-base text-gray-800 dark:text-gray-200">{label}</span>
    </label>
  )
}
