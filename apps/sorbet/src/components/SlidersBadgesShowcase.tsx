import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const SLIDERS = [
  { id: 'sorbet-slider-one', label: 'Slider one', value: 70 },
  { id: 'sorbet-slider-two', label: 'Slider two', value: 35 },
]

const BADGES = [
  { label: 'Primary', className: 'bg-primary-500 text-heading' },
  { label: 'Info', className: 'bg-info text-white' },
  { label: 'Success', className: 'bg-success text-heading' },
  { label: 'Warning', className: 'bg-warning text-heading' },
  { label: 'Danger', className: 'bg-danger text-white' },
  { label: 'Rose', className: 'bg-rose text-white' },
]

/** Two native range sliders beside the six solid pill badges. */
export function SlidersBadgesShowcase() {
  return (
    <ShowcaseSection id="sliders">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-[28px] font-medium text-heading">Sliders</h2>
          <div className="space-y-6">
            {SLIDERS.map(({ id, label, value }) => (
              <input
                key={id}
                id={id}
                type="range"
                min={0}
                max={100}
                defaultValue={value}
                aria-label={label}
                className="h-1.5 w-full cursor-pointer appearance-none rounded bg-gray-200 accent-primary-500"
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-[28px] font-medium text-heading">Badges</h2>
          <div className="flex flex-wrap items-center gap-2">
            {BADGES.map(({ label, className }) => (
              <span
                key={label}
                className={cn(
                  'inline-block rounded-full px-3 py-2 text-[12px] font-bold leading-none',
                  className,
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ShowcaseSection>
  )
}
