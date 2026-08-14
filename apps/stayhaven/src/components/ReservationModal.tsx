import type { FormEvent } from 'react'
import { X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { GUEST_OPTIONS } from '../data'

/* Reservation modal (source: modal#reservation-form — large dialog opened by
   the CTA "Reserve Now" button with Name, Phone, Email, Check In, Check Out,
   Adults and Children fields plus a submit button; closes via the close
   control or the backdrop). */
export function ReservationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) {
    return null
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Reservation"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-ink">Reservation</h2>
          <button
            type="button"
            aria-label="Close reservation modal"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-smoke transition-colors hover:bg-mist hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="res-name" className="mb-1.5 block text-sm font-bold text-ink">
              Name
            </label>
            <input
              id="res-name"
              type="text"
              className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="res-phone" className="mb-1.5 block text-sm font-bold text-ink">
              Phone
            </label>
            <input
              id="res-phone"
              type="tel"
              className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="res-email" className="mb-1.5 block text-sm font-bold text-ink">
              Email
            </label>
            <input
              id="res-email"
              type="email"
              className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="res-check-in" className="mb-1.5 block text-sm font-bold text-ink">
              Date Check In
            </label>
            <input
              id="res-check-in"
              type="date"
              className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="res-check-out" className="mb-1.5 block text-sm font-bold text-ink">
              Date Check Out
            </label>
            <input
              id="res-check-out"
              type="date"
              className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="res-adults" className="mb-1.5 block text-sm font-bold text-ink">
              Adults
            </label>
            <select
              id="res-adults"
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
            >
              {GUEST_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="res-children" className="mb-1.5 block text-sm font-bold text-ink">
              Children
            </label>
            <select
              id="res-children"
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
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
            className="h-auto rounded-full bg-brand px-8 py-3 font-medium hover:bg-brand-dark sm:col-span-2"
          >
            Reserve Now
          </Button>
        </form>
      </div>
    </div>
  )
}
