import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { FORM } from '../data'

interface FormValues {
  name: string
  email: string
  service: string
  message: string
}

const INITIAL_VALUES: FormValues = { name: '', email: '', service: '', message: '' }

function validate(values: FormValues): Partial<Record<keyof FormValues, string>> {
  const errors: Partial<Record<keyof FormValues, string>> = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.service) errors.service = 'Please choose a service.'
  if (!values.message.trim()) errors.message = 'Please tell us about your project.'
  return errors
}

/* QuoteForm — white column with the "Get Free Quote" heading and a
   client-side validated form: name, email, service select, message, and a
   full-width green submit. On success it shows a confirmation and resets. */
export function QuoteForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }
    setSubmitted(true)
    setValues(INITIAL_VALUES)
  }

  const inputClass =
    'h-[55px] w-full rounded-[25px] border border-sage bg-paper px-6 text-sage outline-none transition-colors focus:border-garden'

  return (
    <section aria-label="Quote" id="quote" className="flex h-[600px] items-center bg-paper px-10">
      <div className="mx-auto w-full max-w-md">
        <span className="text-sm font-medium uppercase tracking-wide text-coral">{FORM.label}</span>
        <h2 className="mt-2 font-display text-[38px] font-semibold leading-snug text-forest">
          Get Free Quote
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-sage">{FORM.legendary}</p>

        {submitted && (
          <p
            role="status"
            className="mt-6 rounded-full bg-mint px-5 py-3 text-center font-medium text-forest"
          >
            Thanks! Your request has been sent.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              {FORM.fields.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={FORM.fields.name}
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              className={inputClass}
            />
            {errors.name && <p className="mt-1 text-sm text-coral">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              {FORM.fields.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={FORM.fields.email}
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              className={inputClass}
            />
            {errors.email && <p className="mt-1 text-sm text-coral">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="service" className="sr-only">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
              className={inputClass}
            >
              <option value="">Select a service</option>
              {FORM.serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-sm text-coral">{errors.service}</p>}
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              {FORM.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={FORM.fields.message}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              className={`${inputClass} h-[131px] resize-none py-4`}
            />
            {errors.message && <p className="mt-1 text-sm text-coral">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-none bg-garden py-4 text-lg font-medium text-paper transition-colors hover:bg-pink"
          >
            {FORM.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
