import { TeleportToggle } from './TeleportToggle'

const switches = [
  { caption: 'Switch 1', defaultChecked: true, disabled: false },
  { caption: 'Switch 2', defaultChecked: false, disabled: false },
  { caption: 'Switch disabled', defaultChecked: false, disabled: true },
  { caption: 'Switch disabled & checked', defaultChecked: true, disabled: true },
]

export function ToggleShowcase() {
  return (
    <section className="mx-auto max-w-md px-4 py-28">
      <h1 className="mb-12 text-left text-xl font-medium text-[#212529] dark:text-white">
        Checkbox #9
      </h1>
      <div>
        {switches.map((sw) => (
          <TeleportToggle
            key={sw.caption}
            caption={sw.caption}
            defaultChecked={sw.defaultChecked}
            disabled={sw.disabled}
          />
        ))}
      </div>
    </section>
  )
}
