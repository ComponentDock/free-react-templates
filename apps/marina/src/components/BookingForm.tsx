import { useState, type ChangeEvent, type FormEvent } from 'react'
import { yachtTypes } from '../data'

interface FormState {
  fullName: string
  people: string
  dateFrom: string
  dateTo: string
  yacht: string
  email: string
  phone: string
  notes: string
}

const initialForm: FormState = {
  fullName: '',
  people: '',
  dateFrom: '',
  dateTo: '',
  yacht: yachtTypes[0]!,
  email: '',
  phone: '',
  notes: '',
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" aria-label="Book A Yacht" className="bg-white py-24">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
            Book A Yacht
          </h2>
          <p className="mt-8 rounded bg-light px-6 py-8 font-body text-lg font-light text-body">
            Thank you, {form.fullName || 'guest'}! Your booking request has been received — our crew
            will contact you shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" aria-label="Book A Yacht" className="bg-white py-24">
      <div className="mx-auto max-w-[900px] px-4">
        <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
          Book A Yacht
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-14 grid gap-6 sm:grid-cols-2"
          aria-label="Booking form"
        >
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Full Name
            </span>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={update('fullName')}
              className="mt-2 w-full border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Number of People
            </span>
            <input
              type="text"
              name="people"
              required
              value={form.people}
              onChange={update('people')}
              className="mt-2 w-full border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Date From
            </span>
            <input
              type="date"
              name="dateFrom"
              required
              value={form.dateFrom}
              onChange={update('dateFrom')}
              className="mt-2 w-full border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Date To
            </span>
            <input
              type="date"
              name="dateTo"
              required
              value={form.dateTo}
              onChange={update('dateTo')}
              className="mt-2 w-full border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Yacht You&apos;re Interested in
            </span>
            <select
              name="yacht"
              value={form.yacht}
              onChange={update('yacht')}
              className="mt-2 w-full border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            >
              {yachtTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={update('email')}
              className="mt-2 w-full border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Phone Number
            </span>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={update('phone')}
              className="mt-2 w-full border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
              Notes
            </span>
            <textarea
              name="notes"
              rows={3}
              value={form.notes}
              onChange={update('notes')}
              className="mt-2 w-full resize-none border border-gray-300 px-4 py-3 font-body text-ink focus:border-brand focus:outline-none"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-brand px-10 py-4 font-heading text-sm font-bold uppercase tracking-[0.2rem] text-white transition-colors hover:bg-brand/90"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
