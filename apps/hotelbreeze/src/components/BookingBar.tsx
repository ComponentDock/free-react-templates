import { cn } from '@free-react-templates/ui'

interface BookingBarProps {
  className?: string
}

export function BookingBar({ className }: BookingBarProps) {
  return (
    <section className={cn('relative z-10 mx-auto -mt-16 max-w-5xl px-4', className)}>
      <div className="flex flex-wrap items-end gap-4 rounded-sm bg-white p-6 shadow-lg md:flex-nowrap">
        <div className="flex-1">
          <label
            htmlFor="checkin"
            className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Check In
          </label>
          <input
            id="checkin"
            type="date"
            className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-red-500 focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="checkout"
            className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Check Out
          </label>
          <input
            id="checkout"
            type="date"
            className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-red-500 focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="adults"
            className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Adults
          </label>
          <select
            id="adults"
            defaultValue="1"
            className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-red-500 focus:outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="flex-1">
          <label
            htmlFor="children"
            className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Children
          </label>
          <select
            id="children"
            defaultValue="1"
            className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-red-500 focus:outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button
          type="button"
          className="bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          Check Availability
        </button>
      </div>
    </section>
  )
}
