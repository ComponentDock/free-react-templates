import { VexCheckbox } from './VexCheckbox'

const checkboxes = [
  { label: 'Design the mockups', defaultChecked: true, disabled: false },
  { label: 'Build the components', defaultChecked: false, disabled: false },
  { label: 'Write the tests', defaultChecked: false, disabled: false },
  { label: 'Ship to production', defaultChecked: false, disabled: true },
]

export function DemoSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-[560px] text-center">
        <h1 className="mb-2 text-[28px] font-semibold text-gray-900 dark:text-white">
          Checkbox #17
        </h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Modern animated checkbox with indigo accent
        </p>
        <div className="flex flex-col gap-5 text-left">
          {checkboxes.map((item) => (
            <VexCheckbox
              key={item.label}
              label={item.label}
              defaultChecked={item.defaultChecked}
              disabled={item.disabled}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
