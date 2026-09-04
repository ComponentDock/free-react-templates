import { useState } from 'react'

interface CircleCheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function CircleCheckbox({
  label,
  defaultChecked = false,
  disabled = false,
}: CircleCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <label
      className={`flex cursor-pointer items-center gap-3 select-none ${
        disabled ? 'cursor-not-allowed opacity-60' : ''
      }`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          setChecked((prev) => !prev)
        }}
        aria-label={label}
      />
      <span
        className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          checked
            ? 'border-coral bg-coral scale-100'
            : 'border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-800'
        }`}
      >
        {checked && (
          <svg
            className="h-4 w-4 animate-spin-once text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
        {!checked && <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-500" />}
      </span>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</span>
    </label>
  )
}
