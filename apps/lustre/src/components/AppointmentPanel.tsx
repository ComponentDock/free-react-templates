import { useEffect, useState, type FormEvent } from 'react'
import { X } from 'lucide-react'

const services = ['Select Service', 'Service 1', 'Service 2', 'Service 3', 'Service 4'] as const

interface AppointmentPanelProps {
  open: boolean
  onClose: () => void
}

export function AppointmentPanel({ open, onClose }: AppointmentPanelProps) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      setSubmitted(false)
    }
  }, [open])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Book an appointment"
        className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-8 shadow-2xl dark:bg-gray-900"
      >
        <div className="flex items-start justify-between">
          <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
            Book an Appointment
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close appointment panel"
            className="flex h-9 w-9 items-center justify-center rounded text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {submitted ? (
          <p className="mt-8 text-smoke" role="status">
            Thank you! Your appointment request has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-smoke">
                Full Name
              </span>
              <input
                type="text"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm text-ink focus:border-gold-500 focus:outline-none dark:border-gray-700 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-smoke">
                Email Address
              </span>
              <input
                type="email"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm text-ink focus:border-gold-500 focus:outline-none dark:border-gray-700 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-smoke">
                Phone Number
              </span>
              <input
                type="tel"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm text-ink focus:border-gold-500 focus:outline-none dark:border-gray-700 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-smoke">
                Desired Date
              </span>
              <input
                type="date"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm text-ink focus:border-gold-500 focus:outline-none dark:border-gray-700 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-smoke">
                Select Service
              </span>
              <select
                required
                defaultValue=""
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm text-ink focus:border-gold-500 focus:outline-none dark:border-gray-700 dark:text-white"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="w-full bg-gold-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink-soft transition-colors hover:bg-gold-400"
            >
              Send Request
            </button>
          </form>
        )}
      </aside>
    </div>
  )
}
