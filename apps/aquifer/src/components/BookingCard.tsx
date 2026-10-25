import { useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { SYMPTOM_PROMPT, SYMPTOMS } from '../data'
import { phoneError, requiredError } from '../forms'
import { Toast, useToast } from './Toast'

interface Errors {
  name?: string
  phone?: string
  symptom?: string
}

/**
 * The hero's booking card. The reference binds no handler to this form at all —
 * a submit simply navigates — so the recreation owns the behaviour: required
 * and phone checks on submit and on blur, inline messages tied to their input,
 * focus on the first invalid field, then a reset and the house toast. Nothing
 * is sent anywhere.
 */
export function BookingCard() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [symptom, setSymptom] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const { message, notify } = useToast()

  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const symptomRef = useRef<HTMLSelectElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const next: Errors = {
      name: requiredError(name),
      phone: phoneError(phone),
      symptom: requiredError(symptom),
    }
    setErrors(next)

    if (next.name !== undefined) {
      nameRef.current?.focus()
      return
    }
    if (next.phone !== undefined) {
      phoneRef.current?.focus()
      return
    }
    if (next.symptom !== undefined) {
      symptomRef.current?.focus()
      return
    }

    setName('')
    setPhone('')
    setSymptom('')
    notify('Booked — we will confirm the window by text.')
  }

  return (
    <div id="quote" className="scroll-mt-28 rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8">
      <h2 className="text-xl font-bold text-ink-800 lg:text-2xl">Book a leak location</h2>
      <p className="mt-2 text-sm text-ink-500">
        Three fields. We reply within the hour on weekdays.
      </p>

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-semibold text-ink-700">
            Your name
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            ref={nameRef}
            value={name}
            placeholder="First and last name"
            aria-invalid={errors.name !== undefined}
            aria-describedby={errors.name === undefined ? undefined : 'booking-name-error'}
            onChange={(event) => {
              setName(event.target.value)
              setErrors((current) => ({ ...current, name: undefined }))
            }}
            onBlur={() => setErrors((current) => ({ ...current, name: requiredError(name) }))}
            className={cn('field mt-1.5', errors.name !== undefined && 'field-error')}
          />
          {errors.name === undefined ? null : (
            <p id="booking-name-error" className="mt-1.5 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="booking-phone" className="block text-sm font-semibold text-ink-700">
            Phone
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            ref={phoneRef}
            value={phone}
            placeholder="(555) 000-0000"
            aria-invalid={errors.phone !== undefined}
            aria-describedby={errors.phone === undefined ? undefined : 'booking-phone-error'}
            onChange={(event) => {
              setPhone(event.target.value)
              setErrors((current) => ({ ...current, phone: undefined }))
            }}
            onBlur={() => setErrors((current) => ({ ...current, phone: phoneError(phone) }))}
            className={cn('field mt-1.5', errors.phone !== undefined && 'field-error')}
          />
          {errors.phone === undefined ? null : (
            <p id="booking-phone-error" className="mt-1.5 text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="booking-symptom" className="block text-sm font-semibold text-ink-700">
            What have you noticed?
          </label>
          <select
            id="booking-symptom"
            name="symptom"
            ref={symptomRef}
            value={symptom}
            aria-invalid={errors.symptom !== undefined}
            aria-describedby={errors.symptom === undefined ? undefined : 'booking-symptom-error'}
            onChange={(event) => {
              setSymptom(event.target.value)
              setErrors((current) => ({ ...current, symptom: undefined }))
            }}
            onBlur={() => setErrors((current) => ({ ...current, symptom: requiredError(symptom) }))}
            className={cn('field mt-1.5', errors.symptom !== undefined && 'field-error')}
          >
            <option value="">{SYMPTOM_PROMPT}</option>
            {SYMPTOMS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.symptom === undefined ? null : (
            <p id="booking-symptom-error" className="mt-1.5 text-sm text-red-600">
              {errors.symptom}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-primary-700"
        >
          Book the location
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-ink-400">
        No obligation. You keep the report and the photographs either way.
      </p>

      <Toast message={message} />
    </div>
  )
}
