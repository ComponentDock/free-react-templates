import { useState, useId } from 'react'
import { Plus, Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface TagCheckboxProps {
  label: string
  defaultChecked?: boolean
}

export function TagCheckbox({ label, defaultChecked = false }: TagCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <li className="inline-block">
      <input
        type="checkbox"
        id={id}
        className="peer sr-only"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
      />
      <label
        htmlFor={id}
        className={cn(
          'inline-flex cursor-pointer select-none items-center rounded-full border px-3 py-2 text-sm transition-all duration-200',
          checked
            ? 'border-brand-amber bg-brand-amber text-white'
            : 'border-[rgba(139,139,139,0.3)] bg-[rgba(255,255,255,0.9)] text-[#adadad]',
        )}
      >
        <span className="mr-1.5 inline-flex items-center">
          {checked ? (
            <Check
              size={12}
              className="rotate-[-360deg] transition-transform duration-300 ease-in-out"
            />
          ) : (
            <Plus size={12} />
          )}
        </span>
        {label}
      </label>
    </li>
  )
}
