import { KnobToggle } from './KnobToggle'

const toggles = [
  { label: 'Notifications', defaultChecked: true, disabled: false },
  { label: 'Dark mode', defaultChecked: false, disabled: false },
  { label: 'Auto-save', defaultChecked: false, disabled: false },
  { label: 'Marketing emails', defaultChecked: false, disabled: true },
]

export function ToggleShowcase() {
  return (
    <section className="px-4 py-[112px]">
      <div className="mx-auto max-w-[400px] text-center">
        <h1 className="mb-2 text-[28px] font-normal text-gray-900 dark:text-white">Checkbox #18</h1>
        <p className="mb-10 text-[15px] text-gray-500 dark:text-gray-400">Toggle Buttons</p>
        <div className="flex flex-col gap-6 text-left">
          {toggles.map((t) => (
            <KnobToggle
              key={t.label}
              label={t.label}
              defaultChecked={t.defaultChecked}
              disabled={t.disabled}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
