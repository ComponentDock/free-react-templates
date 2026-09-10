import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface FormFieldProps {
  label: string
  placeholder: string
  icon: ReactNode
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  required?: boolean
  half?: boolean
}

export function FormField({
  label,
  placeholder,
  icon,
  value,
  onChange,
  error,
  type = 'text',
  required = false,
  half = true,
}: FormFieldProps) {
  return (
    <div className={cn('relative', half ? 'w-full md:w-1/2' : 'w-full')}>
      <label htmlFor={label} className="sr-only">
        {placeholder}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${label}-error` : undefined}
        className={cn(
          'h-11 w-full rounded-md border border-surface-300 bg-transparent pr-10 pl-5 text-sm text-surface-800 placeholder-surface-400 transition-colors focus:border-brand-400 focus:outline-none',
          error && 'border-red-400',
        )}
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand-400">
        {icon}
      </span>
      {error && (
        <p id={`${label}-error`} className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
