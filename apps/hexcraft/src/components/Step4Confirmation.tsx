import type { BookingData } from './BookingWizard'

interface Step4ConfirmationProps {
  data: BookingData
  onUpdate: (partial: Partial<BookingData>) => void
  onBack: () => void
  onSubmit: () => void
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 py-2 text-sm">
      <span className="text-white/60">{label}</span>
      <span className="text-white">{value || '—'}</span>
    </div>
  )
}

function ConfirmCheckbox({
  label,
  id,
  checked,
  onChange,
}: {
  label: string
  id: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-white/70">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-gold"
      />
      {label}
    </label>
  )
}

export function Step4Confirmation({ data, onUpdate, onBack, onSubmit }: Step4ConfirmationProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-bold text-white">Confirmation</h2>

      {/* Boarding Summary */}
      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <h3 className="mb-2 text-sm font-medium text-gold">Boarding Summary</h3>
        <SummaryRow label="Check In" value={data.checkIn} />
        <SummaryRow label="Check Out" value={data.checkOut} />
        <SummaryRow
          label="Duration"
          value={`${data.duration} Night${Number(data.duration) > 1 ? 's' : ''}`}
        />
        <SummaryRow label="Rooms" value={data.rooms} />
        <SummaryRow label="Room 1 Adults" value={data.room1Adults} />
        <SummaryRow label="Room 1 Children" value={data.room1Children} />
        <SummaryRow label="Room 2 Adults" value={data.room2Adults} />
        <SummaryRow label="Room 2 Children" value={data.room2Children} />
      </div>

      {/* Confirmation checkboxes */}
      <div className="flex flex-col gap-3">
        <ConfirmCheckbox
          label="I have read and accept terms and conditions"
          id="confirm-terms"
          checked={data.confirmTerms}
          onChange={(v) => onUpdate({ confirmTerms: v })}
        />
        <ConfirmCheckbox
          label="I understand that my booking may be subject to availability"
          id="confirm-availability"
          checked={data.confirmAvailability}
          onChange={(v) => onUpdate({ confirmAvailability: v })}
        />
        <ConfirmCheckbox
          label="I agree with privacy policy"
          id="confirm-privacy"
          checked={data.confirmPrivacy}
          onChange={(v) => onUpdate({ confirmPrivacy: v })}
        />
        <ConfirmCheckbox
          label="I agree with cancellation and refund policy"
          id="confirm-cancellation"
          checked={data.confirmCancellation}
          onChange={(v) => onUpdate({ confirmCancellation: v })}
        />
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
          onClick={onSubmit}
          className="rounded-[21px] bg-gold px-8 py-2.5 text-sm font-medium uppercase text-navy transition-colors hover:bg-gold-hover"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
