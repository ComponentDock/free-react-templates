import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FilterSelectProps {
  label: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export function FilterSelect({
  label,
  options,
  value = '',
  onChange,
  className,
}: FilterSelectProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label className="mb-1 text-xs font-semibold tracking-wider text-searchpeak-heading">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full appearance-none border-b border-searchpeak-border bg-transparent py-2 pr-8 text-sm text-searchpeak-text outline-none"
        >
          <option value="">All</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-searchpeak-heading" />
      </div>
    </div>
  )
}
