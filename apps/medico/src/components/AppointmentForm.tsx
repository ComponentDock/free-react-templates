import { useState, type FormEvent } from 'react'
import {
  confirmationMessage,
  reservationHeading,
  serviceOptions,
  serviceSelectLabel,
  submitLabel,
  timeOptions,
  timeSelectLabel,
} from '../data'

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="bg-gradient-to-r from-brand-2 to-brand py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 className="mb-12 text-2xl font-medium text-white">{reservationHeading}</h2>
        {submitted ? (
          <p role="status" className="text-white">
            {confirmationMessage}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 text-left sm:grid-cols-2">
            <div>
              <label htmlFor="service" className="sr-only">
                {serviceSelectLabel}
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="h-[50px] w-full border border-white bg-transparent px-4 text-sm text-white [&>option]:text-heading"
              >
                <option value="" disabled>
                  {serviceSelectLabel}
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="time" className="sr-only">
                {timeSelectLabel}
              </label>
              <select
                id="time"
                name="time"
                defaultValue=""
                className="h-[50px] w-full border border-white bg-transparent px-4 text-sm text-white [&>option]:text-heading"
              >
                <option value="" disabled>
                  {timeSelectLabel}
                </option>
                {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="h-[50px] bg-white px-10 text-sm font-medium text-heading transition-colors hover:bg-heading hover:text-white sm:col-span-2"
            >
              {submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
