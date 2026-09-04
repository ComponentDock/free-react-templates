import { useState, useId } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface DayNightToggleProps {
  defaultChecked?: boolean
  label?: string
}

export function DayNightToggle({ defaultChecked = false, label = 'Toggle' }: DayNightToggleProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
      />
      <label
        htmlFor={id}
        className={cn('relative block h-[30px] w-[50px] cursor-pointer select-none')}
        aria-label={label}
      >
        {/* Track */}
        <span
          className={cn(
            'absolute top-[3px] left-[3px] block h-[22px] w-[50px] rounded-[30px] transition-colors duration-200',
            checked ? 'bg-brand-amber-light' : 'bg-toggle-track',
          )}
        />
        {/* Knob */}
        <span
          className={cn(
            'absolute top-[2px] left-0 flex h-[24px] w-[24px] items-center justify-center rounded-full transition-all duration-200',
            checked
              ? 'translate-x-[26px] bg-brand-amber shadow-[0_3px_8px_rgba(241,188,49,0.7)]'
              : 'translate-x-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.2)]',
          )}
        >
          {checked ? (
            <Sun size={12} className="text-black" />
          ) : (
            <Moon size={12} className="text-gray-700" />
          )}
        </span>
      </label>
    </div>
  )
}
