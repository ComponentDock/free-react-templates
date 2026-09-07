interface FormFieldProps {
  label: string
  name: string
  type: string
  value: string
  error: boolean
  placeholder?: string
  onChange: (value: string) => void
}

export function FormField({
  label,
  name,
  type,
  value,
  error,
  placeholder,
  onChange,
}: FormFieldProps) {
  return (
    <div className="mb-[29px] flex items-center last:mb-0">
      <label htmlFor={name} className="mr-[40px] w-[34.9%] text-sm text-white">
        {label}
      </label>
      <div className="relative w-[65.1%]">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`h-[41px] w-full rounded-[5px] border bg-white/20 px-[18px] text-sm text-white placeholder-white/60 focus:border-focus-blue focus:shadow-[0px_0px_7px_0px_rgba(255,255,255,0.7)] focus:outline-none ${
            error ? 'border-red-400' : 'border-white/40'
          }`}
        />
      </div>
    </div>
  )
}
