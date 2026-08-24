import { CalendarDays, Users, Search } from 'lucide-react'

export function BookingForm() {
  return (
    <section id="booking" className="relative z-20 -mt-16 bg-white py-10 shadow-lg">
      <div className="container mx-auto px-4">
        <form
          className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Check In */}
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">Check In</label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
              <input
                type="date"
                placeholder="DD/MM/YY"
                className="w-full rounded-full border border-gray-200 bg-paper py-3 pl-10 pr-4 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
          </div>

          {/* Check Out */}
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">Check Out</label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
              <input
                type="date"
                placeholder="DD/MM/YY"
                className="w-full rounded-full border border-gray-200 bg-paper py-3 pl-10 pr-4 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
          </div>

          {/* Guest */}
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">Guest</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
              <select className="w-full appearance-none rounded-full border border-gray-200 bg-paper py-3 pl-10 pr-4 text-sm text-ink outline-none focus:border-brand">
                <option>Number of guests</option>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>Family</option>
              </select>
            </div>
          </div>

          {/* Search */}
          <div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              <Search size={16} />
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
