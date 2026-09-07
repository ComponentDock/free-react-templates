import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FloatingSelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  required?: boolean
  error?: string
  id?: string
}

export function FloatingSelect({
  label,
  value,
  onChange,
  options,
  required = false,
  error,
  id,
}: FloatingSelectProps) {
  const [, setFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className={cn('floating-input-wrapper', hasValue && 'has-value')}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={cn('peer', error && 'error')}
        aria-label={label}
        aria-required={required}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <label htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="underline-bar" />
      {error && (
        <p className="error-msg" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
