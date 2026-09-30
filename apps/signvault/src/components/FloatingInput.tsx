import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FloatingInputProps {
  label: string
  placeholder: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function FloatingInput({
  label,
  placeholder,
  type = 'text',
  value: controlledValue,
  onChange,
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [internalValue, setInternalValue] = useState('')
  const value = controlledValue ?? internalValue
  const isFloating = isFocused || value.length > 0

  const name = label
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    } else {
      setInternalValue(e.target.value)
    }
  }

  return (
    <div className="relative mb-4">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          'w-full rounded-lg border bg-white px-4 pt-5 pb-2 text-sm text-heading outline-none transition-colors',
          'border-input-border focus:border-brand',
        )}
      />
      <label
        className={cn(
          'pointer-events-none absolute left-4 transition-all duration-200',
          isFloating ? 'top-1.5 text-xs text-label' : 'top-3.5 text-sm text-label',
        )}
      >
        {label}
      </label>
    </div>
  )
}
