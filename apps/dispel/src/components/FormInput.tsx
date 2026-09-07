import { cn } from '@free-react-templates/ui'
import { CircleAlert } from 'lucide-react'

interface FormInputProps {
  label: string
  id: string
  type?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: boolean
  placeholder?: string
  className?: string
}

export function FormInput({
  label,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
  onBlur,
  error = false,
  placeholder,
  className,
}: FormInputProps) {
  return (
    <div className={cn('relative mb-[15px]', className)}>
      <label htmlFor={id} className="mb-[5px] block text-[13px]">
        {label}
        {required && <span className="ml-0.5 text-asterisk">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-invalid={error || undefined}
        className={cn(
          'block w-full rounded-[5px] border bg-transparent px-5 py-[15px] text-[13px] text-ink outline-none transition-colors',
          error ? 'border-error' : 'border-line focus:border-focus',
        )}
      />
      {error && (
        <CircleAlert size={13} className="absolute right-5 top-[40px] text-error" role="alert" />
      )}
    </div>
  )
}
