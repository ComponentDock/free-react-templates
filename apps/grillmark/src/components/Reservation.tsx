import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

interface ReservationForm {
  name: string
  email: string
  phone: string
  people: string
  date: string
  time: string
  event: string
}

const initialForm: ReservationForm = {
  name: '',
  email: '',
  phone: '',
  people: '1',
  date: '',
  time: '',
  event: 'birthday',
}

export function Reservation() {
  const [form, setForm] = useState<ReservationForm>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationForm, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof ReservationForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationForm, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!EMAIL_PATTERN.test(form.email.trim())) newErrors.email = 'Valid email is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.date) newErrors.date = 'Date is required'
    if (!form.time) newErrors.time = 'Time is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section id="reservation" className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/grillmark-reservation-bg/1600/600"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="rounded bg-white px-8 py-12 shadow-xl dark:bg-gray-900">
            <h2 className="font-display text-2xl text-heading dark:text-white">
              Reservation Confirmed!
            </h2>
            <p className="mt-4 text-body dark:text-gray-400">
              Thank you, {form.name}. Your table for {form.people} on {form.date} at {form.time} has
              been reserved.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setForm(initialForm)
              }}
              className="mt-6 rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand/90"
            >
              Make Another Reservation
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservation" className="relative py-24">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/grillmark-reservation-bg/1600/600"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded bg-white px-8 py-16 shadow-xl sm:px-12 dark:bg-gray-900">
          <div className="mb-10 text-center">
            <span className="font-display text-sm tracking-wider text-brand">Reservation</span>
            <h2 className="mt-3 font-display text-3xl text-heading dark:text-white">
              Book Your Table
            </h2>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="res-name"
                  className="block text-sm font-medium text-heading dark:text-white"
                >
                  Name
                </label>
                <input
                  id="res-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-heading outline-none focus:border-brand dark:border-gray-600 dark:text-white"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="res-email"
                  className="block text-sm font-medium text-heading dark:text-white"
                >
                  Email
                </label>
                <input
                  id="res-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-heading outline-none focus:border-brand dark:border-gray-600 dark:text-white"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p role="alert" className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="res-phone"
                  className="block text-sm font-medium text-heading dark:text-white"
                >
                  Phone
                </label>
                <input
                  id="res-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-heading outline-none focus:border-brand dark:border-gray-600 dark:text-white"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <p role="alert" className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="res-people"
                  className="block text-sm font-medium text-heading dark:text-white"
                >
                  Number of People
                </label>
                <select
                  id="res-people"
                  value={form.people}
                  onChange={(e) => update('people', e.target.value)}
                  className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-heading outline-none focus:border-brand dark:border-gray-600 dark:text-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={String(n)}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="res-date"
                  className="block text-sm font-medium text-heading dark:text-white"
                >
                  Date
                </label>
                <input
                  id="res-date"
                  type="date"
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-heading outline-none focus:border-brand dark:border-gray-600 dark:text-white"
                  aria-invalid={Boolean(errors.date)}
                />
                {errors.date && (
                  <p role="alert" className="mt-1 text-xs text-red-500">
                    {errors.date}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="res-time"
                  className="block text-sm font-medium text-heading dark:text-white"
                >
                  Time
                </label>
                <input
                  id="res-time"
                  type="time"
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-heading outline-none focus:border-brand dark:border-gray-600 dark:text-white"
                  aria-invalid={Boolean(errors.time)}
                />
                {errors.time && (
                  <p role="alert" className="mt-1 text-xs text-red-500">
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="res-event"
                className="block text-sm font-medium text-heading dark:text-white"
              >
                Event
              </label>
              <select
                id="res-event"
                value={form.event}
                onChange={(e) => update('event', e.target.value)}
                className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-heading outline-none focus:border-brand dark:border-gray-600 dark:text-white"
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Meeting</option>
                <option value="casual">Casual Dining</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-full bg-brand px-10 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand/90"
              >
                Make Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
