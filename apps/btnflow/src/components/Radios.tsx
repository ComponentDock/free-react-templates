import { useState } from 'react'

const variants = [
  { name: 'Blue', colorClass: 'text-blue', label: 'Blue', group: 'radio-blue' },
  { name: 'Indigo', colorClass: 'text-indigo', label: 'Indigo', group: 'radio-indigo' },
  { name: 'Purple', colorClass: 'text-purple', label: 'Purple', group: 'radio-purple' },
  { name: 'Pink', colorClass: 'text-pink', label: 'Pink', group: 'radio-pink' },
  {
    name: 'Disabled',
    colorClass: 'text-dark',
    label: 'Disabled',
    group: 'radio-dark',
    disabled: true,
  },
]

export function Radios() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-wrap gap-6">
      {variants.map((v, i) => (
        <label
          key={v.name}
          className={`${v.group} ${v.colorClass} inline-flex cursor-pointer items-center gap-2 text-sm font-medium ${v.disabled ? 'cursor-not-allowed opacity-65' : ''}`}
        >
          <input
            type="radio"
            name="btnflow-radios"
            checked={selected === i}
            disabled={v.disabled}
            onChange={() => setSelected(i)}
            className="sr-only"
          />
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selected === i ? `border-current` : 'border-gray-300 bg-white'}`}
          >
            {selected === i && <span className={`h-2.5 w-2.5 rounded-full bg-current`} />}
          </span>
          {v.label}
        </label>
      ))}
    </div>
  )
}
