import { useState, type FormEvent } from 'react'
import { CALCULATE_IMAGE, GENDER_OPTIONS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Calculate — BMI calculator section on a dark background image: white Teko
 * heading, a Male/Female/Other gender radio group, and a gradient pill CTA.
 */
export function Calculate() {
  const [gender, setGender] = useState<string>('Male')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      id="calculate"
      className="relative bg-cover bg-center py-24 lg:py-35"
      style={{ backgroundImage: `url('${CALCULATE_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-night/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          light
          kicker="BMI checker"
          title="Calculate your bmi"
          copy="Know your starting point — track your body mass index as you progress."
        />
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-8"
        >
          <fieldset className="flex items-center gap-10">
            <legend className="sr-only">Gender</legend>
            {GENDER_OPTIONS.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-2 text-white">
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={gender === option}
                  onChange={() => setGender(option)}
                  className="h-4 w-4 accent-brand"
                />
                {option}
              </label>
            ))}
          </fieldset>
          <button
            type="submit"
            className="rounded-full border-2 border-brand bg-gradient-to-r from-brand to-brand-2 px-10 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-right"
            style={{ backgroundSize: '200% auto' }}
          >
            Calculate Now
          </button>
        </form>
      </div>
    </section>
  )
}
