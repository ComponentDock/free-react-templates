import { Square, SquareCheck } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  const Glyph = checked ? SquareCheck : Square
  return (
    <label className="relative block cursor-pointer select-none text-[16px] font-medium">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        aria-label={label}
        className="absolute h-0 w-0 cursor-pointer opacity-0"
      />
      <Glyph
        aria-hidden="true"
        size={20}
        className={cn(
          'absolute left-0 top-0 transition-colors duration-300 motion-reduce:transition-none',
          checked ? 'text-accent' : 'text-uncheck',
        )}
      />
    </label>
  )
}
