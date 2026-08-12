import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { appointmentDepartments, appointmentDoctors } from '../data'

interface AppointmentModalProps {
  open: boolean
  onClose: () => void
}

export function AppointmentModal({ open, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) setSubmitted(false)
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Make an Appointment"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded bg-white p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-ink">Make an Appointment</h3>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-body transition-colors hover:text-ink"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {submitted ? (
          <p role="status" className="mt-8 text-base text-body">
            Thank you! Your appointment request has been received. We will contact you shortly to
            confirm the details.
          </p>
        ) : (
          <form
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <label className="block">
              <span className="mb-1 block text-[13px] text-body">Select Department</span>
              <select
                required
                defaultValue=""
                className="h-12 w-full border border-form px-3 text-[13px] text-body"
              >
                <option value="" disabled>
                  Pick department
                </option>
                {appointmentDepartments.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-[13px] text-body">Select Doctor</span>
              <select
                required
                defaultValue=""
                className="h-12 w-full border border-form px-3 text-[13px] text-body"
              >
                <option value="" disabled>
                  Pick doctor
                </option>
                {appointmentDoctors.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-[13px] text-body">Pick date</span>
              <input
                type="date"
                required
                className="h-12 w-full border border-form px-3 text-[13px] text-body"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-[13px] text-body">Suitable time</span>
              <input
                type="time"
                required
                className="h-12 w-full border border-form px-3 text-[13px] text-body"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-[13px] text-body">Name</span>
              <input
                type="text"
                required
                placeholder="Your name"
                className="h-12 w-full border border-form px-3 text-[13px] text-body placeholder:text-muted"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-[13px] text-body">Phone no.</span>
              <input
                type="text"
                required
                placeholder="Your phone"
                className="h-12 w-full border border-form px-3 text-[13px] text-body placeholder:text-muted"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-[13px] text-body">Email</span>
              <input
                type="email"
                required
                placeholder="Your email"
                className="h-12 w-full border border-form px-3 text-[13px] text-body placeholder:text-muted"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded bg-gradient-to-r from-brand-deep to-sky px-8 py-3 text-[15px] text-white transition-opacity hover:opacity-90 sm:col-span-2"
            >
              Confirm
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
