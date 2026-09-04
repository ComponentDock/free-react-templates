import { useState, useId } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CheckboxItemProps {
  label: string
  defaultChecked?: boolean
}

export function CheckboxItem({ label, defaultChecked = false }: CheckboxItemProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <li className="block">
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
      />
      <label
        htmlFor={id}
        className={cn(
          'inline-flex cursor-pointer items-center gap-2 rounded-sm border px-5 py-2.5 text-lg transition-all duration-200',
          checked
            ? 'border-brand-green bg-white/90 text-text-dark line-through'
            : 'border-black/10 bg-white/90 text-text-dark',
        )}
      >
        {checked && <CheckCircle2 size={18} className="text-brand-green" />}
        {label}
      </label>
    </li>
  )
}
