import { cn } from '@free-react-templates/ui'

interface BookingBarProps {
  className?: string
}

export function BookingBar({ className }: BookingBarProps) {
  return (
    <section id="reservation-form" className={cn('bg-light-bg py-10', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-center font-heading text-2xl font-semibold text-heading-text">
          Check Availability
        </h2>
        <div className="flex flex-wrap items-end gap-4 rounded-full bg-white px-8 py-4 shadow-md md:flex-nowrap">
          <div className="flex-1">
            <label
              htmlFor="checkin"
              className="mb-1 block text-xs font-medium uppercase tracking-wider text-body-text"
            >
              Check In
            </label>
            <input
              id="checkin"
              type="date"
              className="w-full border-b border-gray-200 bg-transparent px-2 py-2 text-sm text-body-text focus:border-brand focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="checkout"
              className="mb-1 block text-xs font-medium uppercase tracking-wider text-body-text"
            >
              Check Out
            </label>
            <input
              id="checkout"
              type="date"
              className="w-full border-b border-gray-200 bg-transparent px-2 py-2 text-sm text-body-text focus:border-brand focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="adults"
              className="mb-1 block text-xs font-medium uppercase tracking-wider text-body-text"
            >
              Adults
            </label>
            <select
              id="adults"
              defaultValue="1"
              className="w-full border-b border-gray-200 bg-transparent px-2 py-2 text-sm text-body-text focus:border-brand focus:outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="children"
              className="mb-1 block text-xs font-medium uppercase tracking-wider text-body-text"
            >
              Children
            </label>
            <select
              id="children"
              defaultValue="1"
              className="w-full border-b border-gray-200 bg-transparent px-2 py-2 text-sm text-body-text focus:border-brand focus:outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <button
            type="button"
            className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Check Availability
          </button>
        </div>
      </div>
    </section>
  )
}
