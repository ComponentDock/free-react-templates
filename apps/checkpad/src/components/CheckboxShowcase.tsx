import { CustomCheckbox } from './CustomCheckbox'

const checkboxes = [
  { label: 'First checkbox', defaultChecked: true, disabled: false },
  { label: 'Second checkbox', defaultChecked: false, disabled: false },
  { label: 'Disabled', defaultChecked: false, disabled: true },
  { label: 'Disabled & checked', defaultChecked: true, disabled: true },
]

export function CheckboxShowcase() {
  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-2 text-left text-2xl font-bold text-gray-800 dark:text-white">
        Checkbox #19
      </h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        Bootstrap checkbox component demo
      </p>
      <div className="flex flex-col gap-4">
        {checkboxes.map((cb) => (
          <CustomCheckbox
            key={cb.label}
            label={cb.label}
            defaultChecked={cb.defaultChecked}
            disabled={cb.disabled}
          />
        ))}
      </div>
    </section>
  )
}
