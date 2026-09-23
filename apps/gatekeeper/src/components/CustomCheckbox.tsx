interface CustomCheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function CustomCheckbox({ label, checked, onChange }: CustomCheckboxProps) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-2 text-[16px] font-medium text-brand">
      <span className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="flex h-[20px] w-[20px] items-center justify-center rounded border border-black/10 bg-transparent transition-colors duration-300 peer-checked:border-brand peer-checked:bg-brand">
          {checked && (
            <svg
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
      </span>
      {label}
    </label>
  )
}
