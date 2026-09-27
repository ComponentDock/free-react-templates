import { ChevronDown } from 'lucide-react'

export function BookingForm() {
  return (
    <section id="book" className="relative z-10 -mt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <form className="rounded-lg bg-white p-6 shadow-lg" aria-label="Hotel booking form">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Enter your keywords.."
                className="w-full border border-gray-200 px-4 py-3 text-sm text-ink placeholder-mist focus:border-brand focus:outline-none"
                aria-label="Search keywords"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <select
                  className="w-full appearance-none border border-gray-200 px-4 py-3 text-sm text-mist focus:border-brand focus:outline-none"
                  aria-label="Arrival time"
                >
                  <option value="" disabled selected>
                    Arrival
                  </option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                  aria-hidden="true"
                />
              </div>
              <div className="relative">
                <select
                  className="w-full appearance-none border border-gray-200 px-4 py-3 text-sm text-mist focus:border-brand focus:outline-none"
                  aria-label="Number of rooms"
                >
                  <option value="" disabled selected>
                    Number of room
                  </option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="relative">
              <select
                className="w-full appearance-none border border-gray-200 px-4 py-3 text-sm text-mist focus:border-brand focus:outline-none"
                aria-label="Departure time"
              >
                <option value="" disabled selected>
                  Departure
                </option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                aria-hidden="true"
              />
            </div>
            <div className="relative">
              <select
                className="w-full appearance-none border border-gray-200 px-4 py-3 text-sm text-mist focus:border-brand focus:outline-none"
                aria-label="Number of adults"
              >
                <option value="" disabled selected>
                  Adult
                </option>
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                aria-hidden="true"
              />
            </div>
            <div className="relative">
              <select
                className="w-full appearance-none border border-gray-200 px-4 py-3 text-sm text-mist focus:border-brand focus:outline-none"
                aria-label="Number of children"
              >
                <option value="" disabled selected>
                  Child
                </option>
                <option value="0">No Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                aria-hidden="true"
              />
            </div>
            <button
              type="submit"
              className="bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
