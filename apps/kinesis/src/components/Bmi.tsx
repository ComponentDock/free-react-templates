import { useState } from 'react'
import type { FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'

type Unit = 'Standard' | 'Metric'

const UNITS = ['Standard', 'Metric'] as const

/* BMI calculator: Standard/Metric pill tabs over a dark navy panel with
   height + weight inputs. The BMI is computed client-side on submit. */
export function Bmi() {
  const [unit, setUnit] = useState<Unit>('Standard')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const h = Number(height)
    const w = Number(weight)
    if (h <= 0 || w <= 0 || !Number.isFinite(h) || !Number.isFinite(w)) {
      setResult('Please enter your height and weight to calculate your BMI.')
      return
    }
    const bmi = unit === 'Metric' ? w / (h / 100) ** 2 : (703 * w) / h ** 2
    setResult(`Your BMI is ${bmi.toFixed(1)}.`)
  }

  return (
    <section aria-label="BMI calculator" className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
            Get Your Body Max Index
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-heading lg:text-[34px]">
            What is Your BMI
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div role="tablist" aria-label="BMI units" className="flex justify-center gap-2">
            {UNITS.map((value) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={unit === value}
                onClick={() => setUnit(value)}
                className={cn(
                  'px-8 py-2.5 text-sm font-bold uppercase text-white transition-colors',
                  unit === value ? 'bg-primary' : 'bg-blue hover:bg-primary',
                )}
              >
                {value}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            className="mt-4 bg-navy p-8 shadow-[0_10px_33px_-27px_rgba(0,0,0,0.4)] md:p-12"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="bmi-height"
                    className="mb-2.5 block font-display text-base font-bold uppercase italic text-white"
                  >
                    Your Height{' '}
                    <span className="font-sans normal-case text-white/60">
                      ({unit === 'Standard' ? 'inches' : 'cm'})
                    </span>
                  </label>
                  <input
                    id="bmi-height"
                    type="number"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    placeholder={unit === 'Standard' ? 'e.g. 70' : 'e.g. 175'}
                    className="w-full border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bmi-weight"
                    className="mb-2.5 block font-display text-base font-bold uppercase italic text-white"
                  >
                    Your Weight{' '}
                    <span className="font-sans normal-case text-white/60">
                      ({unit === 'Standard' ? 'lbs' : 'kg'})
                    </span>
                  </label>
                  <input
                    id="bmi-weight"
                    type="number"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder={unit === 'Standard' ? 'e.g. 150' : 'e.g. 70'}
                    className="w-full border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <button type="submit" className="btn-square mt-8">
                Calculate BMI
              </button>
              {result && (
                <p role="status" className="mt-4 font-display text-lg font-semibold text-white">
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
