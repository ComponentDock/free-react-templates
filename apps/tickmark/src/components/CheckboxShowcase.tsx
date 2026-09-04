import { ColorCheckbox } from './ColorCheckbox'

const checkboxes = [
  { label: 'Primary', variant: 'primary' as const },
  { label: 'Success', variant: 'success' as const },
  { label: 'Danger', variant: 'danger' as const },
  { label: 'Warning', variant: 'warning' as const },
  { label: 'Info', variant: 'info' as const },
  { label: 'Disabled', variant: 'disabled' as const },
]

export function CheckboxShowcase() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Checkbox #01
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {checkboxes.map((cb) => (
          <ColorCheckbox key={cb.variant} label={cb.label} variant={cb.variant} />
        ))}
      </div>
    </section>
  )
}
