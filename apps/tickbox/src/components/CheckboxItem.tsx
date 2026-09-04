import { useState, useId } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CheckboxItemProps {
  label: string
  defaultChecked?: boolean
}

export function CheckboxItem({ label, defaultChecked = false }: CheckboxItemProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <li className="block">
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
      />
      <label
        htmlFor={id}
        className={cn(
          'inline-flex cursor-pointer items-center gap-3 rounded-lg border px-6 py-3 text-base font-medium transition-all duration-200',
          checked
            ? 'border-brand-indigo bg-brand-indigo/10 text-brand-indigo'
            : 'border-gray-200 bg-white text-text-dark hover:border-brand-indigo/50 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
        )}
      >
        <span
          className={cn(
            'flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-200',
            checked
              ? 'border-brand-indigo bg-brand-indigo'
              : 'border-gray-300 bg-white dark:border-gray-600',
          )}
        >
          {checked && <Check size={14} className="text-white" strokeWidth={3} />}
        </span>
        {label}
      </label>
    </li>
  )
}
