import type { BookingDetails, StepErrors } from '../types'

interface BookingDetailsStepProps {
  data: BookingDetails
  errors: StepErrors
  onChange: (data: BookingDetails) => void
}

const SERVICE_TYPES = [
  { value: '', label: 'Select a service' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'follow-up', label: 'Follow-up Visit' },
  { value: 'assessment', label: 'Assessment' },
  { value: 'treatment', label: 'Treatment Session' },
]

const TIME_SLOTS = [
  { value: '', label: 'Select a time' },
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '13:00', label: '1:00 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
]

export function BookingDetailsStep({ data, errors, onChange }: BookingDetailsStepProps) {
  return (
    <section aria-labelledby="booking-details-heading" className="space-y-5">
      <h2 id="booking-details-heading" className="text-xl font-bold text-brand-text">
        Booking Details
      </h2>

      <div>
        <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-700">
          Date *
        </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={data.date}
          onChange={(e) => onChange({ ...data, date: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-text transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.date}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="timeSlot" className="mb-1 block text-sm font-medium text-gray-700">
          Time Slot *
        </label>
        <select
          id="timeSlot"
          name="timeSlot"
          required
          value={data.timeSlot}
          onChange={(e) => onChange({ ...data, timeSlot: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-text transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
        >
          {TIME_SLOTS.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
        {errors.timeSlot && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.timeSlot}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-gray-700">
          Service Type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={data.serviceType}
          onChange={(e) => onChange({ ...data, serviceType: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-text transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
        >
          {SERVICE_TYPES.map((svc) => (
            <option key={svc.value} value={svc.value}>
              {svc.label}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.serviceType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Any special requests..."
          value={data.notes}
          onChange={(e) => onChange({ ...data, notes: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-text transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
        />
      </div>
    </section>
  )
}
