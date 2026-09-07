import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FormRadioProps {
  name: string
  options: { label: string; value: string }[]
  defaultValue?: string
}

export function FormRadio({ name, options, defaultValue }: FormRadioProps) {
  const [selected, setSelected] = useState(defaultValue ?? options[0]!.value)

  return (
    <fieldset className="flex items-center gap-[26px] border-0 p-0">
      <legend className="sr-only">{name}</legend>
      {options.map((opt) => {
        const checked = selected === opt.value
        return (
          <label
            key={opt.value}
            className="flex cursor-pointer items-center gap-2 text-[14px] text-input"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => setSelected(opt.value)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className={cn(
                'flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full border border-tick transition-colors',
                checked ? 'border-tick bg-tick' : 'bg-transparent',
              )}
            >
              {checked && (
                <svg viewBox="0 0 12 12" fill="none" className="h-[9px] w-[9px]">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            {opt.label}
          </label>
        )
      })}
    </fieldset>
  )
}
