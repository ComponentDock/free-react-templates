import type { ChangeEvent } from 'react'

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
}: FormFieldProps) {
  const id = `field-${name}`

  return (
    <div className="flex-1">
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-text-secondary">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border border-input-border px-3 py-2.5 text-sm text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-input-focus"
      />
    </div>
  )
}
