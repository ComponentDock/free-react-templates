import { useState } from 'react'

const variants = [
  { name: 'Blue', colorClass: 'text-blue', label: 'Blue' },
  { name: 'Indigo', colorClass: 'text-indigo', label: 'Indigo' },
  { name: 'Purple', colorClass: 'text-purple', label: 'Purple' },
  { name: 'Pink', colorClass: 'text-pink', label: 'Pink' },
  { name: 'Disabled', colorClass: 'text-dark', label: 'Disabled', disabled: true },
]

export function Checkboxes() {
  const [checked, setChecked] = useState([true, true, true, true, false])

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  return (
    <div className="flex flex-wrap gap-6">
      {variants.map((v, i) => (
        <label
          key={v.name}
          className={`inline-flex cursor-pointer items-center gap-2 text-sm font-medium ${v.colorClass} ${v.disabled ? 'cursor-not-allowed opacity-65' : ''}`}
        >
          <input
            type="checkbox"
            checked={checked[i]}
            disabled={v.disabled}
            onChange={() => toggle(i)}
            className="sr-only"
          />
          <span
            className={`flex h-5 w-5 items-center justify-center rounded border-2 ${checked[i] ? `border-current bg-current text-white` : 'border-gray-300 bg-white'}`}
          >
            {checked[i] && (
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          {v.label}
        </label>
      ))}
    </div>
  )
}
