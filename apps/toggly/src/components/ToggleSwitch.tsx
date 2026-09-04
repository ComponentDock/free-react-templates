import { useId, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface ToggleSwitchProps {
  defaultChecked?: boolean
  label?: string
}

export function ToggleSwitch({ defaultChecked = false, label }: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <div className="flex w-full items-center justify-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        className="sr-only"
        aria-label={label ?? 'Toggle'}
      />
      <label
        htmlFor={id}
        className={cn(
          'relative block h-5 w-[34px] cursor-pointer',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink',
        )}
      >
        {/* Track */}
        <span
          className={cn(
            'absolute left-[3px] top-[3px] block h-[14px] w-[34px] rounded-[8px] transition-colors duration-200 ease-in-out',
            checked ? 'bg-track-checked' : 'bg-track-unchecked',
          )}
          aria-hidden="true"
        />
        {/* Knob */}
        <span
          className={cn(
            'absolute left-0 top-0 block h-5 w-5 rounded-full transition-all duration-200',
            checked
              ? 'translate-x-[20px] bg-brand-pink shadow-[0_3px_8px_rgba(255,123,176,0.2)] [transition-timing-function:cubic-bezier(0.8,0.4,0.3,1.25)]'
              : 'bg-white shadow-[0_3px_8px_rgba(0,0,0,0.2)]',
          )}
          aria-hidden="true"
        />
        {/* Halo — pink ripple puff on check */}
        <span
          className={cn(
            'pointer-events-none absolute -m-[18px] block h-[56px] w-[56px] rounded-full bg-halo-pink',
            checked
              ? 'scale-100 opacity-0 transition-all duration-400 ease-out'
              : 'scale-0 opacity-100',
          )}
          aria-hidden="true"
        />
      </label>
    </div>
  )
}
