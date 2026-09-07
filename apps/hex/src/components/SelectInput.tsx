import { cn } from '@free-react-templates/ui'
import { ChevronDown } from 'lucide-react'

interface SelectInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  error?: string
}

export function SelectInput({ id, label, value, onChange, options, error }: SelectInputProps) {
  return (
    <div className="relative mb-6">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full appearance-none border-0 border-b-2 bg-transparent pb-2 pl-0 pr-8 pt-3 text-sm outline-none transition-colors',
          error ? 'border-red-500' : 'border-[#e5e5e5] focus:border-[#24c1e8]',
          value ? 'text-[#666]' : 'text-[#999]',
        )}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-0 top-3 h-4 w-4 text-[#999]" />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
