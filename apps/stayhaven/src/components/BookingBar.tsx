import type { FormEvent } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { GUEST_OPTIONS } from '../data'

/* Booking bar (source: white card floating over the hero bottom edge — Check
   In / Check Out date fields with calendar icons, Adults / Children selects
   and a red block "Check Availability" button). */
export function BookingBar() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section id="booking" className="relative z-20 -mt-24 px-4">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 lg:items-end">
          <div>
            <label htmlFor="check-in" className="mb-2 block text-sm font-bold text-ink">
              Check In
            </label>
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              <Calendar className="h-5 w-5 text-smoke" aria-hidden="true" />
              <input
                id="check-in"
                type="date"
                className="w-full bg-transparent text-sm text-ink outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="check-out" className="mb-2 block text-sm font-bold text-ink">
              Check Out
            </label>
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              <Calendar className="h-5 w-5 text-smoke" aria-hidden="true" />
              <input
                id="check-out"
                type="date"
                className="w-full bg-transparent text-sm text-ink outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="adults" className="mb-2 block text-sm font-bold text-ink">
              Adults
            </label>
            <select
              id="adults"
              className="w-full border-b border-gray-200 bg-transparent pb-2 text-sm text-ink outline-none"
            >
              {GUEST_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="children" className="mb-2 block text-sm font-bold text-ink">
              Children
            </label>
            <select
              id="children"
              className="w-full border-b border-gray-200 bg-transparent pb-2 text-sm text-ink outline-none"
            >
              {GUEST_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            className="h-auto w-full rounded-full bg-brand px-8 py-3 font-medium hover:bg-brand-dark"
          >
            Check Availability
          </Button>
        </div>
      </form>
    </section>
  )
}
