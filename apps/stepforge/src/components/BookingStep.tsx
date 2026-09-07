import type { BookingData } from '../types'
import { ROOM_OPTIONS, TIME_OPTIONS } from '../types'

interface BookingStepProps {
  data: BookingData
  onChange: (field: keyof BookingData, value: string) => void
}

export function BookingStep({ data, onChange }: BookingStepProps) {
  return (
    <div>
      <div className="flex items-center justify-between pb-9">
        <h3 className="text-3xl font-bold text-white">Booking Information</h3>
        <span className="text-lg text-gray-400">2/3</span>
      </div>

      <div className="mb-5">
        <img
          src="https://picsum.photos/seed/stepforge-booking/800/200"
          alt="Booking"
          className="w-full rounded-md object-cover"
        />
      </div>

      <div className="pb-6">
        <label className="mb-2 block text-sm font-semibold text-brand-accent">Choose a Room</label>
        <div className="relative">
          <select
            value={data.room}
            onChange={(e) => onChange('room', e.target.value)}
            className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base text-white outline-none focus:border-brand-accent"
          >
            {ROOM_OPTIONS.map((r) => (
              <option key={r} value={r} className="text-gray-600">
                {r}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white">
            ▼
          </span>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="w-1/2">
          <label className="mb-2 block text-sm font-semibold text-brand-accent">
            Organization Day
          </label>
          <input
            type="text"
            value={data.day}
            onChange={(e) => onChange('day', e.target.value)}
            placeholder="15 / 08 / 2024"
            className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base text-white outline-none placeholder:text-white focus:border-brand-accent"
          />
        </div>
        <div className="w-1/2">
          <label className="mb-2 block text-sm font-semibold text-brand-accent">Time Open</label>
          <div className="relative">
            <select
              value={data.time}
              onChange={(e) => onChange('time', e.target.value)}
              className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base text-white outline-none focus:border-brand-accent"
            >
              {TIME_OPTIONS.map((t) => (
                <option key={t} value={t} className="text-gray-600">
                  {t}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white">
              ▼
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
