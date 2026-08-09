import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const services = [
  'Professional Makeup',
  'Manicure Pedicure',
  'Body Treatment',
  'Haircut Coloring',
] as const

export function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Booking</span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Make an Appointment
        </h2>

        {submitted ? (
          <p
            role="status"
            className="mt-8 rounded-2xl border border-brand/40 bg-brand/10 px-6 py-4 text-mist dark:text-white/70"
          >
            Thank you — your appointment request has been received.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-plum/10 bg-paper p-6 text-left sm:grid-cols-2 dark:border-white/10 dark:bg-gray-900"
          >
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="mt-1 w-full rounded-lg border border-plum/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-white/20 dark:bg-gray-950"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="mt-1 w-full rounded-lg border border-plum/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-white/20 dark:bg-gray-950"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Service</span>
              <select
                name="service"
                defaultValue={services[0]}
                className="mt-1 w-full rounded-lg border border-plum/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-white/20 dark:bg-gray-950"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium">Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="mt-1 w-full rounded-lg border border-plum/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-white/20 dark:bg-gray-950"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Date</span>
              <input
                type="text"
                name="date"
                placeholder="Date"
                className="mt-1 w-full rounded-lg border border-plum/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-white/20 dark:bg-gray-950"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Time</span>
              <input
                type="text"
                name="time"
                placeholder="Time"
                className="mt-1 w-full rounded-lg border border-plum/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-white/20 dark:bg-gray-950"
              />
            </label>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                className="w-full rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
              >
                Make an Appointment
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
