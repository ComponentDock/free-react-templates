import { useState, type FormEvent } from 'react'
import { ImageCarousel } from './ImageCarousel'

const TICKET_TYPES = ['VIP', 'Regular', 'Student'] as const
type TicketType = (typeof TICKET_TYPES)[number]

const TICKET_PRICES: Record<TicketType, number> = {
  VIP: 20,
  Regular: 10,
  Student: 15,
}

interface BookingCardProps {
  onSubmit?: () => void
}

export function BookingCard({ onSubmit }: BookingCardProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [persons, setPersons] = useState(1)
  const [date, setDate] = useState('')
  const [ticketType, setTicketType] = useState<TicketType>('VIP')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const price = TICKET_PRICES[ticketType]
  const total = price * persons

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!agreeTerms) return
    if (fullName && email && date) {
      setSubmitted(true)
      onSubmit?.()
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-[900px] rounded-lg bg-card-bg p-10 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-heading">Thank You!</h2>
        <p className="text-sm text-label">
          Your booking has been confirmed. We will send details to {email}.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[900px] overflow-hidden rounded-lg bg-card-bg shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Left: form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex-1 p-8"
          aria-label="Booking ticket form"
        >
          <div className="mb-2 h-0.5 w-8 bg-heading" />
          <h2 className="mb-3 font-heading text-2xl font-bold text-heading">Booking Tickets</h2>
          <p className="mb-6 text-sm leading-relaxed text-label">
            Orci ac auctor augue mauris augue neque gravida in hendrerit gravida rutrum.
          </p>

          {/* Row 1: Name + Email */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="full-name"
                className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
              >
                Full Name:
              </label>
              <input
                id="full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-border bg-white px-3 py-2 text-sm text-heading outline-none focus:border-brand"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
              >
                Your Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-border bg-white px-3 py-2 text-sm text-heading outline-none focus:border-brand"
                required
              />
            </div>
          </div>

          {/* Row 2: Person + Date + Ticket Type */}
          <div className="mb-6 grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="persons"
                className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
              >
                Person:
              </label>
              <input
                id="persons"
                type="number"
                min={1}
                max={10}
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value) || 1)}
                className="w-full border border-border bg-white px-3 py-2 text-sm text-heading outline-none focus:border-brand"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
              >
                Date:
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-border bg-white px-3 py-2 text-sm text-heading outline-none focus:border-brand"
                required
              />
            </div>
            <div>
              <label
                htmlFor="ticket-type"
                className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
              >
                Ticket Type:
              </label>
              <select
                id="ticket-type"
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value as TicketType)}
                className="w-full border border-border bg-white px-3 py-2 text-sm text-heading outline-none focus:border-brand"
              >
                {TICKET_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-price">${total.toFixed(2)}</span>
            <span className="ml-1 text-sm text-label">/ {ticketType} Person</span>
          </div>

          {/* Terms */}
          <div className="mb-6 flex items-start gap-2">
            <input
              id="terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5"
            />
            <label htmlFor="terms" className="text-xs text-label">
              By booking, you agree to the{' '}
              <a
                href="#terms"
                className="font-medium text-terms-link underline hover:text-terms-link/80"
              >
                Terms of Service
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="rounded-md bg-button px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-button-hover focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2"
          >
            Buy Now
          </button>
        </form>

        {/* Right: image carousel */}
        <div className="w-full md:w-[340px]">
          <ImageCarousel />
        </div>
      </div>
    </div>
  )
}
