import { type ReactNode, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FormFieldProps {
  label: string
  type?: string
  name: string
  placeholder: string
  icon: ReactNode
  error?: string
}

export function FormField({
  label,
  type = 'text',
  name,
  placeholder,
  icon,
  error,
}: FormFieldProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="mb-1 block font-[family-name:var(--font-poppins)] text-sm text-[var(--color-text-label)]"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className={cn(
            'h-[55px] w-full border-0 border-b-2 bg-transparent pr-2 pl-10 font-[family-name:var(--font-poppins)] text-base text-[var(--color-text-input)] placeholder:text-[var(--color-input-placeholder)] focus:outline-none',
            error
              ? 'border-[var(--color-error)]'
              : focused
                ? 'border-[var(--color-focus-border)]'
                : 'border-[var(--color-input-border)]',
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span
          className={cn(
            'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2',
            focused ? 'text-[var(--color-icon-focus)]' : 'text-[var(--color-icon)]',
          )}
        >
          {icon}
        </span>
      </div>
      {error && <p className="mt-1 text-xs text-[var(--color-error)]">{error}</p>}
    </div>
  )
}
