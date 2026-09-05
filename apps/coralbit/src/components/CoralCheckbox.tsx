import { useState, useId } from 'react'

interface CoralCheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function CoralCheckbox({
  label,
  defaultChecked = false,
  disabled = false,
}: CoralCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 select-none ${
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
      }`}
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
        className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
          checked
            ? 'bg-coral shadow-[0_1px_2px_0_rgba(0,0,0,0.5)]'
            : 'bg-coral-unchecked shadow-[0_1px_2px_0_rgba(0,0,0,0.5)] hover:bg-gray-300'
        }`}
      >
        {checked && (
          <svg
            className="h-3 w-3 text-white"
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
      </span>
      <span className="text-base text-gray-800 dark:text-gray-200">{label}</span>
    </label>
  )
}
