import { useState, useId } from 'react'

interface VexCheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function VexCheckbox({ label, defaultChecked = false, disabled = false }: VexCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 select-none ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
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
        className={`relative flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] border-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          checked
            ? 'scale-100 border-primary-500 bg-primary-500 shadow-sm'
            : 'scale-100 border-gray-300 bg-white hover:border-gray-400'
        }`}
      >
        {checked && (
          <svg
            className="h-3.5 w-3.5 text-white"
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
      <span className="text-base font-medium text-gray-700 dark:text-gray-200">{label}</span>
    </label>
  )
}
