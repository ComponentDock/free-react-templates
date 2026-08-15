import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

function categoryFor(bmi: number): string {
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal'
  if (bmi < 30) return 'Overweight'
  return 'Obese'
}

export function BmiCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const handleCalculate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const weightKg = Number.parseFloat(weight)
    const heightM = Number.parseFloat(height)
    if (!Number.isFinite(weightKg) || !Number.isFinite(heightM) || weightKg <= 0 || heightM <= 0) {
      setError('Please enter a valid weight and height.')
      setResult('')
      return
    }
    setError('')
    const bmi = weightKg / (heightM * heightM)
    setResult(`${bmi.toFixed(2)} — ${categoryFor(bmi)}`)
  }

  return (
    <section className="bg-[#f6f9fa] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold text-[#353535] md:text-5xl">
            Calculate your <span className="bg-brand px-1">BMI</span>
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Know your numbers. Enter your weight and height to see where you stand, then let our
            coaches build the plan that gets you where you want to be.
          </p>
        </div>

        <div className="bg-[#242424] p-10 md:p-14">
          <form onSubmit={handleCalculate} noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="bmiWeight" className="mb-2 block text-sm font-bold text-white">
                  Weight (kg)
                </label>
                <input
                  id="bmiWeight"
                  type="number"
                  inputMode="decimal"
                  placeholder="Weight"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  className="h-12 w-full bg-white px-4 text-[#505050] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="bmiHeight" className="mb-2 block text-sm font-bold text-white">
                  Height (m)
                </label>
                <input
                  id="bmiHeight"
                  type="number"
                  inputMode="decimal"
                  placeholder="Height"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                  className="h-12 w-full bg-white px-4 text-[#505050] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button
                type="submit"
                className="h-12 rounded-none bg-brand px-10 text-lg font-bold text-[#353535] hover:bg-primary-400"
              >
                Calculate
              </Button>
              <label htmlFor="bmiResult" className="sr-only">
                Your BMI
              </label>
              <input
                id="bmiResult"
                readOnly
                value={result}
                placeholder="Your result"
                className="h-12 w-full bg-white px-4 text-[#505050] focus:outline-none sm:max-w-xs"
              />
            </div>

            {error && (
              <p role="alert" className="mt-4 font-bold text-brand">
                {error}
              </p>
            )}
          </form>
          <p className="mt-6 text-sm italic text-white/70">
            Body-mass index is a general screening measure — our coaches factor in muscle mass, age,
            and goals for a fuller picture.
          </p>
        </div>
      </div>
    </section>
  )
}
