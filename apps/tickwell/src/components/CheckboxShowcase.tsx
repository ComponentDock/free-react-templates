import { AnimatedCheckbox } from './AnimatedCheckbox'

const checkboxes = [
  {
    label: 'Enable Dark Mode',
    defaultChecked: false,
  },
  {
    label: 'Send Email Notifications',
    defaultChecked: true,
  },
  {
    label: 'Accept Terms & Conditions',
    defaultChecked: false,
  },
]

export function CheckboxShowcase() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">Checkbox #05</h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Animated checkmark checkboxes
        </p>
        <div className="flex flex-col gap-3 text-left">
          {checkboxes.map((cb) => (
            <AnimatedCheckbox key={cb.label} label={cb.label} defaultChecked={cb.defaultChecked} />
          ))}
        </div>
      </div>
    </section>
  )
}
