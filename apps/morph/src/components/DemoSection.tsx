import { MorphCheckbox } from './MorphCheckbox'

const checkboxes = [
  { label: 'Design the mockups', defaultChecked: true, disabled: false },
  { label: 'Build the components', defaultChecked: false, disabled: false },
  { label: 'Write the tests', defaultChecked: false, disabled: false },
  { label: 'Ship to production', defaultChecked: false, disabled: true },
]

export function DemoSection() {
  return (
    <section className="px-4 py-[112px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h1 className="mb-2 text-[28px] font-normal text-black dark:text-white">Checkbox #15</h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Animated square-to-tick morphing checkbox
        </p>
        <div className="flex justify-center">
          <ul className="list-none p-5">
            {checkboxes.map((item) => (
              <MorphCheckbox
                key={item.label}
                label={item.label}
                defaultChecked={item.defaultChecked}
                disabled={item.disabled}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
