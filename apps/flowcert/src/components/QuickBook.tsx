import { useState, type FormEvent } from 'react'
import { bookingReasons } from '../data'

/**
 * Three fields, one button, one fine-print line — the reference's hero card is
 * deliberately the shortest form on the page. Nothing is posted: the card
 * validates, then confirms in place, so a demo can never navigate away.
 */
export function QuickBook() {
  const [confirmation, setConfirmation] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      return
    }

    setConfirmation('Request received — this demo card does not send anything.')
  }

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8">
      <h2 className="text-xl font-bold text-ink-800 lg:text-2xl">Book a test</h2>
      <p className="mt-1.5 text-sm text-ink-500">
        Three fields. Most tests are booked within three working days.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate={false}>
        <div>
          <label htmlFor="quick-name" className="block text-sm font-semibold text-ink-700">
            Your name
          </label>
          <input
            id="quick-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 block w-full rounded-lg border border-ink-200 px-4 py-3 text-base text-ink-800 placeholder-ink-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="quick-phone" className="block text-sm font-semibold text-ink-700">
            Phone
          </label>
          <input
            id="quick-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 block w-full rounded-lg border border-ink-200 px-4 py-3 text-base text-ink-800 placeholder-ink-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="quick-reason" className="block text-sm font-semibold text-ink-700">
            What is it for?
          </label>
          <select
            id="quick-reason"
            name="reason"
            required
            defaultValue=""
            className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base text-ink-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
          >
            <option value="" disabled>
              Choose the closest match
            </option>
            {bookingReasons.map((reason) => (
              <option key={reason.value} value={reason.value}>
                {reason.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-primary-700"
        >
          Book the test
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-ink-400">
        Fixed price. If the device fails you pay the test fee and nothing else until you approve a
        repair.
      </p>

      {confirmation ? (
        <p role="status" className="mt-4 rounded-lg bg-primary-50 px-4 py-3 text-sm text-primary-700">
          {confirmation}
        </p>
      ) : null}
    </div>
  )
}
