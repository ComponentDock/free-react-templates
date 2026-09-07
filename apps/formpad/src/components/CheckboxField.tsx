interface CheckboxFieldProps {
  name: string
  checked: boolean
  error: boolean
  label: string
  onChange: (checked: boolean) => void
}

export function CheckboxField({ name, checked, error, label, onChange }: CheckboxFieldProps) {
  return (
    <div className="mb-[48px]">
      <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span
          className={`flex h-[15px] w-[15px] items-center justify-center rounded-full border ${
            error ? 'border-red-400' : 'border-white/40'
          } peer-checked:border-white`}
        >
          {checked && <span className="h-[7px] w-[7px] rounded-full bg-white" />}
        </span>
        {label}
      </label>
    </div>
  )
}
