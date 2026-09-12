import { useState } from 'react'
import { Tv, Wifi, Wind, Car, Waves, Minus, Plus } from 'lucide-react'
const amenities = [
  { icon: Tv, label: 'Smart TV' },
  { icon: Wifi, label: 'WiFi' },
  { icon: Wind, label: 'AC' },
  { icon: Car, label: 'Parking' },
  { icon: Waves, label: 'Pool' },
]

const roomTypes = ['Master Suite', 'Double Room', 'Single Room', 'Special Room']

function Counter({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs font-semibold uppercase text-lodge-500">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-lodge-300 text-lodge-500 hover:bg-lodge-100 transition-colors"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-3 w-3" />
        </button>
        <span className="w-6 text-center text-sm font-semibold">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-lodge-300 text-lodge-500 hover:bg-lodge-100 transition-colors"
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}

export function RoomBooking() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [roomType, setRoomType] = useState(roomTypes[0])

  return (
    <section id="rooms" className="bg-lodge-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Room showcase */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <img
              src="https://picsum.photos/seed/lodge-junior/600/400"
              alt="Junior Suite"
              className="mb-4 w-full rounded object-cover"
              loading="lazy"
            />
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Junior Suite
              </h2>
              <div className="text-right">
                <span className="text-xs text-lodge-500">From</span>
                <span className="ml-1 text-2xl font-bold text-gold-500">$252</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              {amenities.map((a) => (
                <div key={a.label} className="flex items-center gap-1.5 text-sm text-lodge-600">
                  <a.icon className="h-4 w-4 text-gold-500" />
                  <span>{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Check availability form */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Check Availability
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Date pickers */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-lodge-500">
                    From
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded border border-lodge-200 px-3 py-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-lodge-500">
                    To
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full rounded border border-lodge-200 px-3 py-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Counter row */}
              <div className="flex justify-center gap-8">
                <Counter label="Adults" value={adults} onChange={setAdults} />
                <Counter label="Children" value={children} onChange={setChildren} />
                <Counter label="Rooms" value={rooms} onChange={setRooms} />
              </div>

              {/* Room type */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-lodge-500">
                  Room
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full rounded border border-lodge-200 px-3 py-2 text-sm focus:border-gold-500 focus:outline-none"
                >
                  {roomTypes.map((rt) => (
                    <option key={rt} value={rt}>
                      {rt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded bg-lodge-900 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-lodge-800"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
