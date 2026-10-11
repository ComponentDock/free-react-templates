import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const CHECKBOXES = [
  { label: 'Unchecked', checked: false, disabled: false },
  { label: 'Checked', checked: true, disabled: false },
  { label: 'Disabled Unchecked', checked: false, disabled: true },
  { label: 'Disabled Checked', checked: true, disabled: true },
]

const RADIOS = [
  { label: 'Radio is off', checked: false },
  { label: 'Radio is on', checked: true },
]

const BADGES = [
  { label: 'Primary', className: 'bg-primary text-white' },
  { label: 'Info', className: 'bg-info text-white' },
  { label: 'Success', className: 'bg-success text-strong' },
  { label: 'Warning', className: 'bg-warning text-strong' },
  { label: 'Danger', className: 'bg-danger text-white' },
  { label: 'Rose', className: 'bg-rose text-white' },
]

const PROGRESS = [
  { value: 40, label: '40% Complete', bar: 'bg-primary' },
  { value: 60, label: '60% Complete', bar: 'bg-primary' },
  { value: 70, label: '70% Complete', bar: 'bg-primary' },
  { value: 35, label: '35% Complete (success)', bar: 'bg-success' },
  { value: 20, label: '20% Complete (warning)', bar: 'bg-warning' },
  { value: 30, label: '30% Complete (danger)', bar: 'bg-danger' },
]

/**
 * The selection-controls band: checkboxes, radios, toggles, sliders, badges,
 * progress bars and paginations — all React state, no plugin JS.
 */
export function ControlsShowcase() {
  const [newsletter, setNewsletter] = useState(false)
  const [plan, setPlan] = useState<'on' | 'off'>('on')
  const [brightness, setBrightness] = useState(50)
  const [page, setPage] = useState(1)

  return (
    <ShowcaseSection id="checkRadios">
      <div>
        <SubHeading>Checkboxes</SubHeading>
        <div className="space-y-2">
          {CHECKBOXES.map(({ label, checked, disabled }) => (
            <label
              key={label}
              htmlFor={label === 'Unchecked' ? 'unchecked-box' : undefined}
              className="flex items-center gap-3"
            >
              <input
                id={label === 'Unchecked' ? 'unchecked-box' : undefined}
                type="checkbox"
                aria-label={label}
                checked={label === 'Unchecked' ? newsletter : checked}
                disabled={disabled}
                onChange={() => setNewsletter(!newsletter)}
                className="h-4 w-4 accent-primary"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Radio Buttons</SubHeading>
        <div className="space-y-2">
          {RADIOS.map(({ label, checked }) => (
            <label key={label} className="flex items-center gap-3">
              <input
                type="radio"
                name="radio-demo"
                aria-label={label}
                defaultChecked={checked}
                className="h-4 w-4 accent-primary"
              />
              {label}
            </label>
          ))}
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="radio-demo"
              aria-label="Disabled radio is off"
              disabled
              className="h-4 w-4 accent-primary"
            />
            Disabled radio is off
          </label>
        </div>
      </div>

      <div>
        <SubHeading>Toggle Buttons</SubHeading>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <button
              type="button"
              role="switch"
              aria-checked={plan === 'on'}
              aria-label="Toggle is on"
              onClick={() => setPlan(plan === 'on' ? 'off' : 'on')}
              className={cn(
                'relative h-6 w-11 cursor-pointer rounded-full transition-colors',
                plan === 'on' ? 'bg-primary' : 'bg-track',
              )}
            >
              <span
                className={cn(
                  'absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all',
                  plan === 'on' ? 'left-[22px]' : 'left-0.5',
                )}
              />
            </button>
            Toggle is on
            <span className="rounded bg-primary px-2 py-0.5 text-[12px] font-bold text-white">
              ON
            </span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" aria-label="Toggle is Off" className="h-4 w-4 accent-primary" />
            Toggle is Off
          </label>
        </div>
      </div>

      <div>
        <SubHeading>Sliders</SubHeading>
        <div className="max-w-md space-y-4">
          <input
            type="range"
            aria-label="Brightness"
            min={0}
            max={100}
            value={brightness}
            onChange={(event) => setBrightness(Number(event.target.value))}
            className="w-full accent-primary"
          />
          <input
            type="range"
            aria-label="Contrast"
            min={0}
            max={100}
            defaultValue={70}
            className="w-full accent-primary"
          />
        </div>
      </div>

      <div>
        <SubHeading>Badges</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          {BADGES.map(({ label, className }) => (
            <span
              key={label}
              className={cn(
                'inline-block rounded px-2 py-0.5 text-[75%] font-bold leading-none',
                className,
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Progress bars</SubHeading>
        <div className="space-y-4">
          {PROGRESS.map(({ value, label, bar }) => (
            <div key={label}>
              <p className="mb-1 text-sm">{label}</p>
              <div
                role="progressbar"
                aria-label={label}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-4 w-full overflow-hidden rounded bg-track"
              >
                <div className={cn('h-full', bar)} style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Paginations</SubHeading>
        <nav aria-label="Compact pagination" className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => setPage(Math.max(1, page - 1))}
            className="cursor-pointer rounded border border-line px-3 py-1 hover:bg-light"
          >
            «
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-current={page === n ? 'page' : undefined}
              onClick={() => setPage(n)}
              className={cn(
                'cursor-pointer rounded border border-line px-3 py-1',
                page === n ? 'bg-primary text-white' : 'hover:bg-light',
              )}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            onClick={() => setPage(Math.min(5, page + 1))}
            className="cursor-pointer rounded border border-line px-3 py-1 hover:bg-light"
          >
            »
          </button>
        </nav>

        <nav aria-label="Pagination" className="mt-4 flex items-center gap-1">
          <button
            type="button"
            className="cursor-pointer rounded border border-line px-3 py-1 hover:bg-light"
          >
            Previous
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <button
              key={n}
              type="button"
              className="cursor-pointer rounded border border-line px-3 py-1 hover:bg-light"
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            className="cursor-pointer rounded border border-line px-3 py-1 hover:bg-light"
          >
            Next
          </button>
        </nav>
      </div>
    </ShowcaseSection>
  )
}
