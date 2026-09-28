import { useState, type FormEvent } from 'react'

export function BookTable() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [event, setEvent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/crustly-book/600/500"
            alt="Book a table"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form */}
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Reservation
          </h2>
          <h3 className="mb-8 font-display text-4xl font-bold text-ink">Book a Table</h3>

          {submitted ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
              <p className="text-lg font-medium text-green-700">
                Thank you for your reservation! We will confirm shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-[3px] bg-input px-4 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-[3px] bg-input px-4 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="rounded-[3px] bg-input px-4 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                  type="datetime-local"
                  placeholder="Date & Time"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  required
                  className="rounded-[3px] bg-input px-4 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <select
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                required
                className="w-full rounded-[3px] bg-input px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="">Select Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="wedding">Wedding Reception</option>
                <option value="corporate">Corporate Event</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-[3px] bg-brand py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Make Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
