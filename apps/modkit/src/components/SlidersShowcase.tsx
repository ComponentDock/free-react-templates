import { Band, GroupLabel } from './Band'

const SLIDERS = [
  { id: 'modkit-range-1', label: 'Default range', value: 50 },
  { id: 'modkit-range-2', label: 'With steps', value: 75 },
]

const RANGE =
  'h-1.5 w-full cursor-pointer appearance-none rounded bg-band accent-kit-primary outline-none'

export function SlidersShowcase() {
  return (
    <Band
      title="Sliders"
      lead="Range sliders built on the native input element, styled with the kit's indigo accent instead of a JavaScript plugin."
    >
      <div className="grid max-w-3xl gap-10 sm:grid-cols-2">
        {SLIDERS.map((slider) => (
          <div key={slider.id}>
            <GroupLabel className="mb-3 text-[0.9rem] text-body">{slider.label}</GroupLabel>
            <label htmlFor={slider.id} className="sr-only">
              {slider.label}
            </label>
            <input
              id={slider.id}
              type="range"
              min={0}
              max={100}
              defaultValue={slider.value}
              className={RANGE}
            />
          </div>
        ))}
      </div>
    </Band>
  )
}
