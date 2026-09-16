interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'textarea'
  required?: boolean
}

export function FormField({ label, name, type = 'text', required = false }: FormFieldProps) {
  const id = `field-${name}`

  return (
    <div className="field-group">
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={4}
          className="resize-none"
          aria-label={label}
        />
      ) : (
        <input id={id} type={type} name={name} required={required} aria-label={label} />
      )}
      <label htmlFor={id}>{label}</label>
      <span className="underline" />
    </div>
  )
}
