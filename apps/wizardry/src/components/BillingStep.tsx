import type { WizardData } from '../types'

interface BillingStepProps {
  data: WizardData
  errors: Partial<Record<keyof WizardData, string>>
  onChange: (field: keyof WizardData, value: string) => void
}

export function BillingStep({ data, errors, onChange }: BillingStepProps) {
  return (
    <div>
      <div className="bg-brand-sky rounded-md px-8 py-2.5 -mx-8 mb-6">
        <h3 className="text-white text-xl font-bold m-0">Billing Setup</h3>
      </div>

      <div className="mb-5">
        <label htmlFor="cardName" className="block text-gray-600 text-base pb-2">
          Card Holder Name
        </label>
        <input
          type="text"
          id="cardName"
          placeholder="Taylor Fuller"
          value={data.cardName}
          onChange={(e) => onChange('cardName', e.target.value)}
          className={`w-full px-5 py-3 border rounded text-base font-semibold text-gray-800 outline-none focus:border-brand-sky ${
            errors.cardName ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.cardName && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.cardName}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="cardNumber" className="block text-gray-600 text-base pb-2">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="4224-3228-6160-5079"
          value={data.cardNumber}
          onChange={(e) => onChange('cardNumber', e.target.value)}
          className={`w-full px-5 py-3 border rounded text-base font-semibold text-gray-800 outline-none focus:border-brand-sky ${
            errors.cardNumber ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.cardNumber}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="cvc" className="block text-gray-600 text-base pb-2">
          CVC
        </label>
        <input
          type="password"
          id="cvc"
          value={data.cvc}
          onChange={(e) => onChange('cvc', e.target.value)}
          className={`w-full px-5 py-3 border rounded text-base font-semibold text-gray-800 outline-none focus:border-brand-sky ${
            errors.cvc ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.cvc && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.cvc}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="expiration" className="block text-gray-600 text-base pb-2">
          Expiration (MM/YYYY)
        </label>
        <input
          type="text"
          id="expiration"
          placeholder="MM/YYYY"
          value={data.expiration}
          onChange={(e) => onChange('expiration', e.target.value)}
          className={`w-full px-5 py-3 border rounded text-base font-semibold text-gray-800 outline-none focus:border-brand-sky ${
            errors.expiration ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.expiration && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.expiration}
          </p>
        )}
      </div>
    </div>
  )
}
