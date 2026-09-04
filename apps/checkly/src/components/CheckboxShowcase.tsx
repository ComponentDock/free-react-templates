import { CircleCheckbox } from './CircleCheckbox'

const checkboxes = [
  { label: 'Basketball', defaultChecked: true },
  { label: 'Baseball', defaultChecked: false },
  { label: 'Badminton', defaultChecked: false },
]

export function CheckboxShowcase() {
  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Checkbox #02
      </h1>
      <div className="mb-8 text-center">
        <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400">
          Choose your favorite sports
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {checkboxes.map((cb) => (
          <CircleCheckbox key={cb.label} label={cb.label} defaultChecked={cb.defaultChecked} />
        ))}
      </div>
    </section>
  )
}
