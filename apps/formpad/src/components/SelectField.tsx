import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps {
  label: string
  name: string
  value: string
  error: boolean
  options: SelectOption[]
  onChange: (value: string) => void
}

export function SelectField({ label, name, value, error, options, onChange }: SelectFieldProps) {
  return (
    <div className="mb-[29px] flex items-center last:mb-0">
      <label htmlFor={name} className="mr-[40px] w-[34.9%] text-sm text-white">
        {label}
      </label>
      <div className="relative w-[65.1%]">
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-[41px] w-full appearance-none rounded-[5px] border bg-white/20 px-[18px] text-sm uppercase text-white focus:border-focus-blue focus:shadow-[0px_0px_7px_0px_rgba(255,255,255,0.7)] focus:outline-none ${
            error ? 'border-red-400' : 'border-white/40'
          }`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute bottom-[7px] right-[20px] text-white"
          size={20}
        />
      </div>
    </div>
  )
}
