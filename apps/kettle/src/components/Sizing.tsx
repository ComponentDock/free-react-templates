import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  CLIMATES,
  DEFAULT_CLIMATE,
  DEFAULT_FIXTURES,
  FIXTURES,
  PEOPLE,
  SAMPLE_SIZING,
} from '../data'
import { computeSizing } from '../sizing'

interface ChipProps {
  name: string
  value: string
  label: string
  unit?: string
  type: 'checkbox' | 'radio'
  checked: boolean
  /** The household size chips are fixed-width squares with no unit suffix. */
  square?: boolean
  onSelect: () => void
}

/**
 * One sizing chip: a visually hidden input plus a styled sibling driven by
 * `peer-checked`, which is how the reference keeps a real radio/checkbox in the
 * tab order while the pill carries the look.
 */
function Chip({ name, value, label, unit, type, checked, square = false, onSelect }: ChipProps) {
  return (
    <label className="cursor-pointer">
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onSelect}
        className="peer sr-only"
      />
      <span
        className={cn(
          'chip peer-checked:border-primary-400 peer-checked:bg-primary-400 peer-checked:text-ink-900 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-300',
          square && 'w-12 justify-center px-0 font-bold',
        )}
      >
        {label}
        {unit === undefined ? null : (
          <>
            {' '}
            <span className="chip-unit">{unit}</span>
          </>
        )}
      </span>
    </label>
  )
}

/**
 * The page's product. Four inputs (which fixtures might run together, how cold
 * the incoming water is, how many people, at a fixed 120 °F target) produce two
 * different answers — a tankless flow rate and a tank volume — and then a
 * verdict that says which of the two is honest for this household. Everything
 * is derived during render from form state; nothing is submitted.
 */
export function Sizing() {
  const [fixtures, setFixtures] = useState<string[]>(DEFAULT_FIXTURES)
  const [climate, setClimate] = useState<string | null>(DEFAULT_CLIMATE)
  const [people, setPeople] = useState<string | null>(null)

  const result = computeSizing({ fixtures, climate, people })

  const toggleFixture = (value: string) => {
    setFixtures((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    )
  }

  return (
    <section id="size" className="section on-dark bg-ink-900 text-white" aria-labelledby="size-title">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-primary-400 uppercase">Sizing</p>
          <h2 id="size-title" className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Answer four things and we will size both options
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Tank sizing charts ask how big your house is, which is a proxy for the thing that
            actually matters. This asks the thing that actually matters.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <fieldset>
              <legend className="text-sm font-bold text-white/80">
                <span className="text-primary-400">1.</span> What might run at the same time?
              </legend>
              <p className="mt-1 text-sm text-white/60">
                Not everything you own. The worst realistic minute of your morning.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {FIXTURES.map((fixture) => (
                  <Chip
                    key={fixture.value}
                    name="fixture"
                    value={fixture.value}
                    label={fixture.label}
                    unit={`${fixture.gpm} gpm`}
                    type="checkbox"
                    checked={fixtures.includes(fixture.value)}
                    onSelect={() => toggleFixture(fixture.value)}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="text-sm font-bold text-white/80">
                <span className="text-primary-400">2.</span> How cold does your water come in?
              </legend>
              <p className="mt-1 text-sm text-white/60">
                This is the question the tank charts never ask, and it changes the answer more than
                anything else on this page.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CLIMATES.map((option) => (
                  <Chip
                    key={option.value}
                    name="climate"
                    value={option.value}
                    label={option.label}
                    unit={option.unit}
                    type="radio"
                    checked={climate === option.value}
                    onSelect={() => setClimate(option.value)}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="text-sm font-bold text-white/80">
                <span className="text-primary-400">3.</span> How many people live there?
              </legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {PEOPLE.map((option) => (
                  <Chip
                    key={option.value}
                    name="people"
                    value={option.value}
                    label={option.label}
                    type="radio"
                    square
                    checked={people === option.value}
                    onSelect={() => setPeople(option.value)}
                  />
                ))}
              </div>
            </fieldset>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-xs font-bold tracking-wide text-white/50 uppercase">
                If you go tankless
              </p>
              <p
                data-testid="sizing-gpm"
                aria-live="polite"
                className="mt-1 font-mono text-4xl font-bold tabular-nums text-primary-300"
              >
                {result.gpm}
              </p>
              <p data-testid="sizing-rise" className="mt-2 text-sm text-white/60">
                {result.rise}
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs font-bold tracking-wide text-white/50 uppercase">
                  If you stay with a tank
                </p>
                <p
                  data-testid="sizing-tank"
                  aria-live="polite"
                  className="mt-1 font-mono text-4xl font-bold tabular-nums text-white"
                >
                  {result.tank}
                </p>
                <p data-testid="sizing-note" className="mt-2 text-sm text-white/60">
                  {result.note}
                </p>
              </div>

              <p
                data-testid="sizing-verdict"
                className="mt-7 rounded-lg border border-primary-400/40 bg-primary-400/10 px-4 py-3 text-sm text-primary-100"
              >
                {result.verdict}
              </p>

              <a href="#contact" className="btn btn-primary mt-6 w-full justify-center">
                Get a fixed quote
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/50">{SAMPLE_SIZING}</p>
      </div>
    </section>
  )
}
