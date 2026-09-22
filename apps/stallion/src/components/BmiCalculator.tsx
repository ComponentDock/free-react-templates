import { useState, type FormEvent } from 'react'
import { Calculator } from 'lucide-react'

export function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const h = parseFloat(height)
    const w = parseFloat(weight)
    if (h > 0 && w > 0) {
      const bmi = (w / (h * h)) * 703
      setResult(bmi.toFixed(1))
    } else {
      setResult(null)
    }
  }

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/stallion-bmi/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Calculate Your Body Mass Index
            </h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              Use our BMI calculator to check if your weight is in a healthy range. Enter your
              height and weight to get an instant assessment.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-6">
              <label htmlFor="height" className="mb-2 block text-sm text-gray-300">
                Your Height (inches)
              </label>
              <input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 70"
                className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-brand focus:outline-none"
                min="1"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="weight" className="mb-2 block text-sm text-gray-300">
                Your Weight (lbs)
              </label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 170"
                className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-brand focus:outline-none"
                min="1"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Calculator className="h-4 w-4" aria-hidden="true" />
              Calculate Your BMI
            </button>
            {result !== null && (
              <div
                className="mt-6 rounded bg-white/10 p-4 text-center text-lg font-semibold text-white"
                aria-live="polite"
              >
                Your BMI: {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
