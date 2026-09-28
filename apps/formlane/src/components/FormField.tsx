interface FormFieldProps {
  id: string
  label: string
  type?: string
  name?: string
  required?: boolean
  pattern?: string
}

export function FormField({
  id,
  label,
  type = 'text',
  name,
  required = false,
  pattern,
}: FormFieldProps) {
  return (
    <div className="group mb-5">
      <label htmlFor={id} className="mb-1 block text-sm font-light text-label-on-dark">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name ?? id}
        required={required}
        pattern={pattern}
        className="w-full border-b border-white/20 bg-transparent py-2 text-[18px] font-light text-white outline-none transition-colors focus:border-focus-border"
      />
    </div>
  )
}
