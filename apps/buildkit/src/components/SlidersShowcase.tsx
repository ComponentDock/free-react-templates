import { ShowcaseSection } from './section'

const SLIDERS = [
  { id: 'buildkit-slider-value', label: 'Value', value: 70 },
  { id: 'buildkit-slider-range', label: 'Range', value: 40 },
]

export function SlidersShowcase() {
  return (
    <ShowcaseSection id="sliders" title="Sliders">
      <div className="max-w-md space-y-6">
        {SLIDERS.map(({ id, label, value }) => (
          <div key={id}>
            <label htmlFor={id} className="text-sm text-heading">
              {label}
            </label>
            <input
              id={id}
              type="range"
              min={0}
              max={100}
              defaultValue={value}
              className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded bg-gray-200 accent-primary-600"
            />
          </div>
        ))}
      </div>
    </ShowcaseSection>
  )
}
