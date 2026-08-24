import { type FormEvent, useState } from 'react'
import { Button } from '@free-react-templates/ui'

export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-warm-900">Thank you!</h2>
          <p className="text-base text-warm-900/60">
            Your table reservation request has been received. We will confirm shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-warm-900 md:text-4xl">
            Book a table
          </h2>
          <p className="mx-auto max-w-xl text-base text-warm-900/60">
            Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <input
            type="number"
            placeholder="Number of guests"
            min={1}
            max={20}
            required
            className="rounded-full border border-brand-100 bg-warm-50 px-6 py-3 text-sm text-warm-900 placeholder:text-warm-900/40 focus:border-brand-400 focus:outline-none"
          />
          <input
            type="date"
            required
            className="rounded-full border border-brand-100 bg-warm-50 px-6 py-3 text-sm text-warm-900 focus:border-brand-400 focus:outline-none"
          />
          <input
            type="time"
            required
            className="rounded-full border border-brand-100 bg-warm-50 px-6 py-3 text-sm text-warm-900 focus:border-brand-400 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone no."
            required
            className="rounded-full border border-brand-100 bg-warm-50 px-6 py-3 text-sm text-warm-900 placeholder:text-warm-900/40 focus:border-brand-400 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="col-span-full rounded-2xl border border-brand-100 bg-warm-50 px-6 py-3 text-sm text-warm-900 placeholder:text-warm-900/40 focus:border-brand-400 focus:outline-none"
          />
          <div className="col-span-full text-center">
            <Button
              type="submit"
              className="rounded-full bg-brand-400 px-10 py-3 font-display text-base font-medium text-white hover:bg-brand-500"
            >
              Sent Request
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
