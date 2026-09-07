interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  label: string
  name: string
  value: string
  error: boolean
  options: RadioOption[]
  onChange: (value: string) => void
}

export function RadioGroup({ label, name, value, error, options, onChange }: RadioGroupProps) {
  return (
    <div className="mb-[29px] flex items-start last:mb-0">
      <label className="mr-[40px] mt-[10px] w-[34.9%] text-sm text-white">{label}</label>
      <div className="flex w-[65.1%] gap-6">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex cursor-pointer items-center gap-2 text-sm text-white"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="peer sr-only"
            />
            <span
              className={`flex h-[15px] w-[15px] items-center justify-center rounded-full border ${
                error ? 'border-red-400' : 'border-white/40'
              } peer-checked:border-white`}
            >
              {value === opt.value && <span className="h-[7px] w-[7px] rounded-full bg-white" />}
            </span>
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  )
}
