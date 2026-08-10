import { useState, type FormEvent } from 'react'

export function Appointment() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section
        id="contact"
        className="bg-gradient-to-br from-brand to-brand-orange py-20 text-white"
      >
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-display text-4xl font-black uppercase">Book a Appointment</h2>
          <p className="mt-6 text-lg">
            Thanks, {firstName}! We&apos;ll confirm your appointment shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-brand to-brand-orange py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-white/80">
            Schedule Now
          </p>
          <h2 className="font-display text-4xl font-black uppercase">Book a Appointment</h2>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold uppercase tracking-wide text-white/90">
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
              placeholder="First Name"
              className="mt-2 w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </label>
          <label className="block text-sm font-semibold uppercase tracking-wide text-white/90">
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
              placeholder="Last Name"
              className="mt-2 w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </label>
          <label className="block text-sm font-semibold uppercase tracking-wide text-white/90">
            Date
            <input
              type="text"
              placeholder="Date"
              className="mt-2 w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </label>
          <label className="block text-sm font-semibold uppercase tracking-wide text-white/90">
            Time
            <input
              type="text"
              placeholder="Time"
              className="mt-2 w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </label>
          <label className="block text-sm font-semibold uppercase tracking-wide text-white/90">
            Phone
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              placeholder="Phone"
              className="mt-2 w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </label>
          <label className="block text-sm font-semibold uppercase tracking-wide text-white/90 sm:col-span-2">
            Message
            <textarea
              rows={3}
              placeholder="Message"
              className="mt-2 w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-gray-100 sm:col-span-2"
          >
            Appointment
          </button>
        </form>
      </div>
    </section>
  )
}
