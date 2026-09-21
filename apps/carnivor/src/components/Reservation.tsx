import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Reservation() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [people, setPeople] = useState('2')
  const [date, setDate] = useState('')
  const [event, setEvent] = useState('dinner')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Name is required.'
    if (!email.trim() || !EMAIL_PATTERN.test(email)) e.email = 'A valid email is required.'
    if (!phone.trim()) e.phone = 'Phone number is required.'
    if (!date.trim()) e.date = 'Date is required.'
    return e
  }

  const handleSubmit = (submitEvent: FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="book-table" className="bg-cream py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl text-ink">Reservation Confirmed!</h2>
          <p className="mt-4 text-mist">
            Thank you, {name}. Your table for {people} on {date} has been reserved. We look forward
            to welcoming you.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="book-table" className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl text-ink md:text-4xl">Reservation Form</h2>
        <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="res-name" className="block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="res-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 w-full border-b-2 border-gray-300 bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
            />
            {errors.name && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="res-email" className="block text-sm font-medium text-ink">
              Email Address
            </label>
            <input
              id="res-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mt-1 w-full border-b-2 border-gray-300 bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
            />
            {errors.email && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="res-phone" className="block text-sm font-medium text-ink">
              Phone Number
            </label>
            <input
              id="res-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 234 567 890"
              className="mt-1 w-full border-b-2 border-gray-300 bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
            />
            {errors.phone && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="res-people" className="block text-sm font-medium text-ink">
              Number of People
            </label>
            <select
              id="res-people"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="mt-1 w-full border-b-2 border-gray-300 bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'person' : 'people'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="res-date" className="block text-sm font-medium text-ink">
              Select Date &amp; Time
            </label>
            <input
              id="res-date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full border-b-2 border-gray-300 bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
            />
            {errors.date && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.date}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="res-event" className="block text-sm font-medium text-ink">
              Select Event
            </label>
            <select
              id="res-event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              className="mt-1 w-full border-b-2 border-gray-300 bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
            >
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="private">Private Event</option>
              <option value="celebration">Celebration</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full border-2 border-brand bg-transparent py-3 text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-brand hover:text-white"
            >
              Make Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
