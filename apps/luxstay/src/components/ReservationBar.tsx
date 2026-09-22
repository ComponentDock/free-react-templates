import { Search } from 'lucide-react'

export function ReservationBar() {
  return (
    <section aria-label="Reservation form" className="relative z-10 -mt-24 bg-dark-purple">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <form className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 md:grid-cols-5">
          <div>
            <label htmlFor="checkin" className="mb-1 block text-xs font-medium text-white">
              Check-in Date
            </label>
            <input
              id="checkin"
              type="date"
              className="w-full rounded border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="checkout" className="mb-1 block text-xs font-medium text-white">
              Check-out Date
            </label>
            <input
              id="checkout"
              type="date"
              className="w-full rounded border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder-white/50 focus:border-brand-blue focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="adults" className="mb-1 block text-xs font-medium text-white">
              Adults
            </label>
            <select
              id="adults"
              className="w-full rounded border border-white/30 bg-transparent px-3 py-2 text-sm text-white focus:border-brand-blue focus:outline-none"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n} className="text-black">
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="children" className="mb-1 block text-xs font-medium text-white">
              Children
            </label>
            <select
              id="children"
              className="w-full rounded border border-white/30 bg-transparent px-3 py-2 text-sm text-white focus:border-brand-blue focus:outline-none"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n} className="text-black">
                  {n}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded bg-brand-blue px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-white hover:bg-blue-600"
          >
            <Search size={16} />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
