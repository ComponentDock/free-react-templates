import { useState, useId } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CustomCheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function CustomCheckbox({
  label,
  defaultChecked = false,
  disabled = false,
}: CustomCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex items-center gap-3 transition-all duration-200 select-none',
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
      />
      <span
        className={cn(
          'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all duration-200',
          checked
            ? 'border-[#198754] bg-[#198754]'
            : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
        )}
      >
        {checked && <Check size={12} className="text-white" strokeWidth={3} />}
      </span>
      <span
        className={cn(
          'text-sm',
          checked ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200',
        )}
      >
        {label}
      </span>
    </label>
  )
}
