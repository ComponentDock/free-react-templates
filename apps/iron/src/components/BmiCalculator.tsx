import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

/** Pure function: compute BMI from height (in) and weight (lbs). Returns null for invalid inputs. */
export function computeBmi(heightIn: number, weightLbs: number): string | null {
  if (heightIn <= 0) return null
  if (weightLbs <= 0) return null
  return ((weightLbs / (heightIn * heightIn)) * 703).toFixed(1)
}

export function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmiResult, setBmiResult] = useState<string | null>(null)

  const handleCalculate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const h = parseFloat(height)
    const w = parseFloat(weight)
    setBmiResult(computeBmi(h, w))
  }

  return (
    <section aria-label="BMI Calculator" className="bg-ink py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white">
          Calculate Your Body Mass Index
        </h2>
        <form
          onSubmit={handleCalculate}
          className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <div className="w-full max-w-xs">
            <label htmlFor="bmi-height" className="block text-left text-sm text-gray-300">
              Height (inches)
            </label>
            <input
              id="bmi-height"
              type="number"
              required
              min={1}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 65"
              className="mt-2 w-full rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
          </div>
          <div className="w-full max-w-xs">
            <label htmlFor="bmi-weight" className="block text-left text-sm text-gray-300">
              Weight (lbs)
            </label>
            <input
              id="bmi-weight"
              type="number"
              required
              min={1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 150"
              className="mt-2 w-full rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
          </div>
          <Button
            type="submit"
            className="mt-4 rounded bg-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-500 sm:mt-7"
          >
            Calculate Your BMI
          </Button>
        </form>
        {bmiResult !== null && (
          <p className="mt-8 text-xl font-semibold text-white">
            Your BMI is <span className="text-primary-400">{bmiResult}</span>
          </p>
        )}
      </div>
    </section>
  )
}
