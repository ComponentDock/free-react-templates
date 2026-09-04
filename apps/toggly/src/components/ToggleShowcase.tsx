import { ToggleSwitch } from './ToggleSwitch'

export function ToggleShowcase() {
  return (
    <section className="flex items-center justify-center px-4 py-[7em] sm:px-6">
      <div className="w-full max-w-[350px] text-center">
        <h2 className="mb-5 pb-4 text-[28px] font-bold leading-tight text-black">Checkbox #06</h2>
        <small className="mb-8 block text-lg text-black/50">Switch Toggle</small>
        <div className="flex flex-col gap-7">
          <ToggleSwitch label="Toggle 1" />
          <ToggleSwitch defaultChecked label="Toggle 2" />
        </div>
      </div>
    </section>
  )
}
