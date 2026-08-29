import { useState } from 'react'

interface CheckboxItem {
  label: string
  color: string
  checked: boolean
  disabled?: boolean
}

interface RadioItem {
  label: string
  color: string
  name: string
  checked: boolean
}

const initialCheckboxes: CheckboxItem[] = [
  { label: 'Primary', color: 'bg-paddle-primary', checked: true },
  { label: 'Success', color: 'bg-green-500', checked: true },
  { label: 'Danger', color: 'bg-red-500', checked: true },
  { label: 'Warning', color: 'bg-yellow-500', checked: true },
  { label: 'Disabled', color: 'bg-gray-400', checked: true, disabled: true },
]

const initialRadios: RadioItem[] = [
  { label: 'Primary', color: 'bg-paddle-primary', name: 'radio-primary', checked: true },
  { label: 'Success', color: 'bg-green-500', name: 'radio-success', checked: true },
  { label: 'Danger', color: 'bg-red-500', name: 'radio-danger', checked: true },
  { label: 'Warning', color: 'bg-yellow-500', name: 'radio-warning', checked: true },
  { label: 'Disabled', color: 'bg-gray-400', name: 'radio-disabled', checked: true },
]

export function CheckboxesRadios() {
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes)

  function toggleCheckbox(index: number) {
    setCheckboxes((prev) =>
      prev.map((cb, i) => (i === index ? { ...cb, checked: !cb.checked } : cb)),
    )
  }

  return (
    <section data-testid="checkboxes-radios" className="mb-12">
      <h2 className="mb-6 text-base font-medium text-paddle-heading">Checkboxes &amp; Radios</h2>

      <div className="mb-6">
        <h3 className="mb-4 text-sm font-medium text-paddle-heading">Checkboxes</h3>
        <div className="flex flex-wrap gap-4">
          {checkboxes.map((cb, i) => (
            <label key={cb.label} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={cb.checked}
                disabled={cb.disabled}
                onChange={() => toggleCheckbox(i)}
                className={`h-5 w-5 cursor-pointer accent-current ${cb.color}`}
                aria-label={`${cb.label} checkbox`}
              />
              <span className="text-sm text-paddle-text">{cb.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium text-paddle-heading">Radios</h3>
        <div className="flex flex-wrap gap-4">
          {initialRadios.map((radio) => (
            <label key={radio.label} className="flex items-center gap-2">
              <input
                type="radio"
                name={radio.name}
                defaultChecked={radio.checked}
                className={`h-5 w-5 cursor-pointer accent-current ${radio.color}`}
                aria-label={`${radio.label} radio`}
              />
              <span className="text-sm text-paddle-text">{radio.label}</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}
