import type { FormData, StepErrors } from '../types'

interface ConfirmationStepProps {
  data: FormData
  termsAccepted: boolean
  errors: StepErrors
  onTermsChange: (accepted: boolean) => void
}

export function ConfirmationStep({
  data,
  termsAccepted,
  errors,
  onTermsChange,
}: ConfirmationStepProps) {
  return (
    <section aria-labelledby="confirmation-heading" className="space-y-5">
      <h2 id="confirmation-heading" className="text-xl font-bold text-brand-text">
        Confirmation
      </h2>

      <div className="rounded-lg border border-brand-border bg-gray-50 p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Summary</h3>
        <dl className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-600">Name:</dt>
            <dd className="font-medium text-brand-text">{data.fullName || '—'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Email:</dt>
            <dd className="font-medium text-brand-text">{data.email || '—'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Phone:</dt>
            <dd className="font-medium text-brand-text">{data.phone || '—'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Date:</dt>
            <dd className="font-medium text-brand-text">{data.date || '—'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Time:</dt>
            <dd className="font-medium text-brand-text">{data.timeSlot || '—'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Service:</dt>
            <dd className="font-medium text-brand-text">{data.serviceType || '—'}</dd>
          </div>
          {data.notes && (
            <div className="flex justify-between">
              <dt className="text-gray-600">Notes:</dt>
              <dd className="font-medium text-brand-text">{data.notes}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={termsAccepted}
          onChange={(e) => onTermsChange(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I agree to the Terms and Conditions *
        </label>
      </div>
      {errors.terms && (
        <p className="text-sm text-red-600" role="alert">
          {errors.terms}
        </p>
      )}
    </section>
  )
}
