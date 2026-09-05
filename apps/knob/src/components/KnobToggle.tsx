import { useId, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface KnobToggleProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function KnobToggle({ label, defaultChecked = false, disabled = false }: KnobToggleProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor={id}
        className={cn(
          'text-sm font-medium select-none',
          disabled
            ? 'cursor-not-allowed text-gray-400 dark:text-gray-500'
            : 'cursor-pointer text-gray-700 dark:text-gray-300',
        )}
      >
        {label}
      </label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => setChecked((prev) => !prev)}
        className="sr-only"
        aria-label={label}
      />
      <label
        htmlFor={id}
        className={cn(
          'relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors duration-200',
          disabled && 'cursor-not-allowed opacity-50',
          checked ? 'bg-track-on' : 'bg-track-off',
        )}
        aria-hidden="true"
      >
        {/* Knob */}
        <span
          className={cn(
            'inline-block h-5 w-5 rounded-full bg-knob shadow-md transition-transform duration-200',
            checked ? 'translate-x-[22px]' : 'translate-x-[2px]',
          )}
        />
      </label>
    </div>
  )
}
