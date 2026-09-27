import { type FormEvent, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [gender, setGender] = useState<'male' | 'female' | ''>('')
  const [additionalOpen, setAdditionalOpen] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const labelClass =
    'mb-1 block text-xs font-bold tracking-wider text-gray-800 uppercase dark:text-gray-300'
  const inputClass =
    'w-full border-0 border-b-2 border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white dark:focus:border-accent'
  const genderBtn = (value: 'male' | 'female') =>
    cn(
      'rounded px-5 py-2 text-sm font-semibold transition-colors',
      gender === value
        ? 'bg-accent text-white'
        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
    )

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-[520px] rounded-lg bg-white px-8 py-10 shadow-lg dark:bg-gray-800">
        {submitted ? (
          <div className="space-y-4 text-center">
            <p className="text-lg font-semibold text-accent">Registration submitted!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your account has been created successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: First Name + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className={labelClass}>
                  First Name
                </label>
                <input id="first-name" name="firstName" type="text" className={inputClass} />
              </div>
              <div>
                <label htmlFor="last-name" className={labelClass}>
                  Last Name
                </label>
                <input id="last-name" name="lastName" type="text" className={inputClass} />
              </div>
            </div>

            {/* Row 2: Birth Date + Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="birth-date" className={labelClass}>
                  Birth Date
                </label>
                <input
                  id="birth-date"
                  name="birthDate"
                  type="date"
                  placeholder="MM-DD-YYYY"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Gender</label>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={genderBtn('male')}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={genderBtn('female')}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input id="phone" name="phone" type="tel" className={inputClass} />
            </div>

            {/* Row 4: Password + Repeat Password */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>
                <input id="password" name="password" type="password" className={inputClass} />
              </div>
              <div>
                <label htmlFor="repeat-password" className={labelClass}>
                  Repeat Your Password
                </label>
                <input
                  id="repeat-password"
                  name="repeatPassword"
                  type="password"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Additional Info (collapsible) */}
            <div>
              <button
                type="button"
                onClick={() => setAdditionalOpen(!additionalOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <ChevronRight
                  className={cn('h-4 w-4 transition-transform', additionalOpen && 'rotate-90')}
                />
                Additional Info
              </button>
              {additionalOpen && (
                <div className="mt-4 space-y-4 border-t border-gray-100 pt-4 dark:border-gray-700">
                  <div>
                    <label htmlFor="address" className={labelClass}>
                      Address
                    </label>
                    <input id="address" name="address" type="text" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="city" className={labelClass}>
                      City
                    </label>
                    <input id="city" name="city" type="text" className={inputClass} />
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="rounded bg-accent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-600 dark:hover:bg-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
