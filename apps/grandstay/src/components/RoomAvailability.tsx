import { Ruler, Users, Bed, Eye } from 'lucide-react'
import { ROOM, CHECK_FORM } from '../data'

const ICON_MAP = {
  ruler: Ruler,
  users: Users,
  bed: Bed,
  eye: Eye,
} as const

/** RoomAvailability — two-column layout: left room card with image,
    title, price, feature icons; right check availability form. */
export function RoomAvailability() {
  return (
    <section id="rooms" className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Room Card */}
          <div className="overflow-hidden bg-white shadow-md">
            <img src={ROOM.image} alt={ROOM.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl font-bold text-navy">{ROOM.title}</h3>
                <span className="text-2xl font-bold text-brand">{ROOM.price}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {ROOM.features.map((feat) => {
                  const Icon = ICON_MAP[feat.icon]
                  return (
                    <div key={feat.label} className="flex items-center gap-2 text-sm text-ink">
                      <Icon className="h-4 w-4 text-brand" />
                      <span>{feat.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Check Availability Form */}
          <div className="border-2 border-brand bg-white p-8 shadow-md">
            <h3 className="mb-6 font-heading text-xl font-bold text-navy">Check Availability</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="arrival" className="mb-1 block text-sm font-semibold text-navy">
                  {CHECK_FORM.arrivalLabel}
                </label>
                <input
                  type="date"
                  id="arrival"
                  className="w-full border border-gray-300 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="departure" className="mb-1 block text-sm font-semibold text-navy">
                  {CHECK_FORM.departureLabel}
                </label>
                <input
                  type="date"
                  id="departure"
                  className="w-full border border-gray-300 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="room-type" className="mb-1 block text-sm font-semibold text-navy">
                  {CHECK_FORM.roomTypeLabel}
                </label>
                <select
                  id="room-type"
                  className="w-full border border-gray-300 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                >
                  {CHECK_FORM.roomTypes.map((rt) => (
                    <option key={rt} value={rt}>
                      {rt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="mb-1 block text-sm font-semibold text-navy">
                  {CHECK_FORM.quantityLabel}
                </label>
                <input
                  type="number"
                  id="quantity"
                  min={1}
                  max={10}
                  defaultValue={1}
                  className="w-full border border-gray-300 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full border-2 border-brand bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-brand hover:text-white"
              >
                {CHECK_FORM.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
