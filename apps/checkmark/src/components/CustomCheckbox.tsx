import { useState, useId } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type CustomCheckboxVariant = 'violet' | 'emerald' | 'rose' | 'amber' | 'sky'

interface CustomCheckboxProps {
  label: string
  variant?: CustomCheckboxVariant
  defaultChecked?: boolean
}

const variantStyles: Record<CustomCheckboxVariant, { box: string; bg: string; text: string }> = {
  violet: {
    box: 'border-violet-400 bg-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950',
    text: 'text-violet-700 dark:text-violet-300',
  },
  emerald: {
    box: 'border-emerald-400 bg-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  rose: {
    box: 'border-rose-400 bg-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950',
    text: 'text-rose-700 dark:text-rose-300',
  },
  amber: {
    box: 'border-amber-400 bg-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950',
    text: 'text-amber-700 dark:text-amber-300',
  },
  sky: {
    box: 'border-sky-400 bg-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950',
    text: 'text-sky-700 dark:text-sky-300',
  },
}

export function CustomCheckbox({
  label,
  variant = 'violet',
  defaultChecked = false,
}: CustomCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()
  const v = variantStyles[variant]

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex cursor-pointer items-center gap-3 rounded-xl px-5 py-3.5 transition-all duration-200 select-none',
        checked
          ? `${v.bg} ring-2 ring-offset-1 ring-offset-white dark:ring-offset-gray-950 ring-current/20`
          : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-750',
      )}
    >
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={() => setChecked((c) => !c)}
      />
      <span
        className={cn(
          'flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-200',
          checked ? v.box : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
        )}
      >
        {checked && <Check size={14} className="text-white" strokeWidth={3} />}
      </span>
      <span
        className={cn('text-sm font-medium', checked ? v.text : 'text-gray-700 dark:text-gray-200')}
      >
        {label}
      </span>
    </label>
  )
}
