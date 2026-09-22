import { Calendar, Clock } from 'lucide-react'

export function Booking() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <div className="w-full max-w-md">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-lg bg-white p-6 shadow-lg"
            >
              <h3 className="mb-4 text-xl font-semibold">Book your apartment</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Check-In"
                      className="w-full rounded border border-gray-200 py-2.5 pl-9 pr-4 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Check-Out"
                      className="w-full rounded border border-gray-200 py-2.5 pl-9 pr-4 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <select className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm text-text-body">
                    <option value="">Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm text-text-body">
                    <option value="">Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm"
                  />
                  <div className="relative">
                    <Clock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Time"
                      className="w-full rounded border border-gray-200 py-2.5 pl-9 pr-4 text-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-brand px-4 py-3 text-xs font-semibold uppercase tracking-[3px] text-white hover:bg-brand-dark transition-colors"
                >
                  Book Apartment Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
