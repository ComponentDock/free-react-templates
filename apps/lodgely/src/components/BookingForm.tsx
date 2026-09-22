import type { FormEvent } from 'react'
import { Calendar, Users, Baby } from 'lucide-react'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function BookingForm() {
  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg lg:flex-row lg:items-end lg:gap-6 lg:p-8"
        >
          <div className="flex-1">
            <label htmlFor="checkin" className="mb-1 block text-sm font-bold text-ink">
              <Calendar className="mr-1 inline h-4 w-4 text-primary-400" aria-hidden="true" />
              Check In
            </label>
            <input
              id="checkin"
              type="date"
              className="w-full rounded border-2 border-gray-200 px-4 py-3 text-sm text-body focus:border-primary-400 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="checkout" className="mb-1 block text-sm font-bold text-ink">
              <Calendar className="mr-1 inline h-4 w-4 text-primary-400" aria-hidden="true" />
              Check Out
            </label>
            <input
              id="checkout"
              type="date"
              className="w-full rounded border-2 border-gray-200 px-4 py-3 text-sm text-body focus:border-primary-400 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="adults" className="mb-1 block text-sm font-bold text-ink">
              <Users className="mr-1 inline h-4 w-4 text-primary-400" aria-hidden="true" />
              Adults
            </label>
            <select
              id="adults"
              className="w-full rounded border-2 border-gray-200 px-4 py-3 text-sm text-body focus:border-primary-400 focus:outline-none"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="children" className="mb-1 block text-sm font-bold text-ink">
              <Baby className="mr-1 inline h-4 w-4 text-primary-400" aria-hidden="true" />
              Children
            </label>
            <select
              id="children"
              className="w-full rounded border-2 border-gray-200 px-4 py-3 text-sm text-body focus:border-primary-400 focus:outline-none"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500 lg:w-auto"
          >
            Check Availability
          </button>
        </form>
      </div>
    </section>
  )
}
