import { useState } from 'react'
import type { FormEvent } from 'react'

export function BmiCalculator() {
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('')
  const [bmi, setBmi] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const w = parseFloat(weight)
    const h = parseFloat(height) / 100
    if (w > 0 && h > 0) {
      setBmi((w / (h * h)).toFixed(1))
    }
  }

  return (
    <section className="bg-surface py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="flex-1">
          <h2 className="font-display text-3xl font-bold uppercase text-heading">
            Calculate Your BMI
          </h2>
          <p className="mt-4 text-body-text">
            Use our BMI calculator to find out if your weight is in a healthy range.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-wrap gap-6">
            <div className="w-[140px]">
              <label htmlFor="bmi-age" className="mb-1 block text-sm font-semibold text-heading">
                Age
              </label>
              <input
                id="bmi-age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <div className="w-[140px]">
              <label htmlFor="bmi-weight" className="mb-1 block text-sm font-semibold text-heading">
                Weight (kg)
              </label>
              <input
                id="bmi-weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <div className="w-[140px]">
              <label htmlFor="bmi-height" className="mb-1 block text-sm font-semibold text-heading">
                Height (cm)
              </label>
              <input
                id="bmi-height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <div className="w-[140px]">
              <label htmlFor="bmi-gender" className="mb-1 block text-sm font-semibold text-heading">
                Gender
              </label>
              <select
                id="bmi-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="w-[140px]">
              <label htmlFor="bmi-result" className="mb-1 block text-sm font-semibold text-heading">
                Your BMI is
              </label>
              <input
                id="bmi-result"
                type="text"
                readOnly
                value={bmi}
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-heading"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="rounded bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
              >
                What Is BMI
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/bodyforge-bmi/600/500"
            alt="BMI illustration"
            className="w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  )
}
