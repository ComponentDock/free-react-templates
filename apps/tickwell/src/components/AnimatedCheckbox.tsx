import { useState, useId } from 'react'
import { cn } from '@free-react-templates/ui'

interface AnimatedCheckboxProps {
  label: string
  defaultChecked?: boolean
}

export function AnimatedCheckbox({ label, defaultChecked = false }: AnimatedCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 select-none',
        checked
          ? 'bg-brand-indigo/10'
          : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-750',
      )}
    >
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
        aria-label={label}
      />
      <span
        className={cn(
          'relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-300',
          checked
            ? 'border-brand-indigo bg-brand-indigo'
            : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
        )}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            points="20 6 9 17 4 12"
            className={cn(
              'transition-all duration-300',
              checked ? 'text-white stroke-white' : 'text-transparent stroke-transparent',
            )}
            style={{
              strokeDasharray: 24,
              strokeDashoffset: checked ? 0 : 24,
              transition: 'stroke-dashoffset 0.3s ease-in-out',
            }}
          />
        </svg>
      </span>
      <span
        className={cn(
          'text-sm font-medium transition-colors duration-200',
          checked ? 'text-brand-indigo dark:text-brand-indigo' : 'text-gray-700 dark:text-gray-300',
        )}
      >
        {label}
      </span>
    </label>
  )
}
