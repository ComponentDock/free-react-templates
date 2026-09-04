import { useState, useId } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ItemCheckboxProps {
  label: string
  description?: string
  defaultChecked?: boolean
}

export function ItemCheckbox({ label, description, defaultChecked = false }: ItemCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex cursor-pointer items-start gap-3 rounded-lg border-2 px-4 py-3 transition-all duration-200 select-none',
        checked
          ? 'border-brand-teal bg-brand-teal/10'
          : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600',
      )}
    >
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
      />
      <span
        className={cn(
          'mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all duration-200',
          checked
            ? 'border-brand-teal bg-brand-teal'
            : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
        )}
      >
        {checked && <Check size={12} className="text-white" strokeWidth={3} />}
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            'text-sm font-semibold',
            checked ? 'text-brand-teal dark:text-brand-teal' : 'text-gray-800 dark:text-gray-200',
          )}
        >
          {label}
        </span>
        {description && (
          <span className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{description}</span>
        )}
      </span>
    </label>
  )
}
