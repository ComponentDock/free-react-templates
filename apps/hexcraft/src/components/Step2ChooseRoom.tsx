import type { BookingData } from './BookingWizard'

interface Step2ChooseRoomProps {
  data: BookingData
  onUpdate: (partial: Partial<BookingData>) => void
  onBack: () => void
  onNext: () => void
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 py-2 text-sm">
      <span className="text-white/60">{label}</span>
      <span className="text-white">{value || '—'}</span>
    </div>
  )
}

function GuestSelect({
  label,
  id,
  value,
  onChange,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm text-white/70">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-muted-blue bg-transparent px-2 py-2 text-white outline-none"
      >
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n} className="bg-navy text-white">
            {n}
          </option>
        ))}
      </select>
    </div>
  )
}

export function Step2ChooseRoom({ data, onUpdate, onBack, onNext }: Step2ChooseRoomProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-bold text-white">Choose Room</h2>

      {/* Boarding summary */}
      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <h3 className="mb-2 text-sm font-medium text-gold">Your Boarding Summary</h3>
        <SummaryRow label="Check In" value={data.checkIn} />
        <SummaryRow label="Check Out" value={data.checkOut} />
        <SummaryRow
          label="Duration"
          value={`${data.duration} Night${Number(data.duration) > 1 ? 's' : ''}`}
        />
        <SummaryRow label="Rooms" value={data.rooms} />
      </div>

      {/* Room 1 */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium text-gold">Room 1</h3>
        <div className="grid grid-cols-2 gap-4">
          <GuestSelect
            label="Adults"
            id="room-1-adults"
            value={data.room1Adults}
            onChange={(v) => onUpdate({ room1Adults: v })}
          />
          <GuestSelect
            label="Children"
            id="room-1-children"
            value={data.room1Children}
            onChange={(v) => onUpdate({ room1Children: v })}
          />
        </div>
      </div>

      {/* Room 2 */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium text-gold">Room 2</h3>
        <div className="grid grid-cols-2 gap-4">
          <GuestSelect
            label="Adults"
            id="room-2-adults"
            value={data.room2Adults}
            onChange={(v) => onUpdate({ room2Adults: v })}
          />
          <GuestSelect
            label="Children"
            id="room-2-children"
            value={data.room2Children}
            onChange={(v) => onUpdate({ room2Children: v })}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-[21px] border border-white/30 px-8 py-2.5 text-sm font-medium uppercase text-white transition-colors hover:bg-white/10"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-[21px] bg-gold px-8 py-2.5 text-sm font-medium uppercase text-navy transition-colors hover:bg-gold-hover"
        >
          Next
        </button>
      </div>
    </div>
  )
}
