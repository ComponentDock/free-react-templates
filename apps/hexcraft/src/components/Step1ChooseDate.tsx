import type { BookingData } from './BookingWizard'

interface Step1ChooseDateProps {
  data: BookingData
  onUpdate: (partial: Partial<BookingData>) => void
  onNext: () => void
}

export function Step1ChooseDate({ data, onUpdate, onNext }: Step1ChooseDateProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-bold text-white">Choose Date</h2>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="check-in" className="mb-1 block text-sm text-white/70">
            Check In
          </label>
          <input
            id="check-in"
            type="date"
            value={data.checkIn}
            onChange={(e) => onUpdate({ checkIn: e.target.value })}
            className="w-full border-b border-muted-blue bg-transparent px-2 py-2 text-white outline-none placeholder:text-text-muted"
          />
        </div>

        <div>
          <label htmlFor="check-out" className="mb-1 block text-sm text-white/70">
            Check Out
          </label>
          <input
            id="check-out"
            type="date"
            value={data.checkOut}
            onChange={(e) => onUpdate({ checkOut: e.target.value })}
            className="w-full border-b border-muted-blue bg-transparent px-2 py-2 text-white outline-none placeholder:text-text-muted"
          />
        </div>

        <div>
          <label htmlFor="duration" className="mb-1 block text-sm text-white/70">
            Duration
          </label>
          <select
            id="duration"
            value={data.duration}
            onChange={(e) => onUpdate({ duration: e.target.value })}
            className="w-full border-b border-muted-blue bg-transparent px-2 py-2 text-white outline-none"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n} className="bg-navy text-white">
                {n} Night{n > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rooms" className="mb-1 block text-sm text-white/70">
            Rooms
          </label>
          <select
            id="rooms"
            value={data.rooms}
            onChange={(e) => onUpdate({ rooms: e.target.value })}
            className="w-full border-b border-muted-blue bg-transparent px-2 py-2 text-white outline-none"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n} className="bg-navy text-white">
                {n} Room{n > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={onNext}
          className="rounded-[21px] bg-gold px-10 py-2.5 text-sm font-medium uppercase text-navy transition-colors hover:bg-gold-hover"
        >
          Book Now
        </button>
      </div>
    </div>
  )
}
