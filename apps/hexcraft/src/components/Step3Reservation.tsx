import type { BookingData } from './BookingWizard'

interface Step3ReservationProps {
  data: BookingData
  onUpdate: (partial: Partial<BookingData>) => void
  onBack: () => void
  onNext: () => void
}

function TextInput({
  label,
  id,
  type = 'text',
  value,
  onChange,
}: {
  label: string
  id: string
  type?: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm text-white/70">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-muted-blue bg-transparent px-2 py-2 text-white outline-none placeholder:text-text-muted"
      />
    </div>
  )
}

export function Step3Reservation({ data, onUpdate, onBack, onNext }: Step3ReservationProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-heading text-2xl font-bold text-white">Make a Reservation</h2>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="First Name"
          id="first-name"
          value={data.firstName}
          onChange={(v) => onUpdate({ firstName: v })}
        />
        <TextInput
          label="Last Name"
          id="last-name"
          value={data.lastName}
          onChange={(v) => onUpdate({ lastName: v })}
        />
      </div>

      <TextInput
        label="Email"
        id="email"
        type="email"
        value={data.email}
        onChange={(v) => onUpdate({ email: v })}
      />
      <TextInput
        label="Phone"
        id="phone"
        type="tel"
        value={data.phone}
        onChange={(v) => onUpdate({ phone: v })}
      />
      <TextInput
        label="Address"
        id="address"
        value={data.address}
        onChange={(v) => onUpdate({ address: v })}
      />

      <div className="grid grid-cols-3 gap-4">
        <TextInput
          label="City"
          id="city"
          value={data.city}
          onChange={(v) => onUpdate({ city: v })}
        />
        <TextInput
          label="Country"
          id="country"
          value={data.country}
          onChange={(v) => onUpdate({ country: v })}
        />
        <TextInput
          label="Zip Code"
          id="zip"
          value={data.zip}
          onChange={(v) => onUpdate({ zip: v })}
        />
      </div>

      <div>
        <label htmlFor="special-requests" className="mb-1 block text-sm text-white/70">
          Special Requests
        </label>
        <textarea
          id="special-requests"
          value={data.specialRequests}
          onChange={(e) => onUpdate({ specialRequests: e.target.value })}
          rows={3}
          className="w-full border-b border-muted-blue bg-transparent px-2 py-2 text-white outline-none placeholder:text-text-muted"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-white/70">
        <input
          type="checkbox"
          checked={data.terms}
          onChange={(e) => onUpdate({ terms: e.target.checked })}
          className="accent-gold"
        />
        I agree to the Terms &amp; Conditions
      </label>

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
