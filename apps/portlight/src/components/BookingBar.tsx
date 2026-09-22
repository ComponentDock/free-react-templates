import { cn } from '@free-react-templates/ui'
import { ChevronDown } from 'lucide-react'

const ROOM_TYPES = ['Suite', 'Deluxe', 'Superior', 'King Room'] as const
const GUEST_OPTIONS = ['1 Adult', '2 Adults', 'Family'] as const

interface BookingBarProps {
  className?: string
}

export function BookingBar({ className }: BookingBarProps) {
  return (
    <section className={cn('bg-white py-6 shadow-md', className)} aria-label="Room booking">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-5">
          {/* Check-in */}
          <div className="flex flex-col">
            <label
              htmlFor="checkin"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand"
            >
              Check-in Date
            </label>
            <input
              id="checkin"
              type="text"
              placeholder="Check-in date"
              className="border-b-2 border-gray-200 bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brand"
              readOnly
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label
              htmlFor="checkout"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand"
            >
              Check-out Date
            </label>
            <input
              id="checkout"
              type="text"
              placeholder="Check-out date"
              className="border-b-2 border-gray-200 bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brand"
              readOnly
            />
          </div>

          {/* Room */}
          <div className="flex flex-col">
            <label
              htmlFor="room"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand"
            >
              Room
            </label>
            <div className="relative">
              <select
                id="room"
                className="w-full appearance-none border-b-2 border-gray-200 bg-transparent py-2 pr-8 text-sm text-ink outline-none transition-colors focus:border-brand"
              >
                {ROOM_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label
              htmlFor="guests"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand"
            >
              Guests
            </label>
            <div className="relative">
              <select
                id="guests"
                className="w-full appearance-none border-b-2 border-gray-200 bg-transparent py-2 pr-8 text-sm text-ink outline-none transition-colors focus:border-brand"
              >
                {GUEST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col items-start">
            <button className="w-full rounded bg-brand px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark md:w-auto">
              Check Availability
            </button>
            <span className="mt-1 text-xs text-mist">Best Price Guaranteed!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
