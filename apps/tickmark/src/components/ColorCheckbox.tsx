import { useState } from 'react'

export type ColorCheckboxVariant =
  'primary' | 'success' | 'danger' | 'warning' | 'info' | 'disabled'

interface ColorCheckboxProps {
  label: string
  variant: ColorCheckboxVariant
  defaultChecked?: boolean
  disabled?: boolean
}

const variantStyles: Record<ColorCheckboxVariant, { box: string; check: string; label: string }> = {
  primary: {
    box: 'border-[#0075f6] bg-[#0075f6]',
    check: 'border-white',
    label: 'text-gray-800 dark:text-gray-200',
  },
  success: {
    box: 'border-[#28a745] bg-[#28a745]',
    check: 'border-white',
    label: 'text-gray-800 dark:text-gray-200',
  },
  danger: {
    box: 'border-[#dc3545] bg-[#dc3545]',
    check: 'border-white',
    label: 'text-gray-800 dark:text-gray-200',
  },
  warning: {
    box: 'border-[#ffc107] bg-[#ffc107]',
    check: 'border-gray-800',
    label: 'text-gray-800 dark:text-gray-200',
  },
  info: {
    box: 'border-[#17a2b8] bg-[#17a2b8]',
    check: 'border-white',
    label: 'text-gray-800 dark:text-gray-200',
  },
  disabled: {
    box: 'border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-700',
    check: 'border-gray-400 dark:border-gray-500',
    label: 'text-gray-400 dark:text-gray-500',
  },
}

export function ColorCheckbox({
  label,
  variant,
  defaultChecked = false,
  disabled = variant === 'disabled',
}: ColorCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const styles = variantStyles[variant]

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
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 transition-colors ${
          checked ? styles.box : 'border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-800'
        }`}
      >
        {checked && (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" className={styles.check} />
          </svg>
        )}
      </span>
      <span className={`text-sm font-medium ${styles.label}`}>{label}</span>
    </label>
  )
}
