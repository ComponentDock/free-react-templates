import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function BookingForm({ className }: { className?: string }) {
  return (
    <section id="booking" className={cn('bg-ink py-12', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
            Reservation
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Reserve A Perfect Room
          </h2>
        </div>

        <form
          className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
            <label
              htmlFor="checkin"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60"
            >
              Check In
            </label>
            <input
              id="checkin"
              type="date"
              className="border border-white/20 bg-white/10 px-3 py-3 text-sm text-white placeholder-white/50 focus:border-brand focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="checkout"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60"
            >
              Check Out
            </label>
            <input
              id="checkout"
              type="date"
              className="border border-white/20 bg-white/10 px-3 py-3 text-sm text-white placeholder-white/50 focus:border-brand focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="room-type"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60"
            >
              Room Type
            </label>
            <select
              id="room-type"
              className="border border-white/20 bg-white/10 px-3 py-3 text-sm text-white focus:border-brand focus:outline-none"
            >
              <option value="">Select Room</option>
              <option value="suite">Suite</option>
              <option value="family">Family</option>
              <option value="deluxe">Deluxe</option>
              <option value="classic">Classic</option>
              <option value="superior">Superior</option>
              <option value="luxe">Luxe</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="adults"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60"
            >
              Adults
            </label>
            <select
              id="adults"
              className="border border-white/20 bg-white/10 px-3 py-3 text-sm text-white focus:border-brand focus:outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="children"
              className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60"
            >
              Children
            </label>
            <select
              id="children"
              className="border border-white/20 bg-white/10 px-3 py-3 text-sm text-white focus:border-brand focus:outline-none"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-5">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[2px] text-white transition hover:bg-accent/90"
            >
              <Search size={16} />
              Reserve
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
