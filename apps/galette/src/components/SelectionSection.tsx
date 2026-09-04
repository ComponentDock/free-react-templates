import { ItemCheckbox } from './ItemCheckbox'

const options = [
  {
    label: 'Email Notifications',
    description: 'Receive updates about your account activity',
  },
  {
    label: 'Weekly Newsletter',
    description: 'Get our weekly digest of curated content',
  },
  {
    label: 'Accept Terms & Conditions',
    description: 'I agree to the terms of service and privacy policy',
  },
]

export function SelectionSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">Checkbox #04</h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">Select your preferences</p>
        <div className="flex flex-col gap-3 text-left">
          {options.map((opt) => (
            <ItemCheckbox key={opt.label} label={opt.label} description={opt.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
