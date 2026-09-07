import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FloatingInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
  error?: string
  style?: React.CSSProperties
  id?: string
}

export function FloatingInput({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
  style,
  id,
}: FloatingInputProps) {
  const [, setFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className={cn('floating-input-wrapper', hasValue && 'has-value')} style={style}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder=" "
        className={cn('peer', error && 'error')}
        aria-label={label}
        aria-required={required}
      />
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
